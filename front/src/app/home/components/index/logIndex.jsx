import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import LogItem from '@/home/components/items/logItem';

// selectedMonthをpropsとして受け取る
export default function LogIndex({ selectedMonth }) {
  const [logs, setLogs] = useState([]);

  const accessToken = Cookies.get('access-token');
  const client = Cookies.get('client');
  const uid = Cookies.get('uid');

  useEffect(() => {
    // selectedMonthがnullでない場合にのみAPIリクエストを行う
    if (selectedMonth !== null) {
      const year = new Date().getFullYear(); // 現在の年を取得
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/logs`, {
        params: { year, month: selectedMonth },
        headers: {
          'access-token': accessToken,
          'client': client,
          'uid': uid
        },
      })
      .then(response => {
        console.log(response.data);
        setLogs(response.data); // 取得したログデータでステートを更新
      })
      .catch(error => console.error('Error:', error));
    }
  }, [selectedMonth]); // selectedMonthが変更されるたびに効果を再実行

  const handleDelete = async (logId) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/logs/${logId}`, {
        headers: {
          'access-token': accessToken,
          'client': client,
          'uid': uid
        },
      });
      setLogs(logs.filter(log => log.id !== logId)); // ログを削除
    } catch (error) {
      console.error('ログの削除に失敗しました:', error);
    }
  };

  return (
    <div>
      {logs.length > 0 ? (
        logs.map(log => (
          <LogItem key={log.id} log={log} onDelete={handleDelete} />
        ))
      ) : (
        <p className="text-center mt-7">この月は投稿がありません</p> // ログがない場合の表示
      )}
    </div>
  );
}
