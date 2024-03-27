import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker"; 

export default function DatePicker() {
  const Today = new Date();
  const [value, setValue] = useState(Today);
  const handleChange = (selectedDate) => {
    setValue(selectedDate);
  };

  return (
    <div className="">
      <Datepicker
        value={value}
        asSingle={true}
        useRange={false}
        onChange={handleChange}
        inputClassName="w-25 px-3 py-2.5 rounded-md border-2 focus-visible:outline-none focus:border-blue-500"
        
      />
    </div>
  );
};
