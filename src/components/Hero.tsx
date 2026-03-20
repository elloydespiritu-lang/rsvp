import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)), url("https://res.cloudinary.com/dyku3hrtp/image/upload/f_auto,q_auto/hero_jwy9fm.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <p 
            className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm lg:text-base mb-10 font-light" 
            style={{ color: '#F2F0EE', textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
          >
            Together with our families, we invite you to celebrate our love
          </p>
        </motion.div>

        <motion.h1 
          className="font-serif text-7xl md:text-8xl lg:text-9xl mb-10 font-medium tracking-wide flex flex-col items-center gap-4 md:gap-6"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
        >
          <span className="text-rose-nude drop-shadow-lg">Lloyd</span>
          <span className="italic font-light text-5xl md:text-7xl text-blush opacity-90">&amp;</span>
          <span className="text-rose-nude drop-shadow-lg">Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p 
            className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-[0.4em] mb-16" 
            style={{ color: '#F2F0EE', textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
          >
            MAY 18, 2026
          </p>
          
          <a 
            href="#greeting"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-12 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">Discover More</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-sans font-light" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>Scroll</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent"
          animate={{ height: [0, 64, 0], opacity: [0, 1, 0], y: [0, 10, 20] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
