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
    <section className="relative min-h-[600px] flex items-center py-24 md:py-32 bg-maroon-dark text-white overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dyku3hrtp/image/upload/v1773199192/ad10178d-2e5e-4fb4-a487-3dba8f624b20_jec72y.jpg"
          alt="Countdown Background"
          className="w-full h-full object-cover object-[center_75%] transition-all duration-1000"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Luxury Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(rgba(122, 15, 28, 0.65), rgba(122, 15, 28, 0.45))'
          }}
        ></div>
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.3)'
          }}
        ></div>
      </div>

      <div className="relative z-30 w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="font-serif text-5xl md:text-6xl lg:text-7xl mb-20 italic tracking-[0.05em] text-white"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}
          >
            Counting down the days
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto place-items-center">
            {timeUnits.map((unit, index) => (
              <motion.div 
                key={unit.label}
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
              >
                <div className="relative group mb-8">
                  {/* Glassmorphism Circle */}
                  <div 
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:border-white/40"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <span className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-none font-medium tracking-tight">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Subtle outer glow on hover */}
                  <div className="absolute -inset-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                </div>
                
                <span 
                  className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.5em] font-medium"
                  style={{ color: '#E8E0D5' }}
                >
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
