import { motion } from 'motion/react';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="py-24 md:py-32 bg-rose-nude text-ink border-t border-maroon/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Dress Code */}
          <motion.div 
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full border border-maroon/40 flex items-center justify-center mb-6 text-maroon bg-white shadow-sm">
              <Shirt size={28} />
            </div>
            <h3 className="font-serif text-4xl mb-6 italic text-maroon-dark">Dress Code: Maroon Theme</h3>
            <p className="font-sans text-ink-light text-lg leading-relaxed mb-8 max-w-2xl">
              We kindly encourage guests to wear attire inspired by our maroon wedding theme.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-maroon-dark shadow-md border-2 border-white" title="Deep Maroon"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Deep Maroon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-maroon shadow-md border-2 border-white" title="Warm Burgundy"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Burgundy</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-red shadow-md border-2 border-white" title="Classic Red"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Classic Red</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-blush shadow-md border-2 border-white" title="Blush Pink"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Blush Pink</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-rose-nude shadow-md border-2 border-white" title="Soft Rose Nude"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Soft Rose Nude</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
