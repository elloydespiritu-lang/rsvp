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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper bg-paper-texture overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
    >
      <div
        className="relative w-full max-w-md aspect-[4/3] mx-4"
        style={{ perspective: "2000px" }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-maroon-dark rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.3)]" />

        {/* Letter (Slides up) */}
        <motion.div
          className="absolute inset-x-4 top-4 bottom-4 bg-white rounded-md flex flex-col items-center justify-center text-center p-8 shadow-inner z-0 border border-maroon/5"
          animate={
            isOpen
              ? { y: -220, opacity: 0, scale: 0.9 }
              : { y: 0, opacity: 1, scale: 1 }
          }
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          <div className="w-16 h-16 mb-8 border border-maroon/20 rounded-full flex items-center justify-center">
            <span className="text-maroon-dark font-serif italic text-3xl">L&N</span>
          </div>
          <h1 className="font-serif text-4xl text-maroon-dark mb-4 tracking-wide">
            LLoyd & Nicole
          </h1>
          <div className="w-12 h-[1px] bg-maroon/20 mb-4"></div>
          <p className="font-sans text-[10px] tracking-[0.4em] text-maroon/60 uppercase font-medium">
            Are getting married
          </p>
        </motion.div>

        {/* Envelope Left Flap */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-maroon-dark z-10 shadow-[4px_0_15px_rgba(0,0,0,0.2)]"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />

        {/* Envelope Right Flap */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-maroon-dark z-10 shadow-[-4px_0_15px_rgba(0,0,0,0.2)]"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        {/* Envelope Bottom Flap */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[65%] bg-[#6B0D18] z-20 shadow-[0_-4px_15px_rgba(0,0,0,0.2)]"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />

        {/* Envelope Top Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[60%] bg-[#8B1220] origin-top z-30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          animate={isOpen ? { rotateX: 160 } : { rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
        />

        {/* Front Content (Wax Seal & Button) */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
          animate={
            isOpen ? { opacity: 0, scale: 0.8, y: 40 } : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Wax Seal */}
          <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] via-[#C5A028] to-[#8A7123] rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,0.4)] border border-[#8A7123] mb-12 pointer-events-auto relative transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-1.5 border border-[#8A7123]/40 rounded-full"></div>
            <span className="text-maroon-dark font-serif italic text-4xl drop-shadow-md">
              L&N
            </span>
          </div>

          <button
            onClick={handleOpen}
            className="group relative pointer-events-auto overflow-hidden rounded-full border border-white/20 bg-white/10 px-14 py-5 text-[11px] font-sans uppercase tracking-[0.4em] text-white backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-700 hover:-translate-y-1 hover:bg-white/20 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span className="relative z-10">Open Invitation</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
