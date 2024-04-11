export default function LogItem({ log }) {
  // Date オブジェクトを作成
  const date = new Date(log.date);
  // 日にちだけを抽出
  const day = date.toLocaleDateString('ja-JP', { day: 'numeric' });
  return (
    <div className="container">
    <div className="flex items-center text-cen bg-gray-200 p-4 my-4 mb-2 rounded-lg">
      <p className="flex-1 text-sm md:text-base">{day}</p>
      <p className="flex-1 text-sm md:text-base">{log.action.name}</p>
      <p className="flex-1 text-sm md:text-base">{log.note}</p>
    </div>
    </div>
  );
}