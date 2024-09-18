import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBxuoJzi684G65U4mAe3WNYNC9qb-NrFj0" ;

if (!API_KEY) {
  console.error("API_KEY is undefined or empty");
  throw new Error("Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file.");
}

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

const assessmentPrompts = [
  {
    type: "personality",
    prompt: `Analyze the user's responses to generate insights about their personality traits, work style preferences, and potential career paths. Consider:
    1. Dominant personality characteristics
    2. Preferred work environments
    3. Communication style
    4. Decision-making approach
    5. Top 3-5 career fields that align with their traits`
  },
  {
    type: "skills",
    prompt: `Evaluate the user's responses to identify their key skills and areas for improvement. Include:
    1. Top 3-5 strongest skills
    2. 2-3 skills that could be developed further
    3. How these skills translate to potential career paths
    4. Suggestions for skill development activities`
  },
  {
    type: "interests",
    prompt: `Based on the user's responses, analyze their interests and passions. Provide:
    1. Main areas of interest
    2. How these interests could be applied professionally
    3. 3-5 career fields that align with their interests
    4. Suggestions for exploring these interests further`
  },
  {
    type: "values",
    prompt: `Examine the user's responses to determine their core values and motivations. Include:
    1. Top 3-5 core values
    2. How these values might influence career choices
    3. Types of work environments that align with these values
    4. Potential conflicts between values and career paths`
  },
  {
    type: "summary",
    prompt: `Provide a comprehensive summary of the user's aptitudes and strengths based on all previous responses. Include:
    1. Overall assessment of key strengths and potential areas for growth
    2. Top 3-5 recommended career paths with brief explanations
    3. Suggestions for next steps in career exploration or skill development
    4. Any potential challenges or considerations for their career journey`
  }
];

const createPrompt = (assessmentType, userResponses) => {
  const selectedPrompt = assessmentPrompts.find(p => p.type === assessmentType) || assessmentPrompts[0];
  
  return `You are CareerAI, an advanced aptitude and strength assessment tool. Analyze the following user responses and ${selectedPrompt.prompt}

User Responses:
${userResponses}

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