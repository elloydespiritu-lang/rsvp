import { motion } from 'motion/react';

interface GreetingProps {
  guestName: string | null;
}

export default function Greeting({ guestName }: GreetingProps) {
  return (
    <section id="greeting" className="py-24 md:py-32 px-6 bg-rose-nude text-center relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon-dark mb-10 font-medium leading-tight">
            Dear <span className="text-maroon italic">{guestName || 'Friend'}</span>,
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-sans font-light leading-relaxed text-ink-light">
            <p>
              With joyful hearts, we invite you to share in the celebration of our wedding as we begin our new life together.
            </p>
          </div>

          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Wedding rings" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
