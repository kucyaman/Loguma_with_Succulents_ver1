import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useSignout from '../../../hooks/auth/useSignout';



export default function Header({ selectedContent, setSelectedContent }) {
  const handleContentSelect = (content) => {
    setSelectedContent(content);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const signout = useSignout(); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignout = (e) => {
    e.preventDefault(); // デフォルトのリンク動作を防止
    signout();
  };


  return (
    <header className="bg-white">
      <div className="container py-4">

        <div className="text-center mb-8 px-8">
            <h1 className="text-2xl font-bold mb-3">Loguma <span className="text-lg">with</span> succulent</h1>
        </div>
    
        <div className="relative z-50">
          <button onClick={toggleMenu} className="absolute right-0 text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-5 py-2 w-48 bg-white rounded-lg shadow-xl">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">プロフィール</Link>
              <button onClick={handleSignout} className="block px-4 py-2 hover:bg-gray-200 text-left w-full">ログアウト</button>
            </div>
          )}
        </div>

        <nav>
          <ul className="flex justify-center gap-4">
            <li>
              <button
                onClick={() => handleContentSelect('diary')}
                className={`transition-colors ${selectedContent === 'diary' ? 'border-b-2 border-custom-dark-pink' : ''}`}
              >
                日記
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleContentSelect('careLog')}
                className={`transition-colors ${selectedContent === 'careLog' ? 'border-b-2 border-custom-dark-pink' : ''}`}
              >
                お手入れLog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentSelect('report')}
                className={`transition-colors ${selectedContent === 'report' ? 'border-b-2 border-custom-dark-pink' : ''}`}
              >
                レポート
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentSelect('calendar')}
                className={`transition-colors ${selectedContent === 'calendar' ? 'border-b-2 border-custom-dark-pink' : ''}`}
              >
                カレンダー
              </button>
            </li>
          </ul>
        </nav>
        
      </div>  
    </header>
  );
}
