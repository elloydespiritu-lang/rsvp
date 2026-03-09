import { motion } from 'motion/react';

interface GreetingProps {
  guestName: string | null;
}

export default function Greeting({ guestName }: GreetingProps) {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream text-center relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon mb-10 font-medium leading-tight">
            Dear <span className="text-gold italic">{guestName || 'Friend'}</span>,
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-sans font-light leading-relaxed text-ink-light">
            <p>
              We joyfully invite you to celebrate our wedding day.
            </p>
            <p>
              Your presence in our lives has brought us so much happiness, 
              and we couldn't imagine taking this next step without you by our side.
            </p>
            <p>
              Please join us for an evening of love, laughter, and happily ever after.
            </p>
          </div>

          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop" 
              alt="Couple holding hands" 
              className="w-full h-64 md:h-96 object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
