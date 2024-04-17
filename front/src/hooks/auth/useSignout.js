import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function useSignout() {
  const router = useRouter();

  const signout = async () => {
    try {
      const accessToken = Cookies.get('access-token');
      const client = Cookies.get('client');
      const uid = Cookies.get('uid');

      const config = {
        headers: {
          'access-token': accessToken,
          'client': client,
          'uid': uid,
        }
      };

      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/sign_out`, config);

      Cookies.remove('access-token');
      Cookies.remove('client');
      Cookies.remove('uid');

      router.push('/');
    } catch (error) {
      console.error('サインアウト時にエラーが発生しました:', error);
    }
  };

  return signout;
};
