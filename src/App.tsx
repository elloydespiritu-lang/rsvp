import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Details from './components/Details';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';
import DressCode from './components/Extras';

export default function App() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const code = params.get('invite');
    
    if (code) {
      setInviteCode(code);
      // In a real app, this would fetch from the Google Apps Script API
      // For the preview, we'll simulate an API call
      fetchGuestData(code);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchGuestData = async (code: string) => {
    setIsLoading(true);
    try {
      // API call to Google Apps Script
      const response = await fetch(`https://script.google.com/macros/s/AKfycbySiuvSIKvwLzywvIuosnw67HOKZjkfEtHJBovS_G4P2pqr0vvnN8mOse1KA8vG2nz0RA/exec?action=getGuest&inviteCode=${code}`);
      const data = await response.json();
      
      if (data && data.success) {
        setGuestName(data.guestName);
      } else {
        setGuestName('Honored Guest');
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching guest data:', error);
      setGuestName('Honored Guest');
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      if (isMuted) {
        audio.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audio.pause();
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-maroon font-serif text-3xl italic"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-ink relative overflow-hidden">
      {/* Background floral pattern (subtle) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-pattern.png")' }}>
      </div>

      {/* Floating Music Toggle */}
      <button 
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gold/20 text-gold hover:bg-gold hover:text-white transition-all duration-300"
        aria-label="Toggle background music"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Audio Element (Hidden) */}
      <audio id="bg-music" loop muted={isMuted}>
        {/* Using a public domain classical music piece for wedding vibe */}
        <source src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=canon-in-d-pachelbel-11478.mp3" type="audio/mpeg" />
      </audio>

      <main className="relative z-10">
        <Hero />
        <Greeting guestName={guestName} />
        <Details />
        <Countdown targetDate="2026-05-18T15:00:00" />
        <Gallery />
        <Timeline />
        <DressCode />
        <RSVP inviteCode={inviteCode} guestName={guestName} />
      </main>

      <footer className="py-12 text-center bg-maroon-dark text-cream/60 text-sm font-sans">
        <p className="font-serif italic text-lg mb-2 text-gold">Thank you for being part of our story.</p>
        <p>&copy; {new Date().getFullYear()} Nicole & Elloyd. All rights reserved.</p>
      </footer>
    </div>
  );
}
