import React, { useState, useEffect } from 'react';
import { PageState, UserData, Language } from './types';
import { ASSETS, BLESSINGS_DATA } from './constants';
import HomePage from './components/HomePage';
import MeditationPage from './components/MeditationPage';
import BlessingPage from './components/BlessingPage';

const App: React.FC = () => {
  const [page, setPage] = useState<PageState>('home');
  const [language, setLanguage] = useState<Language>('hi');
  const [userData, setUserData] = useState<UserData>({ name: '', vardan: '' });

  // Preload audio
  useEffect(() => {
    const audio = new Audio(ASSETS.bgMusic);
    audio.load();
  }, []);

  const handleStart = (name: string) => {
    setUserData({ ...userData, name });
    setPage('meditation');
  };

  const handleMeditationComplete = () => {
    // Pick random blessing
    const randomIndex = Math.floor(Math.random() * BLESSINGS_DATA.length);
    const selectedBlessing = BLESSINGS_DATA[randomIndex];
    const vardanText = selectedBlessing[language];
    
    setUserData(prev => ({ ...prev, vardan: vardanText }));
    setPage('blessing');
  };

  const handleReset = () => {
    setUserData({ name: '', vardan: '' });
    setPage('home');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className={`min-h-screen font-sans bg-white ${language === 'hi' ? 'font-hindi' : ''}`}>
      {page === 'home' && (
        <HomePage 
          language={language} 
          toggleLanguage={toggleLanguage} 
          onStart={handleStart} 
        />
      )}
      
      {page === 'meditation' && (
        <MeditationPage 
          language={language}
          onComplete={handleMeditationComplete}
        />
      )}

      {page === 'blessing' && (
        <BlessingPage 
          userData={userData}
          language={language}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;