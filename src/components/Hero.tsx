import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="font-sans uppercase tracking-[0.3em] text-sm md:text-base mb-6 text-cream/90">
            We are getting married
          </p>
        </motion.div>

        <motion.h1 
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 font-medium tracking-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Nicole <span className="text-gold italic font-light">&amp;</span> Elloyd
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="font-sans text-lg md:text-xl font-light tracking-widest mb-12 text-cream/90">
            MAY 18, 2026 &bull; MARIKINA CITY
          </p>
          
          <a 
            href="#rsvp"
            className="inline-block border border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-ink transition-all duration-500 px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium rounded-sm"
          >
            Open Invitation
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest font-sans">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
