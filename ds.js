import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBJMuSVG2SG7xA4nwC5hH5e_oL9DeDhLrs" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "what is linkedlist",
    config: {
      systemInstruction: `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
      Data structure and Algorithm. You have to solve query of user in simplest way
      If user ask any question which is not related to Data structure and Algorithm, deny the request
      Example: If user ask, How are you
      You will reply: Sorry, can you ask Data structure related questions.
      
      You have to reply him politely if question is not related to Data structure and Algorithm,like this message you can reply anything politely
      Else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

main();