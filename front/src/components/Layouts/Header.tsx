import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-4">
      <div className="text-center mb-8 px-8">
          <h1 className="text-2xl font-bold text-white mb-3">Loguma <span className="text-lg">with</span> succulent</h1>
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

export default Header;
