import { motion } from 'motion/react';

interface GreetingProps {
  guestName: string | null;
}

export default function Greeting({ guestName }: GreetingProps) {
  return (
    <section id="greeting" className="px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="invitation-card text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon-dark mb-10 font-medium leading-tight tracking-wide">
            Dear <span className="text-maroon italic">{guestName || 'Friend'}</span>,
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-sans font-light leading-relaxed text-ink-soft tracking-wide max-w-2xl mx-auto">
            <p>
              With joyful hearts, we invite you to share in the celebration of our wedding as we begin our new life together.
            </p>
          </div>

          <div className="mt-16 relative group">
            <div className="absolute inset-0 bg-maroon/5 rounded-[2rem] transform rotate-1 group-hover:rotate-2 transition-transform duration-700 ease-out"></div>
            <img 
              src="https://res.cloudinary.com/dyku3hrtp/image/upload/v1774973511/DSC09371_hlrlrv.jpg" 
              alt="Wedding rings" 
              className="w-full h-64 md:h-96 object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative z-10 transform group-hover:-translate-y-1 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
