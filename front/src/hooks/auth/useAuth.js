import Cookies from 'js-cookie';

export default function useAuth() {
  const setToken = (tokenInfo) => {
    Cookies.set('access-token', tokenInfo['access-token'], { expires: 7 });
    Cookies.set('client', tokenInfo['client'], { expires: 7 });
    Cookies.set('uid', tokenInfo['uid'], { expires: 7 });
  };

  return { setToken };
};

