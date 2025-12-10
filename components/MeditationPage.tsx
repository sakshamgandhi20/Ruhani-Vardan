import React, { useEffect, useRef, useState } from 'react';
import { ASSETS, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface MeditationPageProps {
  language: Language;
  onComplete: () => void;
}

const MeditationPage: React.FC<MeditationPageProps> = ({ language, onComplete }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    // Play Audio
    audioRef.current = new Audio(ASSETS.bgMusic);
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed usually):", e));

    // Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Completion timeout
    const completeTimeout = setTimeout(() => {
        if (audioRef.current) {
            // Fade out audio
            const fadeOut = setInterval(() => {
                if (audioRef.current && audioRef.current.volume > 0.05) {
                    audioRef.current.volume -= 0.05;
                } else {
                    clearInterval(fadeOut);
                    audioRef.current?.pause();
                    onComplete();
                }
            }, 100);
        } else {
            onComplete();
        }
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-red-950">
      
      {/* Paramdham Background: Radial gradient from bright golden center to deep red edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200 via-orange-600 to-red-950"></div>
      
      {/* Subtle texture/overlay for depth (optional but nice for the 'infinite' feel) */}
      <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay pointer-events-none"></div>

      {/* The Point of Light (Shiv Baba) Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-16">
        
        {/* The Star */}
        <div className="relative transform scale-125">
            {/* Core white light - The Supreme Soul */}
            <div className="w-3 h-4 bg-white rounded-[100%] shadow-[0_0_50px_10px_white] z-20 relative animate-pulse"></div>
            
            {/* Inner Gold Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-200/40 rounded-full blur-xl animate-ping-slow"></div>
            
            {/* Outer Red/Orange Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl"></div>
            
            {/* Rays of Light - Divine Radiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-yellow-100 to-transparent rotate-45 opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-yellow-100 to-transparent -rotate-45 opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-yellow-100 to-transparent rotate-90 opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-yellow-100 to-transparent opacity-60"></div>
        </div>

        {/* Text */}
        <div className="text-center space-y-4 animate-fade-in-up mt-12 px-4">
            <h2 className="text-3xl md:text-4xl text-yellow-50 font-medium tracking-widest uppercase drop-shadow-lg">
                {t.meditating}
            </h2>
            <p className="text-yellow-200/90 text-lg font-hindi drop-shadow-md tracking-wide">
                {language === 'hi' ? 'परमपिता परमात्मा शिव बाबा की याद में...' : 'In loving remembrance of the Supreme Soul...'}
            </p>
        </div>

      </div>

      {/* Timer Bar - Adjusted to match theme (Golden progress on Red) */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-red-900 via-yellow-400 to-red-900 transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(253,224,71,0.5)]"
           style={{ width: `${(timeLeft / 10) * 100}%` }}>
      </div>
    </div>
  );
};

export default MeditationPage;