
import React, { useState, useEffect } from 'react';
import { PageState, UserData, Language } from './types';
import { ASSETS, BLESSINGS_DATA } from './constants';
import HomePage from './components/HomePage';
import MeditationPage from './components/MeditationPage';
import BlessingPage from './components/BlessingPage';
import DrishtiPage from './components/DrishtiPage';

const App: React.FC = () => {
  // Start with Drishti Page
  const [page, setPage] = useState<PageState>('drishti');
  const [language, setLanguage] = useState<Language>('hi');
  const [userData, setUserData] = useState<UserData>({ name: '', vardan: '' });

  // Preload audio assets slightly
  useEffect(() => {
    const audio = new Audio(ASSETS.bgMusic);
    audio.load();
  }, []);

  const handleDrishtiComplete = () => {
    setPage('home');
  };

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
    // Go back to home, not Drishti, for repeated uses
    setPage('home');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <div className={`min-h-screen font-sans bg-white ${language === 'hi' ? 'font-hindi' : ''}`}>
      
      {page === 'drishti' && (
        <DrishtiPage 
            language={language}
            onComplete={handleDrishtiComplete}
        />
      )}

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
