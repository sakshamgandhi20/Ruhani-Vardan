import { Language, Translation, ThemeOption, Blessing } from './types';

export const ASSETS = {
  // A soft, royalty-free meditation ambient track
  bgMusic: "https://cdn.pixabay.com/download/audio/2022/03/09/audio_c8c8a73467.mp3?filename=meditation-impulse-30115.mp3",
  // Generic spiritual/light glow image representing the Supreme Soul
  shivBabaImage: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?q=80&w=1000&auto=format&fit=crop", 
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Brahma_Kumaris_World_Spiritual_University_Logo.svg/1200px-Brahma_Kumaris_World_Spiritual_University_Logo.svg.png" 
};

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    title: "Divine Blessings",
    subtitle: "Receive a personal blessing from the Supreme",
    nameLabel: "Enter Your Name",
    namePlaceholder: "Your Name...",
    startButton: "Receive Blessing",
    meditating: "Connecting with the Supreme Source...",
    downloadBtn: "Save Blessing",
    shareBtn: "Share",
    homeBtn: "Receive Another",
    footer: "Om Shanti",
  },
  hi: {
    title: "दिव्य वरदान",
    subtitle: "परमपिता परमात्मा से अपना वरदान प्राप्त करें",
    nameLabel: "अपना नाम लिखें",
    namePlaceholder: "आपका नाम...",
    startButton: "वरदान प्राप्त करें",
    meditating: "परमधाम से जुड़ रहे हैं...",
    downloadBtn: "वरदान सहेजें",
    shareBtn: "साझा करें",
    homeBtn: "पुनः प्राप्त करें",
    footer: "ओम शांति",
  }
};

