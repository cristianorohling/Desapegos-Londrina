
import { GoogleGenAI } from "@google/genai";

export const generateDescription = async (productName: string, category: string): Promise<string> => {
  try {
    // Fix: Use process.env.API_KEY directly as per SDK guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Escreva uma descrição detalhada, vendedora e amigável para um item de bazar chamado "${productName}" na categoria "${category}". Destaque que está em bom estado e é uma oportunidade única. Pode usar emojis e parágrafos.`,
    });
    
    // Fix: Access .text property directly (do not call as a function).
    return response.text || "Sem descrição gerada.";
  } catch (error) {
    console.error("Erro ao gerar descrição:", error);
    return "Erro ao conectar com a IA para gerar descrição.";
  }
};
