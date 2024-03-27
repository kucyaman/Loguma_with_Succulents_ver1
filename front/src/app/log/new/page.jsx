"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DatePicker from '@/app/log/datepicker/Datepicker' 

export default function LogForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const onSubmit = data => {
    axios.post('YOUR_RAILS_API_ENDPOINT', data)
      .then(response => {
        // 送信成功時の処理
        console.log(response.data);
      })
      .catch(error => {
        // エラー処理
        console.error(error);
      });
  };

  // Datepickerからのデータをreact-hook-formに統合
  const handleDateChange = (selectedDate) => {
    setValue('date', selectedDate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container space-y-4">
      <div>
        <label htmlFor="date" className="block mb-2">Date</label>
        <DatePicker handleChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="action" className="block mb-2">Action</label>
        <input
          type="text"
          {...register('action', { required: true })}
          className="w-full px-3 py-2.5 rounded-md border-2 focus-visible:outline-none focus:border-blue-500"
        />
        {errors.action && <p className="text-red-500">Action is required.</p>}
      </div>
      <div>
        <label htmlFor="note" className="block mb-2">Note</label>
        <textarea
          {...register('note')}
          className="w-full px-3 py-2.5 rounded-md border-2 focus-visible:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="px-4 py-2 rounded-md bg-blue-500 text-white">Submit</button>
    </form>
  );
}
