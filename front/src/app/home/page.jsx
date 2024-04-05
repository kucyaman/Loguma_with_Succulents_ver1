"use client";
import Header from '@/components/Layouts/Header';
import HomeImage from '@/home/components/images/homeimage'
import CreateButton from '@/home/components/button/CreateButton';
import LogIndex from '@/home/components/index/logindex';
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <HomeImage />
      <Link href="/log/new" passHref>
        <div className="absolute right-0">
          <CreateButton />
        </div>
      </Link>
      <LogIndex />
      {/* ここにindexページのその他のコンテンツを追加 */}
    </div>
  );
}
