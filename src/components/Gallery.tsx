import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/91b4f512-0b19-4567-a220-084161672521_wjceuq.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110053/e306ae94-3ee0-4feb-aaef-1b885cbc1185_jtiobr.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/387cb228-68b2-41d7-9b75-3bb23a340bfc_ajnzru.jpg",
    "https://res.cloudinary.com/dyku3hrtp/image/upload/v1773110052/5dd34b56-aa17-4999-ab4c-8d871938fb3e_ojdofx.jpg"
  ];

  return (
    <section className="px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-maroon-dark tracking-wide">Moments</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-[1px] bg-maroon/30"></div>
            <Heart className="text-maroon/50" size={16} strokeWidth={1.5} />
            <div className="w-16 h-[1px] bg-maroon/30"></div>
          </div>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className={`relative overflow-hidden rounded-[2rem] group shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(107,30,30,0.1)] transition-all duration-700 ${
                index % 2 === 0 ? 'md:mt-12' : 'md:-mt-12'
              } aspect-[4/5] border border-maroon/10 p-3 bg-white`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-maroon/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
