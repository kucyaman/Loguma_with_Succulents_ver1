"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import HomeImage from '@/home/components/images/homeImage';
import MonthSelector from '@/home/components/button/monthSelector';
import CreateButton from '@/home/components/button/createButton';
import LogIndex from '@/home/components/index/logIndex';
import Link from 'next/link'; 

export default function Home() {
  const [selectedContent, setSelectedContent] = useState('careLog');

  const currentMonth = new Date().getMonth() + 1;
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    // MonthSelectorに現在の月を初期値として設定する
    handleMonthSelect(currentMonth);
  }, []); // 空の依存配列でコンポーネントマウント時のみ実行

  const handleMonthSelect = (month) => {
    console.log(`${month}月が選択されました。`); // 選択された月をコンソールに表示
    setSelectedMonth(month); // 選択された月でステートを更新
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Header selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
      </div>
      <div className='relative'>
        <div className="pt-[120px]">
          <HomeImage />
        </div>
        <div className='absolute top-40 ml-4 mt-4 text-white text-left'>
          <div className='text-l'>{selectedYear}</div>
          <div className="text-3xl">{selectedMonth && months[selectedMonth - 1]}</div>
        </div>
      </div>
      <MonthSelector selectedMonth={selectedMonth} onMonthSelect={handleMonthSelect} />
      <div className="fixed right-5 bottom-5 z-50">
        <Link href="/log/new" passHref>
          <CreateButton />
        </Link>
      </div>
        {/* {selectedContent === 'diary' && <DiaryComponent />} */}
        {selectedContent === 'careLog' && <LogIndex selectedMonth={selectedMonth}/>}
        {/* {selectedContent === 'report' && <ReportComponent />} */}
        {/* {selectedContent === 'calendar' && <CalendarComponent />} */}
      {/* その他のコンテンツ */}
      <div>
        <Footer />
      </div>
    </>
  );
}
