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
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-maroon">The Details</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Ceremony */}
          <motion.div 
            className="flex flex-col items-center text-center p-8 md:p-10 border border-gold/20 rounded-3xl bg-cream/50 shadow-md hover:shadow-xl transition-shadow duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-maroon mb-6 italic">Ceremony</h3>
            
            <div className="space-y-6 font-sans text-ink-light flex-grow flex flex-col items-center w-full">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-gold" size={20} />
                <p className="tracking-widest uppercase text-xs font-semibold">Monday, May 18, 2026</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-gold" size={20} />
                <p className="tracking-widest uppercase text-xs font-semibold">2:30 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-gold" size={20} />
                <p className="font-serif text-xl text-ink font-medium leading-tight">Iglesia Ni Cristo [Marikina] - Marikina Centro</p>
                <p className="text-sm leading-relaxed max-w-[280px]">
                  INC Compound, Guerilla<br/>
                  Marikina, 1800 Metro Manila
                </p>
              </div>

              {/* Map Preview */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-gold/10 shadow-inner mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4287!2d121.102247!3d14.6368738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90017a20395%3A0x338a583d326a75c9!2sIGLESIA%20NI%20CRISTO%20%5BMARIKINA%5D%20-%20Marikina%20Centro!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Ceremony Location Map"
                ></iframe>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.google.com/maps/place/IGLESIA+NI+CRISTO+%5BMARIKINA%5D+-+Marikina+Centro/@14.636879,121.0996721,17z/data=!4m6!3m5!1s0x3397b90017a20395:0x338a583d326a75c9!8m2!3d14.6368738!4d121.102247!16s%2Fg%2F11ybdqwtfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-maroon/30 text-maroon hover:bg-maroon hover:text-white px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <MapPin size={14} className="group-hover:scale-110 transition-transform" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div 
            className="flex flex-col items-center text-center p-8 md:p-10 border border-gold/20 rounded-3xl bg-cream/50 shadow-md hover:shadow-xl transition-shadow duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-maroon mb-6 italic">Reception</h3>
            
            <div className="space-y-6 font-sans text-ink-light flex-grow flex flex-col items-center w-full">
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-gold" size={20} />
                <p className="tracking-widest uppercase text-xs font-semibold">4:30 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-gold" size={20} />
                <p className="font-serif text-xl text-ink font-medium leading-tight">Rancho Estate IV West Clubhouse</p>
                <p className="text-sm leading-relaxed max-w-[280px]">
                  Jersey St., Marikina Heights<br/>
                  Marikina, 1800 Metro Manila
                </p>
              </div>

              {/* Map Preview */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-gold/10 shadow-inner mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.1650!2d121.1189272!3d14.644296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b974ed01edaf%3A0x7e5ef1ad2499f5f3!2sRancho%20Estate%20IV%20West%20Clubhouse!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Reception Location Map"
                ></iframe>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.google.com/maps/place/Rancho+Estate+IV+West+Clubhouse/@14.6443012,121.1163523,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b974ed01edaf:0x7e5ef1ad2499f5f3!8m2!3d14.644296!4d121.1189272!16s%2Fg%2F11l5gb_5tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-maroon text-white hover:bg-maroon/90 px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <MapPin size={14} className="group-hover:scale-110 transition-transform" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
