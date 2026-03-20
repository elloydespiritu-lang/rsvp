import { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface RSVPProps {
  inviteCode: string | null;
  guestName: string | null;
}

export default function RSVP({ inviteCode, guestName }: RSVPProps) {
  const [formData, setFormData] = useState({
    attendance: 'Pending',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbySiuvSIKvwLzywvIuosnw67HOKZjkfEtHJBovS_G4P2pqr0vvnN8mOse1KA8vG2nz0RA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'submitRSVP',
          inviteCode: inviteCode || 'UNKNOWN',
          attendance: formData.attendance,
          message: formData.message
        })
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      if (formData.attendance === 'Attending') {
        triggerConfetti();
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your RSVP. Please try again.');
    }
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        colors: ['#6B1E1E', '#8B2E2E', '#D98C8C', '#E8B7B2'],
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        colors: ['#6B1E1E', '#8B2E2E', '#D98C8C', '#E8B7B2'],
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-rose-nude text-ink relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-maroon/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-maroon/20"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-maroon/20"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-maroon/20"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-maroon/20"></div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-maroon-dark tracking-wide">R.S.V.P.</h2>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-maroon/80 mb-3">Kindly respond by</p>
            <p className="font-serif italic text-2xl text-ink-light">April 18, 2026</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-maroon mb-6 italic tracking-wide">Thank you for your response.</h3>
              <p className="font-sans text-ink-light leading-relaxed font-light tracking-wide">
                We look forward to celebrating with you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-3">
                <label className="block font-sans text-[10px] uppercase tracking-[0.3em] text-ink-light/80 text-center">
                  Guest Name
                </label>
                <div className="text-center font-serif text-3xl text-maroon-dark border-b border-maroon/20 pb-4 tracking-wide">
                  {guestName || 'Honored Guest'}
                </div>
              </div>

              <div className="space-y-6">
                <label className="block font-sans text-[10px] uppercase tracking-[0.3em] text-ink-light/80 text-center mb-6">
                  Will you attend?
                </label>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <label className="flex items-center justify-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="Attending"
                        checked={formData.attendance === 'Attending'}
                        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                        className="peer sr-only"
                        required
                      />
                      <div className="w-5 h-5 rounded-full border border-maroon/30 peer-checked:border-maroon peer-focus-visible:ring-2 peer-focus-visible:ring-maroon/50 peer-focus-visible:ring-offset-2 transition-all flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full bg-maroon transition-transform duration-300 ${formData.attendance === 'Attending' ? 'scale-100' : 'scale-0'}`}></div>
                      </div>
                    </div>
                    <span className="font-serif italic text-xl text-ink-light group-hover:text-maroon transition-colors tracking-wide">Accept with Pleasure</span>
                  </label>
                  <label className="flex items-center justify-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="Declined"
                        checked={formData.attendance === 'Declined'}
                        onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                        className="peer sr-only"
                      />
                      <div className="w-5 h-5 rounded-full border border-maroon/30 peer-checked:border-maroon peer-focus-visible:ring-2 peer-focus-visible:ring-maroon/50 peer-focus-visible:ring-offset-2 transition-all flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full bg-maroon transition-transform duration-300 ${formData.attendance === 'Declined' ? 'scale-100' : 'scale-0'}`}></div>
                      </div>
                    </div>
                    <span className="font-serif italic text-xl text-ink-light group-hover:text-maroon transition-colors tracking-wide">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <label htmlFor="message" className="block font-sans text-[10px] uppercase tracking-[0.3em] text-ink-light/80 text-center">
                  Message for the Couple
                </label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full bg-transparent border-b border-maroon/20 py-3 text-center font-serif text-xl text-maroon-dark focus:outline-none focus:border-maroon transition-colors resize-none placeholder:text-maroon/30 placeholder:italic tracking-wide"
                  placeholder="Leave a wish or dietary requirements..."
                ></textarea>
              </div>

              <div className="text-center pt-10">
                <button 
                  type="submit"
                  disabled={isSubmitting || formData.attendance === 'Pending'}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-maroon/30 bg-maroon-dark px-14 py-4 text-[11px] font-sans uppercase tracking-[0.3em] text-white backdrop-blur-md shadow-[0_8px_30px_rgba(122,15,28,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-maroon/50 hover:bg-maroon hover:shadow-[0_8px_30px_rgba(122,15,28,0.25)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-maroon-dark disabled:hover:shadow-[0_8px_30px_rgba(122,15,28,0.15)] focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send RSVP'}</span>
                  {!isSubmitting && formData.attendance !== 'Pending' && (
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
