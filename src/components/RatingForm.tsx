import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import api from '../api/themoviedb';

interface FormValues {
  value: string;
}

interface Props {
  movieId: number;
}

export const RatingForm = ({ movieId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  function handleSubmitRating(data: FormValues) {
    api
      .post(`/movie/${movieId}/rating`, data, {
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      })
      .then((response) => {
        response.data.success ? toast.success('Success') : toast.error('Error');
        reset();
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitRating)}>
        <input
          {...register('value', { pattern: /^(10(\.0{1})?|[0-9](\.\d{1})?)$/ })}
          className='rounded border border-slate-400 bg-slate-200'
        />
        <input type='submit' className='ml-2 cursor-pointer rounded bg-slate-400 px-1 text-white' />
      </form>
      {errors.value && <p className='text-red-700'>Wrong format.</p>}
    </>
  );
};
