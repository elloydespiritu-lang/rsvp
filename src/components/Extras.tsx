import { motion } from 'motion/react';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="py-24 md:py-32 bg-cream text-ink border-t border-gold/10">
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
            <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold bg-white shadow-sm">
              <Shirt size={28} />
            </div>
            <h3 className="font-serif text-4xl mb-6 italic text-maroon">Dress Code</h3>
            <p className="font-sans text-ink-light text-lg leading-relaxed mb-8 max-w-2xl">
              We request our guests to wear formal attire in shades of maroon or gold.
            </p>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-maroon shadow-md border-2 border-white" title="Maroon"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Maroon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-maroon-light shadow-md border-2 border-white" title="Light Maroon"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Light Maroon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-maroon-dark shadow-md border-2 border-white" title="Dark Maroon"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Dark Maroon</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gold shadow-md border-2 border-white" title="Gold"></div>
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light">Gold</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
