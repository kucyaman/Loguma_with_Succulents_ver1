import Image from 'next/image';

export default function HomeImage() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <Image
        src="/homeimage.jpg" // 画像のパスを指定してください
        alt="homeImage"
        fill
        style={{
          objectFit: 'cover',
          // 他に必要なスタイルがあればここに追加
        }}
        quality={100}
      />
    </div>
  );
};