// The "JSON" data for random blessings
export const BLESSINGS_DATA: Blessing[] = 
 [
  {
    "id": "1",
    "en": "May you receive the fruit of every action by performing it with a selfless attitude.",
    "hi": "निमित्त भाव से हर कर्म करने वाले आप फलस्वरूप फल पाते हैं।"
  },
  {
    "id": "2",
    "en": "May you remain carefree by having a surrendered and trustworthy attitude in every task.",
    "hi": "आप निश्चिंत भाव से हर कार्य करने वाले विश्वासी और परोपकारी हो।"
  },
  {
    "id": "3",
    "en": "May you remain ever stable by understanding benevolence in every situation.",
    "hi": "हर बात में कल्याण समझ आप सदा स्थितप्रज्ञ रहते हो।"
  },
  {
    "id": "4",
    "en": "May your pure wishes and pure words make everyone content.",
    "hi": "अपनी शुभ वृत्ति और बोल से आप सर्व को संतुष्ट बनाते हो।"
  },
  {
    "id": "5",
    "en": "May you progress constantly through the experience of cooperation.",
    "hi": "परस्पर सहयोग की अनुभूति द्वारा आप सदा आगे बढ़ते जाते हो।"
  },
  {
    "id": "6",
    "en": "May your elevated character become the true decoration of your life.",
    "hi": "आपका श्रेष्ठ चरित्र ही आपके जीवन का सच्चा श्रृंगार है।"
  },
  {
    "id": "7",
    "en": "May you create elevated thoughts by understanding the subtle signals of God.",
    "hi": "मन को प्रभु की आज्ञात समझ आप सदा श्रेष्ठ संकल्प करते हों।"
  },
  {
    "id": "8",
    "en": "May your pure and valuable words become more precious than jewels.",
    "hi": "आपके शुभ भावना युक्त बोल हीरे–मोती से भी अधिक मूल्यवान हैं।"
  },
  {
    "id": "9",
    "en": "May you keep learning from every past situation and turn it into experience.",
    "hi": "बीती बात से शिक्षा लेकर आप सदा उन्नति का अनुभव करते रहते हों।"
  },
  {
    "id": "10",
    "en": "May your simple nature make every task easy.",
    "hi": "आपके सरल स्वभाव के कारण हर कार्य सरल बन जाता है।"
  },
  {
    "id": "11",
    "en": "May your enthusiasm keep you progressing and inspiring many others.",
    "hi": "आप सदा उमंग उत्साह में रह औरों को आगे बढ़ाते रहते हों।"
  },
  {
    "id": "12",
    "en": "May your quality of humility bring you respect from everyone.",
    "hi": "आप नम्रता के गुण द्वारा सबको स्नेह और सन्मान प्राप्त करते हों।"
  },
  {
    "id": "13",
    "en": "May you bring transformation in your life through elevated thinking.",
    "hi": "आप अपने समस्त विचारों द्वारा उच्च भाव को धारण कर जीवन में परिवर्तन करते हैं।"
  },
  {
    "id": "14",
    "en": "May you develop the power to correct your mistakes with honesty.",
    "hi": "अपनी ही गलतियों को क्षमा कर उन्हें सुधारने की क्षमता आपमें है।"
  },
  {
    "id": "15",
    "en": "May your humility inspire everyone to bow with respect.",
    "hi": "आपमें नम्रता का गुण है इसलिए सभी आपको नमन करते हैं।"
  },
  {
    "id": "16",
    "en": "May your surrender make you an embodiment of trust.",
    "hi": "प्रभु के प्रति समर्पण भाव ही आपके जीवन की स्थिरता का आधार है।"
  },
  {
    "id": "17",
    "en": "May your sweet smile spread joy in the lives of many.",
    "hi": "आपकी मधुर मुस्कान अनेक के जीवन में आनंद की किरणें बिखेर देती है।"
  },
  {
    "id": "18",
    "en": "May your elevated thoughts bring happiness to everyone around you.",
    "hi": "आपके श्रेष्ठ विचार चन्दन के समान खुशबू फैलाकर दूसरों के जीवन को महकाते हैं।"
  },
  {
    "id": "19",
    "en": "May your feeling of service earn you the blessings of all.",
    "hi": "आपकी सेवा भाव वृत्ति आपको दूसरों की शुभकामनाएँ प्राप्त करवाती है।"
  },
  {
    "id": "20",
    "en": "May your patience bring you success in every task.",
    "hi": "हर कार्य में साहस रखने से सफलता आपके गले का हार बन जाती है।"
  },
  {
    "id": "21",
    "en": "May you move ahead constantly with faith in your path.",
    "hi": "आप जीवन पथ पर आत्मविश्वास के बल से सदा आगे बढ़ते रहते हो।"
  },
  {
    "id": "22",
    "en": "May your self-confidence keep you cheerful always.",
    "hi": "आपमें आत्मविश्वास का बल है इसलिए आप सदा मुस्कुराते रहते हो।"
  },
  {
    "id": "23",
    "en": "May your power of love transform even those who oppose you.",
    "hi": "स्नेह की शक्ति से आप गुणा करने वाले को भी परिवर्तन कर देते हो।"
  },
  {
    "id": "24",
    "en": "May your contentment make your every moment successful.",
    "hi": "आप प्रसन्नता की पूँजी से हर कार्य सफलतापूर्वक सम्पन्न करते हो।"
  },
  {
    "id": "25",
    "en": "May your sweet words win everyone’s heart.",
    "hi": "आप अपने मधुर बोल द्वारा सबके मन को जीत लेते हो।"
  },
  {
    "id": "26",
    "en": "May your unwavering faith keep you smiling forever.",
    "hi": "आपमें अटल विश्वास का बल है इसलिए आप सदा मुस्कुराते रहते हो।"
  },
  {
    "id": "27",
    "en": "May your love transform even those who oppose you.",
    "hi": "स्नेह की शक्ति से आप गुणा करने वाले को भी परिवर्तन कर देते हो।"
  },
  {
    "id": "28",
    "en": "May your contentment make every task successful.",
    "hi": "आप प्रसन्नता की पूँजी से हर कार्य सफलतापूर्वक सम्पन्न करते हो।"
  },
  {
    "id": "29",
    "en": "May your sweet smile spread rays of joy everywhere.",
    "hi": "आपकी मधुर मुस्कान अनेक के जीवन में आनंद की किरणें बिखेर देती है।"
  },
  {
    "id": "30",
    "en": "May your elevated thoughts bring fragrance to the lives of others.",
    "hi": "आपके श्रेष्ठ विचार चन्दन के समान खुशबू फैलाते हैं।"
  },
  {
    "id": "31",
    "en": "May your feeling of service bring you blessings from all.",
    "hi": "आपकी सेवा भाव वृत्ति आपको दूसरों की शुभकामनाएँ प्राप्त करवाती है।"
  },
  {
    "id": "32",
    "en": "May patience make you victorious in every situation.",
    "hi": "हर कार्य में साहस रखने से सफलता आपके गले का हार बन जाती है।"
  },
  {
    "id": "33",
    "en": "May your unwavering faith keep you progressing.",
    "hi": "आपमें आत्मविश्वास का बल है इसलिए आप आगे बढ़ते रहते हो।"
  },
  {
    "id": "34",
    "en": "May your pure thoughts uplift many souls.",
    "hi": "आपके श्रेष्ठ विचार अनेक आत्माओं को प्रेरित करते हैं।"
  },
  {
    "id": "35",
    "en": "May you become victorious in every task with courage and stability.",
    "hi": "हर कार्य में साहस से आप सफलता प्राप्त करते हो।"
  }
];


export const THEMES: ThemeOption[] = [
  {
    id: 'brahma-kumaris',
    name: 'Purity & Light',
    gradient: 'from-white via-orange-50 to-amber-50',
    textColor: '#9a3412', // orange-900
    accentColor: '#ea580c', // orange-600
    overlayColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: '#fdba74' // orange-300
  },
  {
    id: 'golden-age',
    name: 'Golden Age',
    gradient: 'from-yellow-50 via-amber-100 to-yellow-200',
    textColor: '#854d0e',
    accentColor: '#d97706',
    overlayColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: '#fcd34d'
  },
  {
    id: 'shanti',
    name: 'Deep Peace',
    gradient: 'from-blue-50 via-indigo-50 to-white',
    textColor: '#1e3a8a',
    accentColor: '#4338ca',
    overlayColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: '#a5b4fc'
  }
];