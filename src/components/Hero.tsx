import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-24 px-6 overflow-hidden bg-paper bg-paper-texture">
      <motion.div 
        className="invitation-card relative z-10 w-full flex flex-col items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle Top Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
        
        {/* Decorative Corner Accents (Subtle) */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-maroon/10 rounded-tl-3xl"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-maroon/10 rounded-tr-3xl"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-maroon/10 rounded-bl-3xl"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-maroon/10 rounded-br-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative z-10"
        >
          <p className="font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs mb-12 text-maroon/60 font-medium">
            Together with our families, we invite you to celebrate our love
          </p>
        </motion.div>

        <motion.h1 
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 font-medium tracking-tight flex flex-col items-center gap-2 md:gap-4 relative z-10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <span className="text-maroon-dark">Lloyd</span>
          <span className="italic font-light text-4xl md:text-6xl text-maroon/40">&amp;</span>
          <span className="text-maroon-dark">Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex flex-col items-center relative z-10"
        >
          <div className="w-16 h-[1px] bg-maroon/20 mb-8"></div>
          <p className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-[0.5em] mb-16 text-maroon-dark">
            MAY 18, 2026
          </p>
          
          <a 
            href="#greeting"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-maroon-dark px-14 py-5 text-[11px] font-sans uppercase tracking-[0.3em] text-white shadow-[0_10px_30px_rgba(122,15,28,0.2)] transition-all duration-700 hover:-translate-y-1 hover:bg-maroon hover:shadow-[0_15px_40px_rgba(122,15,28,0.3)] focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none"
          >
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <span className="text-maroon/40 text-[9px] uppercase tracking-[0.4em] font-sans font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-maroon/40 to-transparent"
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0], y: [0, 8, 16] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
