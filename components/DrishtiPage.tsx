
import React, { useState, useEffect, useRef } from 'react';
import { ASSETS, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface DrishtiPageProps {
  language: Language;
  onComplete: () => void;
}

const DrishtiPage: React.FC<DrishtiPageProps> = ({ language, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(20);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    // Initialize and play audio immediately
    audioRef.current = new Audio(ASSETS.bgMusic);
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    
    // Attempt to play - if browser blocks autoplay, we just catch it and proceed silently
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented by browser policy:", error);
      });
    }

    // Start Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto complete after 20 seconds
    const timeout = setTimeout(() => {
        // Fade out audio before completing
        if (audioRef.current) {
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
    }, 20000);

    // Cleanup on unmount
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-amber-50 animate-pulse-slow"></div>

      {/* BapDada Full Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
          <img 
              src={ASSETS.bapDadaImage} 
              alt="BapDada Drishti" 
              className="w-full h-full object-cover md:object-contain animate-glow transform scale-100 transition-transform duration-[20000ms] ease-out"
              style={{ transform: 'scale(1.1)' }}
          />
          
          {/* Overlay Vignette for focus */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40"></div>
      </div>

      {/* Timer / Progress */}
      <div className="absolute bottom-10 z-20 w-64 h-2 bg-orange-100 rounded-full overflow-hidden">
          <div 
              className="h-full bg-orange-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 20) * 100}%` }}
          ></div>
      </div>

      <div className="absolute bottom-4 z-20 text-orange-800/50 font-medium text-sm">
          {t.footer}
      </div>
    </div>
  );
};

export default DrishtiPage;
