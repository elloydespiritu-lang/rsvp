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
    <section id="rsvp" className="py-24 md:py-32 bg-rose-nude text-ink relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-maroon/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-maroon/30"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-maroon/30"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-maroon/30"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-maroon/30"></div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-maroon-dark">R.S.V.P.</h2>
            <p className="font-sans text-sm uppercase tracking-widest text-maroon mb-2">Kindly respond by</p>
            <p className="font-serif italic text-xl text-ink-light">April 18, 2026</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className="font-serif text-3xl text-maroon mb-4 italic">Thank you for your response.</h3>
              <p className="font-sans text-ink-light leading-relaxed">
                We look forward to celebrating with you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className="block font-sans text-sm uppercase tracking-widest text-ink-light text-center">
                  Guest Name
                </label>
                <div className="text-center font-serif text-2xl text-maroon-dark border-b border-maroon/30 pb-2">
                  {guestName || 'Honored Guest'}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-sans text-sm uppercase tracking-widest text-ink-light text-center mb-4">
                  Will you attend?
                </label>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="Attending"
                      checked={formData.attendance === 'Attending'}
                      onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                      className="w-4 h-4 text-maroon focus:ring-maroon border-maroon/30"
                      required
                    />
                    <span className="font-serif italic text-lg group-hover:text-maroon transition-colors">Accept with Pleasure</span>
                  </label>
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="Declined"
                      checked={formData.attendance === 'Declined'}
                      onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                      className="w-4 h-4 text-maroon focus:ring-maroon border-maroon/30"
                    />
                    <span className="font-serif italic text-lg group-hover:text-maroon transition-colors">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-sans text-sm uppercase tracking-widest text-ink-light text-center">
                  Message for the Couple
                </label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  className="w-full bg-transparent border-b border-maroon/30 py-2 text-center font-serif text-lg text-maroon-dark focus:outline-none focus:border-maroon transition-colors resize-none"
                  placeholder="Leave a wish or dietary requirements..."
                ></textarea>
              </div>

              <div className="text-center pt-8">
                <button 
                  type="submit"
                  disabled={isSubmitting || formData.attendance === 'Pending'}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-maroon-dark/30 bg-maroon-dark px-12 py-4 text-sm font-medium uppercase tracking-[0.2em] text-rose-nude backdrop-blur-md shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-maroon/50 hover:bg-maroon hover:text-rose-nude hover:shadow-[0_8px_30px_rgba(122,15,28,0.2)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-maroon-dark disabled:hover:text-rose-nude disabled:hover:border-maroon-dark/30 disabled:hover:shadow-md"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send RSVP'}</span>
                  {!isSubmitting && formData.attendance !== 'Pending' && (
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
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
