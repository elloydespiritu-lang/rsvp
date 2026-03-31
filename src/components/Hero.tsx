import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center md:justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:42%_70%] md:bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("https://res.cloudinary.com/dyku3hrtp/image/upload/v1774970334/att.AYTmlCBQhvIhHYmb2VItlUvMcqxpVwpJzmhs-oa3Hxk_bc9boa.jpg")',
          backgroundSize: 'cover'
        }}
      >
      </div>

      {/* Subtle Gradient Overlay for Text Readability (Desktop Only) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent hidden md:block" />

      <div className="relative z-10 text-center md:text-left text-white px-6 md:px-0 md:pl-[8%] lg:pl-[10%] w-full md:max-w-[520px] flex flex-col items-center md:items-start justify-center -translate-y-[25%] md:-translate-y-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <p 
            className="font-amoressa text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-10 font-light max-w-[280px] sm:max-w-none mx-auto md:mx-0" 
            style={{ color: '#F2F0EE', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
          >
            Together with our families, we invite you to celebrate our love.
          </p>
        </motion.div>

        <motion.h1 
          className="font-amoressa text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 md:mb-10 font-medium tracking-wide flex flex-col items-center md:items-start gap-2 md:gap-4"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
        >
          <span className="font-amoressa text-rose-nude drop-shadow-lg">Lloyd</span>
          <span className="font-amoressa italic font-light text-4xl sm:text-5xl md:text-7xl text-blush opacity-90">&amp;</span>
          <span className="font-amoressa text-rose-nude drop-shadow-lg">Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start w-full"
        >
          <p 
            className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] md:tracking-[0.4em] mb-10 md:mb-16" 
            style={{ color: '#F2F0EE', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
          >
            MAY 18, 2026
          </p>
          
          <div className="relative group">
            <a 
              href="#greeting"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-6 sm:px-8 py-2 sm:py-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">Discover More</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 md:left-[8%] lg:left-[10%] md:translate-x-0 w-full md:w-auto flex flex-col items-center md:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        {/* Centered on the Discover More button */}
        <div className="flex flex-col items-center w-full md:w-[180px] gap-3">
          <span className="text-white/80 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-sans font-light" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>Scroll</span>
          <motion.div 
            className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white/80 to-transparent"
            animate={{ height: [0, 48, 0], opacity: [0, 1, 0], y: [0, 10, 20] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
