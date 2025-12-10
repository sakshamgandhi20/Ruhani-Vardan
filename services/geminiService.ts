import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

let genAI: GoogleGenAI | null = null;

try {
  // Initialize ONLY if the key is present.
  // In a real app, we handle missing keys gracefully in the UI.
  if (process.env.API_KEY) {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Error initializing Gemini:", error);
}

export const generateAiBlessing = async (name: string, lang: Language): Promise<string> => {
  if (!genAI) {
    throw new Error("API Key is missing. Unable to contact the divine AI.");
  }

  const prompt = lang === 'hi' 
    ? `Write a short, spiritual, and positive 'Vardan' (Blessing) in Hindi for someone named ${name || 'Soul'}. It should be like a Brahma Kumaris blessing. Max 20 words. Direct address.`
    : `Write a short, spiritual, and positive 'Vardan' (Blessing) in English for someone named ${name || 'Soul'}. It should be inspiring and peaceful. Max 25 words. Direct address.`;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim().replace(/^"|"$/g, ''); // Remove quotes if present
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("The connection to the wisdom source was interrupted. Please try again.");
  }
};