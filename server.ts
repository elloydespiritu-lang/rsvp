import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("wedding.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invite_code TEXT UNIQUE,
    name TEXT
  );

  CREATE TABLE IF NOT EXISTS rsvps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invite_code TEXT,
    attendance TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(invite_code) REFERENCES guests(invite_code)
  );
`);

// Seed some sample guests if table is empty
const guestCount = db.prepare("SELECT COUNT(*) as count FROM guests").get() as { count: number };
if (guestCount.count === 0) {
  const insertGuest = db.prepare("INSERT INTO guests (invite_code, name) VALUES (?, ?)");
  insertGuest.run("GUEST123", "John & Jane Doe");
  insertGuest.run("FAMILY456", "The Smith Family");
  insertGuest.run("VIP789", "Honored Guest");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routes
  app.get("/api/guest", (req, res) => {
    const { inviteCode } = req.query;
    if (!inviteCode) {
      return res.status(400).json({ success: false, error: "Invite code is required" });
    }

    const guest = db.prepare("SELECT name FROM guests WHERE invite_code = ?").get(inviteCode) as { name: string } | undefined;

    if (guest) {
      res.json({ success: true, guestName: guest.name });
    } else {
      res.json({ success: false, error: "Guest not found" });
    }
  });

  app.post("/api/rsvp", (req, res) => {
    const { inviteCode, attendance, message } = req.body;

    if (!inviteCode || !attendance) {
      return res.status(400).json({ success: false, error: "Invite code and attendance are required" });
    }

    try {
      const insertRSVP = db.prepare("INSERT INTO rsvps (invite_code, attendance, message) VALUES (?, ?, ?)");
      insertRSVP.run(inviteCode, attendance, message || "");
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving RSVP:", error);
      res.status(500).json({ success: false, error: "Failed to save RSVP" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
