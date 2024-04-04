'use client'

import { logAction } from "@/app/log/hooks/logAction";
import { useRouter } from "next/navigation";

export default function LogForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await logAction(formData);
    router.push('/home');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type='date' name='date'/>
      <input type='text' name='name'/>
      <input type='text' name='note'/>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">投稿</button>
    </form>
  );
}
