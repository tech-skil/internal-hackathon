import { useState, useCallback } from 'react';
import { initializeAssessment, processAssessment, getAssessmentHistory } from './AssLogic';

export const useAssessment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentAssessment, setCurrentAssessment] = useState(null);
  const [assessmentHistory, setAssessmentHistory] = useState([]);

  const startAssessment = useCallback(() => {
    initializeAssessment();
    setAssessmentHistory([]);
    setCurrentAssessment(null);
    setError(null);
  }, []);

  const submitAssessment = useCallback(async (assessmentType, userResponses) => {
    setLoading(true);
    setError(null);
    try {
      const result = await processAssessment(assessmentType, userResponses);
      setCurrentAssessment(result);
      setAssessmentHistory(getAssessmentHistory());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    currentAssessment,
    assessmentHistory,
    startAssessment,
    submitAssessment,
  };
};