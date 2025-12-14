
export type Language = 'en' | 'hi';
export type PageState = 'drishti' | 'home' | 'meditation' | 'blessing';

export interface Translation {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  startButton: string;
  meditating: string;
  downloadBtn: string;
  shareBtn: string;
  homeBtn: string;
  footer: string;
  drishtiTitle: string;
  drishtiButton: string;
}

export interface ThemeOption {
  id: string;
  name: string;
  gradient: string;
  textColor: string;
  accentColor: string;
  overlayColor: string;
  borderColor: string;
}

export interface UserData {
  name: string;
  vardan: string;
}

export interface Blessing {
  id: string;
  hi: string;
  en: string;
}
