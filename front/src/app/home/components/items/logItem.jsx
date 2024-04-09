export default function LogItem({ log }) {
  return (
    <div className="flex items-center text-cen bg-gray-200 p-4 my-4 mb-2 rounded-lg">
      <p className="flex-1 text-sm md:text-base">{log.date}</p>
      <p className="flex-1 text-sm md:text-base">{log.action.name}</p>
      <p className="flex-1 text-sm md:text-base">{log.note}</p>
    </div>
  );
}