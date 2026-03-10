import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "/images/3a34463b-caf9-40bf-b2d8-c0864ddc9b6b.jfif",
    "/images/4252c285-d637-4e25-b9ba-dcaa09533c7d.jfif",
    "/images/501d56ef-05b7-47fb-bddd-79234aef3a6d.jfif",
    "/images/75a0c101-f747-4d73-861c-588222f74efe.jfif",
    "/images/7d7ef2b0-d1ef-4585-8c7f-7c271cd3113e.jfif",
    "/images/eda7de5c-1f7d-4b6e-bc12-629a88bced72.jfif",
    "/images/fd0322e2-084f-4249-b176-da1593d50bd8.jfif"
  ];

  return (
    <section className="py-24 md:py-32 bg-cream text-ink">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-maroon">Moments</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
