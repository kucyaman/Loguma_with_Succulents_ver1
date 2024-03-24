import { useState } from 'react';
import axios from "axios";
import useAuth from './useAuth';


export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setToken } = useAuth();

  const signup = async ({ name, email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3001/api/v1/auth', {
        name,
        email,
        password,
      });

      setToken(response.headers);

      setIsLoading(false);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'サインアップに失敗しました。');
      setIsLoading(false);
      throw error;
    }
  };

  return { signup, isLoading, error };
};

