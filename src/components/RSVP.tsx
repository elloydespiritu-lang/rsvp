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
      await fetch('https://script.google.com/macros/s/AKfycbwWfSQfT3M2bnEliAtoVOtGgKhBVcYwT0Sqd2MNPYQr_IDEtwaAL9LHsuAI3RBlPisCoQ/exec', {
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
    <section id="rsvp" className="py-24 md:py-32 bg-cream text-ink relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-gold/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-gold/30"></div>
          <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-gold/30"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-gold/30"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-gold/30"></div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-maroon">R.S.V.P.</h2>
            <p className="font-sans text-sm uppercase tracking-widest text-gold mb-2">Kindly respond by</p>
            <p className="font-serif italic text-xl text-ink-light">April 18, 2026</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3 className="font-serif text-3xl text-gold mb-4 italic">Thank you for your response.</h3>
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
                <div className="text-center font-serif text-2xl text-maroon border-b border-gold/30 pb-2">
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
                      className="w-4 h-4 text-gold focus:ring-gold border-gold/30"
                      required
                    />
                    <span className="font-serif italic text-lg group-hover:text-gold transition-colors">Accept with Pleasure</span>
                  </label>
                  <label className="flex items-center justify-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="Declined"
                      checked={formData.attendance === 'Declined'}
                      onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                      className="w-4 h-4 text-gold focus:ring-gold border-gold/30"
                    />
                    <span className="font-serif italic text-lg group-hover:text-gold transition-colors">Regretfully Decline</span>
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
                  className="w-full bg-transparent border-b border-gold/30 py-2 text-center font-serif text-lg text-maroon focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Leave a wish or dietary requirements..."
                ></textarea>
              </div>

              <div className="text-center pt-8">
                <button 
                  type="submit"
                  disabled={isSubmitting || formData.attendance === 'Pending'}
                  className="bg-maroon text-cream hover:bg-gold hover:text-white transition-all duration-300 px-12 py-4 uppercase tracking-[0.2em] text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send RSVP'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
