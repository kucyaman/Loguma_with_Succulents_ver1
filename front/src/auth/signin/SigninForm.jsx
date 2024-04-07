import React, { useState } from 'react';
import useSignin from '../../hooks/auth/useSignin';
import { useRouter } from "next/navigation";

export default function SigninForm({ onClose }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, isLoading, error } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signin({ email, password });
      console.log('ログイン成功:', data);
      router.push('home');
      onClose();
    } catch (err) {
      console.error('ログイン失敗:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">ログイン</h3>
          <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full p-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="パスワード"
              className="w-full p-2 border rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
        <div className="mt-4">
          <button onClick={onClose} className="text-sm text-blue-500 hover:underline">閉じる</button>
        </div>
      </div>
    </div>
  );
};
