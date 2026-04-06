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
    <section 
      className="relative min-h-screen flex flex-col items-center justify-end py-12 md:py-32 bg-zinc-900 text-white overflow-hidden bg-[url('https://res.cloudinary.com/dyku3hrtp/image/upload/c_fill,g_auto:subject,w_600,h_900,q_auto,f_auto/v1774970335/DSC09349_elhj7d.jpg')] md:bg-[url('https://res.cloudinary.com/dyku3hrtp/image/upload/v1774970335/DSC09349_elhj7d.jpg')] bg-cover bg-top md:bg-center bg-no-repeat md:pb-12"
    >
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Luxury Neutral Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.25))'
          }}
        ></div>
        
        {/* Mobile-Specific Bottom Gradient (Ensures timer readability while keeping faces clear at top) */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent md:hidden" />

        {/* Vignette Effect */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.2)'
          }}
        ></div>
      </div>

      <div className="relative z-30 w-full max-w-6xl mx-auto px-6 text-center pb-6 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto place-items-center">
            {timeUnits.map((unit, index) => (
              <motion.div 
                key={unit.label}
                className="flex flex-col items-center w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
              >
                <div className="relative group mb-3">
                  {/* Glassmorphism Circle */}
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:border-white/40 backdrop-blur-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <span 
                      className="font-serif text-xl sm:text-2xl md:text-4xl leading-none font-normal tracking-tight text-blush"
                      style={{ letterSpacing: '0.02em' }}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Subtle outer glow on hover */}
                  <div className="absolute -inset-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                </div>
                
                <span 
                  className="font-sans text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.5em] font-medium text-blush/80"
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>

          <h2 
            className="font-serif text-2xl md:text-4xl lg:text-5xl mt-6 md:mt-12 italic tracking-[0.05em] text-white"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Counting down the days
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
