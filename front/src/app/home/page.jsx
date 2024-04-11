"use client";
import { useState } from 'react';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import HomeImage from '@/home/components/images/homeimage'
import MonthSelector from '@/home/components/button/MonthSelector';
import CreateButton from '@/home/components/button/CreateButton';
import LogIndex from '@/home/components/index/logIndex';
import Link from 'next/link'; 

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthSelect = (month) => {
    console.log(`${month}月が選択されました。`); // 選択された月をコンソールに表示
    setSelectedMonth(month); // 選択された月でステートを更新
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="pt-[120px]">
        <HomeImage />
      </div>
      <MonthSelector onMonthSelect={handleMonthSelect} />
      <div className="fixed right-5 bottom-5 z-50">
        <Link href="/log/new" passHref>
          <CreateButton />
        </Link>
      </div>
      <LogIndex selectedMonth={selectedMonth}/>
      {/* ここにindexページのその他のコンテンツを追加 */}
      <div>
        <Footer />
      </div>
    </>
  );
}
