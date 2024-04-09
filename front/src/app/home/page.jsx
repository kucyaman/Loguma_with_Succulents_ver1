"use client";
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import HomeImage from '@/home/components/images/homeimage'
import CreateButton from '@/home/components/button/CreateButton';
import LogIndex from '@/home/components/index/logindex';
import Link from 'next/link'; 

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="pt-[120px]">
        <HomeImage />
      </div>
      <div className="fixed right-5 bottom-5 z-50">
        <Link href="/log/new" passHref>
          <CreateButton />
        </Link>
      </div>
      <LogIndex />
      {/* ここにindexページのその他のコンテンツを追加 */}
      <div>
        <Footer />
      </div>
    </>
  );
}
