'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ProgressBar from '../../component/ProgressBar';

interface FormData {
  firstName: string;
  lastName: string;
}

export default function Step1() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>(); 
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData: FormData = JSON.parse(savedData); 
      setValue('firstName', parsedData.firstName);
      setValue('lastName', parsedData.lastName);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    const existingData = localStorage.getItem('formData');
    const parsedData = existingData ? JSON.parse(existingData) : {};
    localStorage.setItem('formData', JSON.stringify({ ...parsedData, ...data }));
    router.push('/multi-step-form/step2');
  };

  return (
    <>
      <ProgressBar step={1} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

        <div className="mb-6">
          <label className="text-lg font-semibold">First Name</label>
          <input
            {...register('firstName', { required: 'First Name is required' })}
            className="w-full p-2 border rounded mt-2"
            placeholder="Enter your first name"
            type="text"
          />
          {errors.firstName && (
            <p className="text-red-500 bg-rose-100 text-sm font-medium mt-1 p-2">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="text-lg font-semibold">Last Name</label>
          <input
            {...register('lastName', { required: 'Last Name is required' })}
            className="w-full p-2 border rounded mt-2"
            placeholder="Enter your last name"
            type="text"
          />
          {errors.lastName && (
            <p className="text-red-500 bg-rose-100 text-sm font-medium mt-1 p-2">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-700 w-max px-[50px] py-[10px] text-[20px] font-semibold float-right text-white rounded"
        >
          Next
        </button>
      </form>
    </>
  );
}
