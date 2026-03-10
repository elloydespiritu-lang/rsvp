import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dyku3hrtp/image/upload/f_auto,q_auto/hero_jwy9fm.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <p 
            className="font-sans uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base mb-8" 
            style={{ color: '#E8E0D5', textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
          >
            Together with our families, we invite you to celebrate our love.
          </p>
        </motion.div>

        <motion.h1 
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 font-medium tracking-tight flex flex-col items-center gap-2 md:gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
        >
          <span style={{ color: '#F7F4EF' }}>LLoyd</span>
          <span className="italic font-light text-5xl md:text-7xl" style={{ color: '#D4AF37' }}>&amp;</span>
          <span style={{ color: '#F7F4EF' }}>Nicole</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <p 
            className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] mb-14" 
            style={{ color: '#E8E0D5', textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
          >
            MAY 18, 2026
          </p>
          
          <a 
            href="#greeting"
            className="inline-block border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium rounded-full text-[#F7F4EF]"
            style={{ textShadow: '0 1px 5px rgba(0,0,0,0.3)' }}
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
        <span className="text-[#E8E0D5]/80 text-xs uppercase tracking-widest font-sans" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-[#E8E0D5]/80 to-transparent"
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
