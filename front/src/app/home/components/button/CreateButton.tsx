import React from 'react';

export default function CreateButton() {
  return (
    <>
      <button type="button" className="w-16 h-16 flex justify-center items-center gap-x-2 text-3xl font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        ＋
      </button>
    </>
  );
};
