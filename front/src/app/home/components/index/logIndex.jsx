import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import LogItem from '@/home/components/items/logItem'

export default function LogIndex() {
  const [logs, setLogs] = useState([]);

  const accessToken = Cookies.get('access-token');
  const client = Cookies.get('client');
  const uid = Cookies.get('uid');

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/logs', {
      headers: {
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
    <div className='container'>
      {logs.map(log => (
        <LogItem key={log.id} log={log} /> 
      ))}
    </div>
  );
}
