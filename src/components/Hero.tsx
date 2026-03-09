import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: 'url("https://raw.githubusercontent.com/elloydespiritu-lang/rsvp/main/public/hero.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p className="font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-6" style={{ color: '#E6DED3', textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>
            Together with our families, we invite you to celebrate our love.
          </p>
        </motion.div>

        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-medium tracking-tight flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
        >
          <span style={{ color: '#F7F4EF' }}>LLoyd</span>
          <span className="italic font-light text-4xl md:text-6xl" style={{ color: '#D4AF37' }}>&amp;</span>
          <span style={{ color: '#F7F4EF' }}>Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="font-sans text-lg md:text-xl font-light tracking-widest mb-12" style={{ color: '#E8E0D5', textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>
            MAY 18, 2026
          </p>
          
          <a 
            href="#greeting"
            className="inline-block border border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-maroon transition-all duration-500 px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium rounded-full"
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
