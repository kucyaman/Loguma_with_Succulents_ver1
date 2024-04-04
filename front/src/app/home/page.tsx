"use client";
import Header from '@/components/Layouts/Header';
import HomeImage from '@/app/home/components/images/homeimage'
import CreateButton from '@/app/home/components/button/CreateButton';
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="relative">
      <Header />
      {/* ここにindexページのその他のコンテンツを追加 */}
      <HomeImage />
      <Link href="/log/new" passHref>
        <div className="absolute right-0">
          <CreateButton />
        </div>
      </Link>
    </div>
  );
}
