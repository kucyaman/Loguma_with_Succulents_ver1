// import { useState } from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
// import { useForm, Controller } from 'react-hook-form';

// function CustomDatePicker({ onChange, value, className }) {
//   return (
//     <div>
//       <Datepicker
//         value={value}
//         asSingle={true}
//         useRange={false}
//         onChange={onChange}
//         inputClassName="w-25 px-3 py-2.5 rounded-md border-2 focus-visible:outline-none focus:border-blue-500"
//       />
//     </div>
//   );
// }

// export default function Form() {
//   const { control, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         control={control}
//         name="date"
//         render={({ field: { onChange, value } }) => (
//           <CustomDatePicker onChange={onChange} value={value} />
//         )}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
