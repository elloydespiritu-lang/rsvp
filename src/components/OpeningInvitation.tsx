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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div
        className="relative w-full max-w-md aspect-[4/3] mx-4"
        style={{ perspective: "1000px" }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-maroon-dark rounded-sm shadow-2xl" />

        {/* Letter (Slides up) */}
        <motion.div
          className="absolute inset-x-2 top-2 bottom-2 bg-cream rounded-sm flex flex-col items-center justify-center text-center p-6 shadow-inner z-0 border border-gold/30"
          animate={
            isOpen
              ? { y: -150, opacity: 0, scale: 0.9 }
              : { y: 0, opacity: 1, scale: 1 }
          }
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="w-12 h-12 mb-4 border border-gold rounded-full flex items-center justify-center">
            <span className="text-gold font-serif italic text-xl">L&N</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-maroon mb-2">
            LLoyd & Nicole
          </h1>
          <p className="font-sans text-xs tracking-widest text-ink-light uppercase">
            Are getting married
          </p>
        </motion.div>

        {/* Envelope Left Flap */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-maroon z-10"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />

        {/* Envelope Right Flap */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-maroon z-10"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        {/* Envelope Bottom Flap */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#7a2222] z-20"
          style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
        />

        {/* Envelope Top Flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[55%] bg-maroon-light origin-top z-30 drop-shadow-md"
          style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Front Content (Wax Seal & Button) */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
          animate={
            isOpen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.4 }}
        >
          {/* Wax Seal */}
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-600 mb-8 pointer-events-auto">
            <span className="text-maroon-dark font-serif italic text-2xl">
              L&N
            </span>
          </div>

          <button
            onClick={handleOpen}
            className="group relative pointer-events-auto overflow-hidden rounded-full border border-gold/40 bg-white/40 px-10 py-4 text-lg font-serif italic tracking-wide text-maroon-dark backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)]"
          >
            <span className="relative z-10">Open Invitation</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
