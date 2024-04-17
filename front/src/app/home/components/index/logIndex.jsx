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
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logs`, {
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

  return (
    <div>
      {logs.length > 0 ? (
        logs.map(log => (
          <LogItem key={log.id} log={log} />
        ))
      ) : (
        <p className="text-center mt-7">この月は投稿がありません</p> // ログがない場合の表示
      )}
    </div>
  );
}
