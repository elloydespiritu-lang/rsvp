import { motion } from 'motion/react';

interface GreetingProps {
  guestName: string | null;
}

export default function Greeting({ guestName }: GreetingProps) {
  return (
    <section id="greeting" className="py-24 md:py-32 px-6 bg-rose-nude text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-maroon/5 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-maroon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon-dark mb-10 font-medium leading-tight tracking-wide">
            Dear <span className="text-maroon italic">{" "}{guestName || 'Friend'}</span>,
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-sans font-light leading-relaxed text-ink-light tracking-wide max-w-2xl mx-auto">
            <p>
              With joyful hearts, we invite you to share in the celebration of our wedding as we begin our new life together.
            </p>
          </div>

          <div className="mt-16 relative group/img max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-maroon/5 rounded-[2rem] transform rotate-1 group-hover/img:rotate-2 transition-transform duration-700 ease-out"></div>
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Wedding rings" 
              className="w-full h-64 md:h-80 object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative z-10 transform group-hover/img:-translate-y-1 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
