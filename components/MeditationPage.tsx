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
    audioRef.current.loop = true;
    
    // Attempt to play - browsers often block auto-play without interaction, 
    // but since the user clicked "Start" on Home, this usually works.
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Auto-play was prevented. Interaction needed.", error);
      });
    }

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
        audioRef.current.src = "";
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#2a0a00]">
      
      {/* Paramdham Background: 
          True Paramdham gradient: Bright Gold Center -> Orange -> Deep Red/Brown edges. 
      */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, #fff7ed 0%, #fbbf24 15%, #ea580c 40%, #7c2d12 70%, #451a03 100%)'
        }}
      ></div>
      
      {/* Subtle cloud texture/noise for ethereal feel */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* The Point of Light (Shiv Baba) Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-20">
        
        {/* The Supreme Soul Light */}
        <div className="relative">
            {/* The Core Point */}
            <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_20px_5px_white] z-30 relative animate-pulse"></div>
            
            {/* Immediate Golden Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-100/50 rounded-full blur-md animate-pulse"></div>

            {/* Expanding Rays Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl animate-ping-slow"></div>
            
            {/* Deep Red Outer Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl"></div>
            
            {/* Divine Rays - Sharper and more distinct */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-90"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[1px] bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[1px] bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent -rotate-45"></div>
        </div>

        {/* Text */}
        <div className="text-center space-y-4 animate-fade-in-up mt-8 px-6">
            <h2 className="text-2xl md:text-4xl text-white font-semibold tracking-[0.2em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                {t.meditating}
            </h2>
            <p className="text-yellow-100 text-lg md:text-xl font-hindi drop-shadow-md tracking-wide opacity-90">
                {language === 'hi' ? 'परमपिता परमात्मा शिव बाबा की याद में...' : 'In loving remembrance of the Supreme Soul...'}
            </p>
        </div>

      </div>

      {/* Timer Bar - Subtle bottom loader */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-950">
        <div 
            className="h-full bg-yellow-400 shadow-[0_0_10px_#facc15] transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MeditationPage;