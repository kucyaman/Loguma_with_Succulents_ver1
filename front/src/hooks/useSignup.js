// src/hooks/useSignup.js
import { useState } from 'react';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ name, email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (!response.ok) {
        throw new Error('サインアップに失敗しました。');
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      throw error;
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
