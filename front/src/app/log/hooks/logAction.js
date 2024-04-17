import axios from 'axios';
import Cookies from 'js-cookie';

export async function logAction(formData) {
  const date = formData.get("date");
  const name = formData.get("name");
  const note = formData.get("note");
  console.log(date, name, note);

  const accessToken = Cookies.get('access-token');
  const client = Cookies.get('client');
  const uid = Cookies.get('uid');

  try {
    const response = await axios.post('${process.env.NEXT_PUBLIC_API_URL}/api/v1/logs', {
      log: {
        date,
        name,
        note
      }
    }, {
      headers: {
        'access-token': accessToken,
        'client': client,
        'uid': uid
      }
    });

    console.log('API response:', response.data);
  } catch (error) {
    console.error('API request failed:', error);
  }
}