import { useState } from "react";
import { motion } from "motion/react";

interface OpeningInvitationProps {
  onOpen: () => void;
}

export default function OpeningInvitation({ onOpen }: OpeningInvitationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2500); // Wait for the full animation sequence
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-nude overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      <div
        className="relative w-full max-w-md aspect-[4/3] mx-4"
        style={{ perspective: "1500px" }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-maroon rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.15)]" />

        {/* Letter (Slides up) */}
        <motion.div
          className="absolute inset-x-3 top-3 bottom-3 bg-[#fcfbf9] rounded-md flex flex-col items-center justify-center text-center p-8 shadow-inner z-0 border border-maroon/10"
          animate={
            isOpen
              ? { y: -180, opacity: 0, scale: 0.95 }
              : { y: 0, opacity: 1, scale: 1 }
          }
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
        >
          <div className="w-14 h-14 mb-6 border border-maroon/30 rounded-full flex items-center justify-center">
            <span className="text-maroon font-serif italic text-2xl">L&N</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-maroon-dark mb-3 tracking-wide">
            LLoyd & Nicole
          </h1>
          <p className="font-sans text-[10px] tracking-[0.3em] text-ink-light uppercase">
            Are getting married
          </p>
        </motion.div>

        {/* Envelope Left Flap */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-maroon z-10 drop-shadow-[2px_0_5px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />

        {/* Envelope Right Flap */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-maroon z-10 drop-shadow-[-2px_0_5px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        {/* Envelope Bottom Flap */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] bg-maroon-dark z-20 drop-shadow-[0_-2px_5px_rgba(0,0,0,0.1)]"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />

        {/* Envelope Top Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[55%] bg-[#9B2C2C] origin-top z-30 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Front Content (Wax Seal & Button) */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
          animate={
            isOpen ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Wax Seal */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_2px_5px_rgba(255,255,255,0.3)] border border-[#8A7123] mb-10 pointer-events-auto relative">
            <div className="absolute inset-1 border border-[#8A7123]/30 rounded-full"></div>
            <span className="text-maroon-dark font-serif italic text-3xl drop-shadow-sm">
              L&N
            </span>
          </div>

          <button
            onClick={handleOpen}
            className="group relative pointer-events-auto overflow-hidden rounded-full border border-maroon/30 bg-white/60 px-12 py-4 text-[11px] font-sans uppercase tracking-[0.3em] text-maroon-dark backdrop-blur-md shadow-[0_8px_30px_rgba(122,15,28,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-maroon/50 hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(122,15,28,0.25)] focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none"
          >
            <span className="relative z-10">Open Invitation</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
