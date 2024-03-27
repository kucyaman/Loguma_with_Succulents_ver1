"use client";
import Header from '@/components/Layouts/Header';
import CreateButton from '@/app/home/components/button/CreateButton';
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="container relative">
      <Header />
      {/* ここにindexページのその他のコンテンツを追加 */}
      <p>ここはログイン後のメインページです。</p>
      <Link href="/log/new" passHref>
        <div className="absolute right-0">
          <CreateButton />
        </div>
      </Link>
    </div>
  );
}
