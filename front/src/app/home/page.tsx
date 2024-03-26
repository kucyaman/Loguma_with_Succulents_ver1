"use client";
import Header from '@/components/Layouts/Header';
import CreateButton from '@/components/UI/button/CreateButton';

export default function Home() {
  return (
    <div className="container relative">
      <Header />
      {/* ここにindexページのその他のコンテンツを追加 */}
      <p>ここはログイン後のメインページです。</p>
      <div className="absolute right-0" >
        <CreateButton />
      </div>
      
    </div>
  );
}
