import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/91b4f512-0b19-4567-a220-084161672521_wjceuq.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110053/e306ae94-3ee0-4feb-aaef-1b885cbc1185_jtiobr.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/387cb228-68b2-41d7-9b75-3bb23a340bfc_ajnzru.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/5dd34b56-aa17-4999-ab4c-8d871938fb3e_ojdofx.jpg"
  ];

  return (
    <section className="py-24 md:py-32 bg-rose-nude/30 text-ink">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 text-maroon-dark">Moments</h2>
          <div className="w-24 h-[1px] bg-maroon mx-auto"></div>
        </motion.div>
 
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl w-full">
            {images.map((src, index) => (
              <motion.div 
                key={index}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-xl border-4 border-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-maroon-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
