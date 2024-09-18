import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBXAcL5lMMe2XQSg0ywAA7Z8i3CiRtZaSM";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

const generationConfig = {
  temperature: 0.7,
  topP: 1,
  topK: 40,
  maxOutputTokens: 1000,
};

let chat;
let assessmentHistory = [];

const createPrompt = (assessmentType, userResponses) => {
  return `You are an AI assistant specializing in Computer Science and Engineering (CSE) assessments. Analyze the following user responses to a CSE aptitude test and provide insights:

User Responses:
${JSON.stringify(userResponses, null, 2)}

Please provide:
1. An overall assessment of the user's performance
2. Key strengths identified
3. Areas for improvement
4. Recommended next steps for learning and development in CSE
5. Potential career paths in CSE that align with the user's performance

Provide a detailed and personalized analysis based on the given prompt. Aim for about 300-400 words in your response.`;
};

export const initializeAssessment = () => {
  chat = model.startChat({
    generationConfig,
    history: [],
  });
  assessmentHistory = [];
};

export const processAssessment = async (assessmentType, userResponses) => {
  if (!chat) {
    initializeAssessment();
  }

  const prompt = createPrompt(assessmentType, userResponses);
  assessmentHistory.push({ type: assessmentType, responses: userResponses });

  try {
    const result = await chat.sendMessage(prompt);
    const response = result.response.text().trim();
    assessmentHistory.push({ type: assessmentType, analysis: response });
    return response;
  } catch (error) {
    console.error('Error processing assessment:', error);
    return "I'm sorry, there was an error processing your assessment. Please try again later.";
  }
};

export const getAssessmentHistory = () => {
  return assessmentHistory;
};