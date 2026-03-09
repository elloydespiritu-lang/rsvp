import { motion } from 'motion/react';
import { Heart, Gem, CalendarHeart } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      title: "First Meeting",
      date: "August 14, 2021",
      description: "We met at a coffee shop in Brooklyn. What was supposed to be a quick coffee turned into a 4-hour conversation.",
      icon: <Heart className="text-gold" size={24} />,
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Engagement",
      date: "December 24, 2024",
      description: "Under the twinkling lights of Central Park, James got down on one knee and asked the easiest question Emma ever had to answer.",
      icon: <Gem className="text-gold" size={24} />,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Wedding Day",
      date: "December 31, 2026",
      description: "We can't wait to celebrate the beginning of our forever with all of our favorite people.",
      icon: <CalendarHeart className="text-gold" size={24} />,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-ink relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-ink">Our Story</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gold/30 hidden md:block"></div>

          <div className="space-y-24">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    className="w-full md:w-5/12 mb-8 md:mb-0"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg border border-gold/10">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div 
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-gold/40 items-center justify-center z-10 shadow-md"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {event.icon}
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    className={`w-full md:w-5/12 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium block mb-2">
                      {event.date}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4 italic">
                      {event.title}
                    </h3>
                    <p className="font-sans text-ink-light leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
