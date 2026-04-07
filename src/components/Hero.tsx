import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-[12vh] md:pt-[15vh] overflow-hidden bg-paper">
      {/* Background Image - Full Screen for both Mobile and Desktop */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dyku3hrtp/image/upload/v1774970334/att.AYTmlCBQhvIhHYmb2VItlUvMcqxpVwpJzmhs-oa3Hxk_bc9boa.jpg')",
            backgroundPosition: 'center 20%'
          }}
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content Container - Left Aligned for both Mobile and Desktop */}
      <div className="relative z-10 w-full px-8 md:pl-12 lg:pl-24 md:max-w-[750px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-left w-full"
        >
          <p className="font-amoressa text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-md mb-4 md:mb-8">
            Together with our families, we invite you to celebrate our love.
          </p>
        </motion.div>

        <motion.h1 
          className="font-amoressa text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-10 flex flex-col items-start gap-1 md:gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        >
          <span className="font-amoressa text-rose-nude drop-shadow-lg">Lloyd</span>
          <span className="font-amoressa italic font-light text-3xl sm:text-4xl md:text-7xl text-blush opacity-90">&amp;</span>
          <span className="font-amoressa text-rose-nude drop-shadow-lg">Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-start w-full mt-12 sm:mt-16 md:mt-0"
        >
          <div className="flex items-center gap-4 mb-8 md:mb-16">
            <div className="w-6 md:w-8 h-[1px] bg-white/40"></div>
            <p className="font-sans text-xs sm:text-sm md:text-xl lg:text-2xl font-light tracking-[0.4em] text-white drop-shadow-md">
              MAY 18, 2026
            </p>
            <div className="w-6 md:w-8 h-[1px] bg-white/40"></div>
          </div>
          
          <a 
            href="#greeting"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 md:px-10 py-3 md:py-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-white backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
