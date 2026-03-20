import { motion } from 'motion/react';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="py-24 md:py-32 bg-rose-nude text-ink border-t border-maroon/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-maroon/5 relative overflow-hidden group flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-maroon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="w-20 h-20 rounded-full border border-maroon/20 flex items-center justify-center mb-8 text-maroon bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:scale-110 transition-transform duration-500 ease-out">
            <Shirt size={32} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-4xl md:text-5xl mb-6 italic text-maroon-dark tracking-wide">Dress Code: Maroon Theme</h3>
          <p className="font-sans text-ink-light text-lg leading-relaxed mb-12 max-w-2xl font-light tracking-wide">
            We kindly encourage guests to wear attire inspired by our maroon wedding theme.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="flex flex-col items-center gap-3 group/color">
              <div className="w-16 h-16 rounded-full bg-maroon-dark shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover/color:scale-110 transition-transform duration-500 ease-out" title="Deep Maroon"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-light/80">Deep Maroon</span>
            </div>
            <div className="flex flex-col items-center gap-3 group/color">
              <div className="w-16 h-16 rounded-full bg-maroon shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover/color:scale-110 transition-transform duration-500 ease-out" title="Warm Burgundy"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-light/80">Burgundy</span>
            </div>
            <div className="flex flex-col items-center gap-3 group/color">
              <div className="w-16 h-16 rounded-full bg-red shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover/color:scale-110 transition-transform duration-500 ease-out" title="Classic Red"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-light/80">Classic Red</span>
            </div>
            <div className="flex flex-col items-center gap-3 group/color">
              <div className="w-16 h-16 rounded-full bg-blush shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover/color:scale-110 transition-transform duration-500 ease-out" title="Blush Pink"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-light/80">Blush Pink</span>
            </div>
            <div className="flex flex-col items-center gap-3 group/color">
              <div className="w-16 h-16 rounded-full bg-rose-nude shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-white/50 transform group-hover/color:scale-110 transition-transform duration-500 ease-out" title="Soft Rose Nude"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-light/80">Soft Rose Nude</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
