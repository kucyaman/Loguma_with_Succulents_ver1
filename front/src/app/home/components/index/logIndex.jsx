import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function LogIndex() {
  const [logs, setLogs] = useState([]);

  const accessToken = Cookies.get('access-token');
  const client = Cookies.get('client');
  const uid = Cookies.get('uid');

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/logs', {
      headers: {
        'Content-Type': 'application/json',
        'access-token': accessToken,
        'client': client,
        'uid': uid
      },
    })
    .then(response => {
      setLogs(response.data);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {logs.map(log => (
        <div key={log.id}>
          <p>Date: {log.date}</p>
          <p>Action: {log.action.name}</p> {/* actionNameは適宜APIのレスポンスに合わせて変更してください */}
          <p>Note: {log.note}</p>
        </div>
      ))}
    </div>
  );
}
