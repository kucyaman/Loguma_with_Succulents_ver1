import React from 'react';

export default function CreateButton() {
  return (
    <>
      <button type="button" className="w-12 h-12 flex justify-center items-center gap-x-2 text-3xl font-semibold rounded-full border border-transparent bg-custom-pink text-white hover:bg-custom-dark-pink disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        ＋
      </button>
    </>
  );
};