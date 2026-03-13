import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative min-h-[500px] flex items-center py-24 bg-maroon-dark text-rose-nude overflow-hidden">
      {/* Responsive Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500"
          style={{ 
            backgroundImage: 'url("https://res.cloudinary.com/dyku3hrtp/image/upload/v1773199192/ad10178d-2e5e-4fb4-a487-3dba8f624b20_jec72y.jpg")',
            backgroundAttachment: 'scroll' // Better for mobile performance than fixed
          }}
        ></div>
        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-maroon-dark/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 italic text-blush drop-shadow-sm">
            Counting down the days
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div 
                key={unit.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative group">
                  {/* Decorative outer ring */}
                  <div className="absolute -inset-2 rounded-full border border-blush/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border border-blush/30 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md mb-4 shadow-2xl relative z-10">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-none">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <span className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-blush font-medium">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
