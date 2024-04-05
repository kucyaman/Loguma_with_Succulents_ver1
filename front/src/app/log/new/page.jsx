'use client'

import { logAction } from "@/log/hooks/logAction";
import { useRouter } from "next/navigation";

export default function LogForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await logAction(formData);
    router.push('/home');
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Log新規登録</h3>
          <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
            <input
              type="date"
              name="date"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="text"
              name="name"
              placeholder="お手入れ項目"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="text"
              name="note"
              placeholder="お手入れメモ"
              className="w-full p-2 border rounded text-black"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >投稿
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
