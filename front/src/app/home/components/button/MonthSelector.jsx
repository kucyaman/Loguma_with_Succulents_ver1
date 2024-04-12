export default function MonthSelector({ selectedMonth, onMonthSelect }) {
  return (
    <div className="container flex overflow-x-auto py-2 space-x-2">
      <div className="flex gap-6">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            onClick={() => onMonthSelect(i + 1)}
            className={`w-auto flex-none h-12 flex items-center justify-center text-lg cursor-pointer select-none ${selectedMonth === i + 1 ? "border-b-2 border-custom-pink text-custom-pink" : ""}`}
            style={{ minWidth: 'calc((100% - 4rem) / 6)' }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
