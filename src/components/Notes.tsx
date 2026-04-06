import { motion } from 'motion/react';
import { Heart, Gift, Users } from 'lucide-react';

export default function Notes() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EF] text-ink relative overflow-hidden border-t border-maroon/10">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-maroon-dark tracking-wide">Notes</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-[1px] bg-maroon/20"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-maroon/40"></div>
              <div className="w-12 h-[1px] bg-maroon/20"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gift Guide */}
            <motion.div 
              className="text-center p-8 md:p-10 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                <Gift size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide">Gift Guide</h3>
              <p className="font-sans text-ink-light leading-relaxed text-sm font-light tracking-wide">
                Our lives are graced with blessings bright, your presence and prayers our true delight. 
                Yet, should you wish to gift us more, a monetary offering we would adore.
              </p>
            </motion.div>

            {/* Plus One */}
            <motion.div 
              className="text-center p-8 md:p-10 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide leading-tight">Can I Bring Someone With Me?</h3>
              <p className="font-sans text-ink-light leading-relaxed text-sm font-light mb-6 tracking-wide">
                Even though we would love to have more guests, our wedding is absolutely RSVP only. We only invited those we love the most because we want it to be intimate, and that includes you!
              </p>
              <p className="font-sans text-maroon font-medium tracking-[0.2em] uppercase text-[10px] mt-auto">
                Strictly no plus one
              </p>
            </motion.div>

            {/* Kids */}
            <motion.div 
              className="text-center p-8 md:p-10 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                <Heart size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide leading-tight">Can We Bring Our Kids to the Wedding?</h3>
              <p className="font-sans text-ink-light leading-relaxed text-sm font-light tracking-wide">
                Although we love your little ones, we can only accommodate the children of immediate family. In order to allow all guests, including parents, a day of relaxation, we have chosen for our wedding day to be an adults-only occasion.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
