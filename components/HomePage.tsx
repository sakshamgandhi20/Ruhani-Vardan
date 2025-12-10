import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HomePageProps {
  language: Language;
  toggleLanguage: () => void;
  onStart: (name: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, toggleLanguage, onStart }) => {
  const [name, setName] = useState('');
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50 via-white to-white">
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-orange-100 text-orange-800 hover:bg-orange-50 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
        </button>
      </div>

      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        
        {/* BK Style Imagery */}
        <div className="relative w-32 h-32 mx-auto mb-6">
           <div className="absolute inset-0 bg-red-500 rounded-full blur-[60px] opacity-20"></div>
           <div className="w-full h-full relative z-10 flex items-center justify-center">
             {/* Abstract representation of Point of Light if no logo */}
             <div className="w-4 h-6 bg-white shadow-[0_0_40px_10px_rgba(255,100,0,0.8)] rounded-[100%]"></div>
             <div className="absolute inset-0 border-2 border-orange-200/30 rounded-full animate-pulse-slow"></div>
           </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 p-2">
            {t.title}
          </h1>
          <p className="text-stone-500 text-lg">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-500 uppercase tracking-widest">
              {t.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full px-6 py-4 text-center text-black text-xl rounded-2xl border-2 border-orange-100 bg-white/50 focus:border-orange-400 focus:ring-4 focus:ring-orange-50 outline-none transition-all placeholder:text-stone-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-medium rounded-2xl shadow-lg shadow-orange-200 transform transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.startButton}
          </button>
        </form>

        <p className="text-stone-400 text-sm mt-8">{t.footer}</p>
      </div>
    </div>
  );
};

export default HomePage;