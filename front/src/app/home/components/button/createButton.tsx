import Link from 'next/link';

interface CreateButtonProps {
  selectedContent: 'diary' | 'careLog' | 'report' | 'calendar';
}

export default function CreateButton({ selectedContent }: CreateButtonProps) {
  const contentPaths = {
    diary: '/diary/new',
    careLog: '/log/new',
    report: '/report/new',
    calendar: '/calendar/new'
  };

  const linkPath = contentPaths[selectedContent] || '/log/new'; // デフォルトのパス

  return (
    <Link href={linkPath} passHref>
      <button type="button" className="w-12 h-12 flex justify-center items-center gap-x-2 text-3xl font-semibold rounded-full border border-transparent bg-custom-pink text-white hover:bg-custom-dark-pink disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        ＋
      </button>
    </Link>
  );
}
