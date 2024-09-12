'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ProgressBar from '../../component/ProgressBar';
import Swal from 'sweetalert2';

export default function Step3() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue('newsletter', parsedData.newsletter);
    }
  }, [setValue]);

  const onSubmit = (data: any) => {
    const existingData = localStorage.getItem('formData');
    const parsedData = existingData ? JSON.parse(existingData) : {};
    localStorage.setItem('formData', JSON.stringify({ ...parsedData, ...data }));
    console.log("Final Form Data:", { ...parsedData, ...data });
    // localStorage.removeItem('formData');
    // router.push('/');
    Swal.fire({
        title: 'Success!',
        text: 'Your Registration have been saved successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        localStorage.removeItem('formData');
        router.push('/');
      });
  };
  const handleBack = () => {
    router.push('/multi-step-form/step2');
  };

  return (

    <>
    <ProgressBar step={3} />
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-bold mb-6">Preferences</h2>

      <div className="mb-4 flex items-center">
        <label>Receive Newsletter</label>
        <input
          {...register('newsletter')}
          type="checkbox"
          className="mr-2 ml-4"
        />
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
        Submit
      </button>
      </div>
    </form>
    </>
    
  );
}
