import { motion } from 'motion/react';
import { Gift, Shirt, CalendarClock } from 'lucide-react';

export default function Extras() {
  return (
    <section className="py-24 md:py-32 bg-cream text-ink border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          
          {/* Dress Code */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold bg-white shadow-sm">
              <Shirt size={28} />
            </div>
            <h3 className="font-serif text-2xl mb-4 italic">Dress Code</h3>
            <p className="font-sans text-ink-light text-sm leading-relaxed">
              Black Tie Optional. We'd love to see our family and friends dress up with us! 
              Ladies can wear floor-length gowns or formal cocktail dresses, and gentlemen can wear a tux or a dark suit.
            </p>
          </motion.div>

          {/* Registry */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold bg-white shadow-sm">
              <Gift size={28} />
            </div>
            <h3 className="font-serif text-2xl mb-4 italic">Registry</h3>
            <p className="font-sans text-ink-light text-sm leading-relaxed mb-6">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following stores.
            </p>
            <a href="#" className="font-sans text-xs uppercase tracking-[0.2em] text-gold hover:text-ink transition-colors border-b border-gold pb-1">
              View Registry
            </a>
          </motion.div>

          {/* Program */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold bg-white shadow-sm">
              <CalendarClock size={28} />
            </div>
            <h3 className="font-serif text-2xl mb-4 italic">Program</h3>
            <ul className="font-sans text-ink-light text-sm space-y-3">
              <li className="flex justify-between w-full border-b border-gold/10 pb-2">
                <span>Ceremony</span>
                <span className="font-medium">3:00 PM</span>
              </li>
              <li className="flex justify-between w-full border-b border-gold/10 pb-2">
                <span>Cocktail Hour</span>
                <span className="font-medium">4:30 PM</span>
              </li>
              <li className="flex justify-between w-full border-b border-gold/10 pb-2">
                <span>Dinner & Dancing</span>
                <span className="font-medium">6:00 PM</span>
              </li>
              <li className="flex justify-between w-full pb-2">
                <span>Send Off</span>
                <span className="font-medium">11:30 PM</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
