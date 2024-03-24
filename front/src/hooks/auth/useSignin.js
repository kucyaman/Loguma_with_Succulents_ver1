import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function useSignin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signin = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/api/v1/auth/sign_in', {
        email,
        password
      });

      Cookies.set('access-token', response.headers['access-token'], { expires: 7 });
      Cookies.set('client', response.headers['client'], { expires: 7 });
      Cookies.set('uid', response.headers['uid'], { expires: 7 });

      setIsLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data.errors : "サーバーに接続できませんでした。");
      setIsLoading(false);
      throw err;
    }
  };

  return { signin, isLoading, error };
};

