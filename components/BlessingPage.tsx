import React from 'react';
import { Download, Share2, RefreshCw } from 'lucide-react';
import { UserData, Language } from '../types';
import { TRANSLATIONS, THEMES } from '../constants';
import { downloadCardImage } from '../services/imageGenerator';
import CardPreview from './CardPreview';

interface BlessingPageProps {
  userData: UserData;
  language: Language;
  onReset: () => void;
}

const BlessingPage: React.FC<BlessingPageProps> = ({ userData, language, onReset }) => {
  const t = TRANSLATIONS[language];
  // Default to the first BK theme
  const theme = THEMES[0];

  const handleDownload = () => {
    downloadCardImage(userData, theme, language);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Divine Vardan',
          text: userData.vardan,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-50 via-white to-white py-12 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-orange-800">{t.title}</h1>
            <p className="text-stone-500">{t.footer}</p>
        </div>

        {/* Card Display */}
        <div className="w-full max-w-md transform transition-all hover:scale-[1.01] duration-500">
           <CardPreview 
             userData={userData} 
             theme={theme} 
             language={language}
           />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mt-8">
            <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-medium shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
            >
            <Download className="w-5 h-5" />
            {t.downloadBtn}
            </button>
            
            <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-stone-200 text-stone-700 rounded-xl font-medium hover:bg-stone-50 transition-all active:scale-95"
            >
            <Share2 className="w-5 h-5" />
            {t.shareBtn}
            </button>
        </div>

        <button 
            onClick={onReset}
            className="flex items-center gap-2 text-stone-400 hover:text-orange-600 transition-colors mt-8"
        >
            <RefreshCw className="w-4 h-4" />
            {t.homeBtn}
        </button>

      </div>
    </div>
  );
};

export default BlessingPage;