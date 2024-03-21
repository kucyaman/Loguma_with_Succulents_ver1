"use client";
import Header from '../../components/Layouts/Header';

export default function Home() {
  return (
    <div className="container">
      <Header />
      {/* ここにindexページのその他のコンテンツを追加 */}
      <p>ここはログイン後のメインページです。</p>
    </div>
  );
}
