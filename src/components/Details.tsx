import { motion } from 'motion/react';
import { MapPin, Clock, Calendar, Heart, Gift, Users } from 'lucide-react';

export default function Details() {
  return (
    <section className="py-20 bg-[#F7F4EF] text-ink relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-maroon-dark tracking-wide">The Details</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-[1px] bg-maroon/30"></div>
            <Heart className="text-maroon/50" size={16} strokeWidth={1.5} />
            <div className="w-16 h-[1px] bg-maroon/30"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Ceremony */}
          <motion.div 
            className="flex flex-col justify-between items-center text-center p-10 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(107,30,30,0.08)] transition-all duration-700 relative overflow-hidden group min-h-[200px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="font-serif text-4xl md:text-5xl text-maroon-dark mb-10 italic tracking-wide">Ceremony</h3>
            
            <div className="space-y-8 font-sans text-ink-light flex-grow flex flex-col items-center w-full max-w-[320px] mx-auto">
              <div className="flex flex-col items-center gap-3">
                <Clock className="text-maroon/70" size={24} strokeWidth={1.5} />
                <p className="tracking-[0.3em] uppercase text-[11px] font-medium text-ink">2:30 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <MapPin className="text-maroon/70" size={24} strokeWidth={1.5} />
                <p className="font-serif text-2xl text-maroon-dark font-medium leading-tight tracking-wide">Iglesia Ni Cristo [Marikina]</p>
                <p className="text-sm leading-relaxed max-w-[280px] font-light tracking-wide">
                  INC Compound, Guerilla<br/>
                  Marikina, 1800 Metro Manila
                </p>
              </div>

              {/* Map Preview */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-maroon/10 shadow-inner mt-6 relative group/map">
                <div className="absolute inset-0 bg-maroon/5 group-hover/map:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4287!2d121.102247!3d14.6368738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90017a20395%3A0x338a583d326a75c9!2sIGLESIA%20NI%20CRISTO%20%5BMARIKINA%5D%20-%20Marikina%20Centro!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Ceremony Location Map"
                  className="grayscale-[30%] contrast-[90%] group-hover/map:grayscale-0 group-hover/map:contrast-100 transition-all duration-700"
                ></iframe>
              </div>

              <div className="pt-8 w-full">
                <a 
                  href="https://www.google.com/maps/place/IGLESIA+NI+CRISTO+%5BMARIKINA%5D+-+Marikina+Centro/@14.636879,121.0996721,17z/data=!4m6!3m5!1s0x3397b90017a20395:0x338a583d326a75c9!8m2!3d14.6368738!4d121.102247!16s%2Fg%2F11ybdqwtfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white border border-maroon/20 text-maroon hover:bg-maroon hover:text-white hover:border-maroon px-8 py-4 rounded-full font-sans text-[11px] font-medium uppercase tracking-[0.3em] transition-all duration-500 shadow-sm hover:shadow-[0_8px_25px_rgba(107,30,30,0.15)] group/btn focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none"
                >
                  <MapPin size={16} strokeWidth={1.5} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reception */}
          <motion.div 
            className="flex flex-col justify-between items-center text-center p-10 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(107,30,30,0.08)] transition-all duration-700 relative overflow-hidden group min-h-[200px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="font-serif text-4xl md:text-5xl text-maroon-dark mb-10 italic tracking-wide">Reception</h3>
            
            <div className="space-y-8 font-sans text-ink-light flex-grow flex flex-col items-center w-full max-w-[320px] mx-auto">
              <div className="flex flex-col items-center gap-3">
                <Clock className="text-maroon/70" size={24} strokeWidth={1.5} />
                <p className="tracking-[0.3em] uppercase text-[11px] font-medium text-ink">5:00 PM</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <MapPin className="text-maroon/70" size={24} strokeWidth={1.5} />
                <p className="font-serif text-2xl text-maroon-dark font-medium leading-tight tracking-wide">Rancho Estate IV West Clubhouse</p>
                <p className="text-sm leading-relaxed max-w-[280px] font-light tracking-wide">
                  Jersey St., Marikina Heights<br/>
                  Marikina, 1800 Metro Manila
                </p>
              </div>

              {/* Map Preview */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-maroon/10 shadow-inner mt-6 relative group/map">
                <div className="absolute inset-0 bg-maroon/5 group-hover/map:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.1650!2d121.1189272!3d14.644296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b974ed01edaf%3A0x7e5ef1ad2499f5f3!2sRancho%20Estate%20IV%20West%20Clubhouse!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Reception Location Map"
                  className="grayscale-[30%] contrast-[90%] group-hover/map:grayscale-0 group-hover/map:contrast-100 transition-all duration-700"
                ></iframe>
              </div>

              <div className="pt-8 w-full">
                <a 
                  href="https://www.google.com/maps/place/Rancho+Estate+IV+West+Clubhouse/@14.6443012,121.1163523,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b974ed01edaf:0x7e5ef1ad2499f5f3!8m2!3d14.644296!4d121.1189272!16s%2Fg%2F11l5gb_5tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-maroon text-white hover:bg-maroon-dark px-8 py-4 rounded-full font-sans text-[11px] font-medium uppercase tracking-[0.3em] transition-all duration-500 shadow-[0_4px_15px_rgba(107,30,30,0.2)] hover:shadow-[0_8px_25px_rgba(107,30,30,0.3)] group/btn focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <MapPin size={16} strokeWidth={1.5} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  Open in Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="text-center mb-12"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gift Guide */}
            <motion.div 
              className="text-center p-8 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col justify-between items-center group min-h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-[320px] mx-auto">
                <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 mx-auto text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Gift size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide">Gift Guide</h3>
                <p className="font-sans text-ink-light leading-relaxed text-sm font-light tracking-wide">
                  Our lives are graced with blessings bright, your presence and prayers our true delight. 
                  Yet, should you wish to gift us more, a monetary offering we would adore.
                </p>
              </div>
            </motion.div>

            {/* Plus One */}
            <motion.div 
              className="text-center p-8 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col justify-between items-center group min-h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="max-w-[320px] mx-auto">
                <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 mx-auto text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Users size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide">Plus Ones</h3>
                <p className="font-sans text-ink-light leading-relaxed text-sm font-light mb-6 tracking-wide">
                  Our wedding is absolutely RSVP only. We only invited those we love the most to keep it intimate.
                </p>
              </div>
              <p className="font-sans text-maroon font-medium tracking-[0.2em] uppercase text-[10px] mt-auto">
                Strictly no plus one
              </p>
            </motion.div>

            {/* Kids */}
            <motion.div 
              className="text-center p-8 border border-maroon/10 rounded-[2rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(107,30,30,0.06)] transition-shadow duration-500 flex flex-col justify-between items-center group min-h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="max-w-[320px] mx-auto">
                <div className="w-14 h-14 rounded-full bg-rose-nude/30 flex items-center justify-center mb-6 mx-auto text-maroon group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Heart size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-maroon-dark mb-4 italic tracking-wide">Children</h3>
                <p className="font-sans text-ink-light leading-relaxed text-sm font-light tracking-wide">
                  We can only accommodate children of immediate family. To allow all guests a day of relaxation, we have chosen an adults-only occasion.
                </p>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
