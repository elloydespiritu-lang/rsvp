import { motion } from 'motion/react';
import { MapPin, Clock, Calendar } from 'lucide-react';

export default function Details() {
  return (
    <section className="py-24 md:py-32 bg-white text-ink relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-ink">The Details</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Ceremony */}
          <motion.div 
            className="flex flex-col items-center text-center p-10 border border-gold/20 rounded-sm bg-cream/50 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-4xl text-gold mb-8 italic">Ceremony</h3>
            
            <div className="space-y-6 font-sans text-ink-light">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-gold" size={24} />
                <p className="tracking-widest uppercase text-sm font-medium">Saturday, December 31, 2026</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-gold" size={24} />
                <p className="tracking-widest uppercase text-sm font-medium">3:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-gold" size={24} />
                <p className="font-medium text-lg text-ink">St. Patrick's Cathedral</p>
                <p className="text-sm">5th Ave, New York, NY 10022</p>
              </div>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div 
            className="flex flex-col items-center text-center p-10 border border-gold/20 rounded-sm bg-cream/50 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-serif text-4xl text-gold mb-8 italic">Reception</h3>
            
            <div className="space-y-6 font-sans text-ink-light">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-gold" size={24} />
                <p className="tracking-widest uppercase text-sm font-medium">Saturday, December 31, 2026</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-gold" size={24} />
                <p className="tracking-widest uppercase text-sm font-medium">6:00 PM - Midnight</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-gold" size={24} />
                <p className="font-medium text-lg text-ink">The Plaza Hotel</p>
                <p className="text-sm">768 5th Ave, New York, NY 10019</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          className="mt-20 rounded-sm overflow-hidden shadow-xl border border-gold/10 h-96 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.18394865616!2d-73.97734868459363!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fa0a388b3f%3A0x6a053229b380029b!2sSt.%20Patrick&#39;s%20Cathedral!5e0!3m2!1sen!2sus!4v1645564858963!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Wedding Locations Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
