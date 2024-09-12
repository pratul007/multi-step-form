'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ProgressBar from '../../component/ProgressBar';

export default function Step2() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue('email', parsedData.email);
      setValue('password', parsedData.password);
    }
  }, [setValue]);

  const onSubmit = (data: any) => {
    const existingData = localStorage.getItem('formData');
    const parsedData = existingData ? JSON.parse(existingData) : {};
    localStorage.setItem('formData', JSON.stringify({ ...parsedData, ...data }));
    router.push('/multi-step-form/step3');
  };
  const handleBack = () => {
    router.push('/multi-step-form/step1');
  };

  return (
    <>
    <ProgressBar step={2} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-bold mb-6">Account Details</h2>

      <div className="mb-6">
        <label className='text-lg font-semibold'>Email</label>
        <input
          {...register('email', { required: 'Email is required' })}
          className="w-full p-2 border rounded mt-2" placeholder='Enter Email'  type="email"
        />
        {errors.email && <p className="text-red-500 bg-rose-100 text-sm font-medium mt-1 p-2">{errors.email.message as string}</p>}
      </div>

      <div className="mb-6">
        <label className='text-lg font-semibold'>Password</label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          className="w-full p-2 border rounded mt-2" placeholder="Enter Password"
        />
        {errors.password && <p className="text-red-500 bg-rose-100 text-sm font-medium mt-1 p-2">{errors.password.message as string}</p>}
      </div>

      <div className="flex justify-end">


      <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 w-max px-[50px] py-[10px] text-[20px] font-semibold float-right text-white rounded mr-2 "
          >
            Back
          </button>

      <button type="submit" className="bg-blue-700 w-max px-[50px] py-[10px] text-[20px] font-semibold float-right text-white rounded">
        Next
      </button>

      </div>
    </form>
    </>
   
  );
}
