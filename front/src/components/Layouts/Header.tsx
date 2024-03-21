import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container py-4">
      <div className="text-center mb-8 px-8">
          <h1 className="text-2xl font-bold mb-3">Loguma <span className="text-lg">with</span> succulent</h1>
      </div>

      <div className="relative">
        <button onClick={toggleMenu} className="absolute right-0 text-2xl">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-5 py-2 w-48 bg-white rounded-lg shadow-xl">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">プロフィール</Link>
            <Link href="/logout" className="block px-4 py-2 hover:bg-gray-200">ログアウト</Link>
          </div>
        )}
      </div>

      <nav>
        <ul className="flex justify-center gap-4">
          <li><Link href="/diary" className="hover:text-blue-500 transition-colors">日記</Link></li>
          <li><Link href="/care-log" className="hover:text-blue-500 transition-colors">お手入れLog</Link></li>
          <li><Link href="/report" className="hover:text-blue-500 transition-colors">レポート</Link></li>
          <li><Link href="/report" className="hover:text-blue-500 transition-colors">カレンダー</Link></li>
        </ul>
      </nav>
    </header>
  );
}
