import React from 'react';
import { ThemeOption, UserData, Language } from '../types';

interface CardPreviewProps {
  userData: UserData;
  theme: ThemeOption;
  language: Language;
  cardRef?: React.RefObject<HTMLDivElement>;
}

const CardPreview: React.FC<CardPreviewProps> = ({ userData, theme, language, cardRef }) => {
  return (
    <div className="w-full flex justify-center py-8">
      <div 
        ref={cardRef}
        className={`
          relative w-full max-w-md aspect-square shadow-2xl rounded-xl overflow-hidden
          border-8 transition-colors duration-500 flex flex-col items-center justify-between p-8 text-center
          bg-gradient-to-br ${theme.gradient}
        `}
        style={{ borderColor: theme.borderColor }}
      >
        {/* Decorative inner border */}
        <div 
          className="absolute inset-4 border-2 rounded-lg pointer-events-none opacity-50"
          style={{ borderColor: theme.accentColor }}
        ></div>

        {/* Header */}
        <div className="z-10 mt-4">
          <h2 
            className={`text-2xl font-bold tracking-wider uppercase ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}
            style={{ color: theme.accentColor }}
          >
            {language === 'hi' ? 'दिव्य वरदान' : 'Divine Blessing'}
          </h2>
        </div>

        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center flex-grow w-full space-y-4">
          <h3 
            className={`text-3xl font-bold ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}
            style={{ color: theme.textColor }}
          >
            {userData.name || (language === 'hi' ? 'प्रिय आत्मा' : 'Dear Soul')}
          </h3>
          
          <div className="w-16 h-1 bg-current opacity-40 rounded-full" style={{ color: theme.accentColor }}></div>

          <p 
            className={`text-2xl px-4 leading-relaxed ${language === 'hi' ? 'font-hindi font-medium' : 'font-script'}`}
            style={{ color: theme.textColor }}
          >
            {userData.vardan || (language === 'hi' ? "शांति आपके साथ रहे।" : "May peace be with you.")}
          </p>
        </div>

        {/* Footer */}
        <div className="z-10 mb-2 opacity-70">
           <span 
             className={`text-sm ${language === 'hi' ? 'font-hindi' : 'font-sans'}`}
             style={{ color: theme.textColor }}
           >
             {language === 'hi' ? 'ओम शांति' : 'Om Shanti'}
           </span>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 pointer-events-none mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default CardPreview;