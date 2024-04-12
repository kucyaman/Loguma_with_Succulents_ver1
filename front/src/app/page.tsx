"use client";
import { useState } from 'react';
import Head from 'next/head';
import SignupForm from '../auth/signup/SignupForm'; 
import SigninForm from '../auth/signin/SigninForm'; 

export default function Home() {
  const [showModal, setShowModal] = useState<null | "signup" | "signin">(null);

  const openSignupModal = () => {
    setShowModal("signup");
  };

  const openSigninModal = () => {
    setShowModal("signin");
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <Head>
        <title>トップページ</title>
        <meta name="description" content="トップページ" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
        <div className="text-center mb-8 px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Loguma with succulent</h1>
          <p className="text-xl text-white">Loguma with succulentは多肉植物を愛する仲間が集まり、お世話の記録を共有するアプリです。</p>
          <p className="text-xl text-white">早速お世話の記録をつけてみましょう！</p>
        </div>
        <div className="space-y-4">
          <button onClick={openSignupModal} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-custom-pink text-white hover:bg-custom-dark-pink disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            新規登録
          </button>
          {showModal === "signup" && (
            <SignupForm onClose={closeModal} />
          )}
          <button onClick={openSigninModal} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            登録済みの方はこちら
          </button>
          {showModal === "signin" && (
            <SigninForm onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
}
