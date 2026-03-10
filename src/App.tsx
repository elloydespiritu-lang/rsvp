import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Volume2, VolumeX } from "lucide-react";
import Hero from "./components/Hero";
import Greeting from "./components/Greeting";
import Details from "./components/Details";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import DressCode from "./components/Extras";
import OpeningInvitation from "./components/OpeningInvitation";

export default function App() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const code = params.get("invite");

    if (code) {
      setInviteCode(code);
      fetchGuestData(code);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchGuestData = async (code: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbySiuvSIKvwLzywvIuosnw67HOKZjkfEtHJBovS_G4P2pqr0vvnN8mOse1KA8vG2nz0RA/exec?action=getGuest&inviteCode=${code}`,
      );
      const data = await response.json();

      if (data && data.success) {
        setGuestName(data.guestName);
      } else {
        setGuestName("Honored Guest");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching guest data:", error);
      setGuestName("Honored Guest");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpened) return;

    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.muted = isMuted;
          if (!isMuted) {
            await audioRef.current.play();
          } else {
            audioRef.current.pause();
          }
        } catch (error) {
          console.error("Audio playback error:", error);
        }
      }
    };

    playAudio();
  }, [isMuted, isOpened]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsMuted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-maroon-dark font-serif text-3xl italic"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-rose-nude text-ink relative ${!isOpened ? "h-screen overflow-hidden" : "overflow-hidden"}`}
    >
      <AnimatePresence>
        {!isOpened && <OpeningInvitation onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      {/* Background floral pattern (subtle) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/floral-pattern.png")',
        }}
      ></div>

      {/* Floating Music Toggle */}
      <button
        onClick={toggleMute}
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 overflow-hidden rounded-full border border-maroon/30 bg-white/60 px-4 py-3 text-maroon-dark backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-maroon/60 hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(122,15,28,0.2)]"
        aria-label="Toggle background music"
      >
        <span className="relative z-10 flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-medium">
          {isMuted ? (
            <>
              <VolumeX size={18} />
              <span>Music Off</span>
            </>
          ) : (
            <>
              <Volume2 size={18} />
              <span>Music On</span>
            </>
          )}
        </span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </button>

      {/* Audio Element (Hidden) */}
      <audio 
        ref={audioRef} 
        id="bg-music" 
        loop 
        muted={isMuted}
        preload="auto"
        playsInline
        onError={(e) => console.error("Audio element error:", e)}
      >
        <source src="/music/perfect-instrumental.mp3" type="audio/mpeg" />
      </audio>

      <main className="relative z-10">
        <Hero />
        <Greeting guestName={guestName} />
        <Details />
        <Countdown targetDate="2026-05-18T15:00:00" />
        <Gallery />
        <DressCode />
        <RSVP inviteCode={inviteCode} guestName={guestName} />
      </main>

      <footer className="py-12 text-center bg-maroon-dark text-cream/60 text-sm font-sans">
        <p className="font-serif italic text-lg mb-2 text-blush">
          Thank you for being part of our story.
        </p>
        <p>
          &copy; {new Date().getFullYear()} LLoyd & Nicole. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
