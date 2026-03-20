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
        <img 
          src="https://res.cloudinary.com/dyku3hrtp/image/upload/v1773199192/ad10178d-2e5e-4fb4-a487-3dba8f624b20_jec72y.jpg"
          alt="Countdown Background"
          className="w-full h-full object-cover object-[center_80%] transition-all duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-maroon-dark/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16 italic text-blush drop-shadow-md tracking-wide">
            Counting down the days
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div 
                key={unit.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative group mb-6">
                  {/* Decorative outer ring */}
                  <div className="absolute -inset-3 rounded-full border border-blush/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"></div>
                  
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-white/20 flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-none drop-shadow-sm font-medium">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <span className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-blush font-light">
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
