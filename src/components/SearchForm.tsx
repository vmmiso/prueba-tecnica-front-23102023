import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface Props {
  query: string;
  autoFocus?: boolean;
}

interface FormValues {
  query: string;
}

export const SearchForm = ({ query, autoFocus = false }: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  function handleSubmitRating(data: FormValues) {
    navigate({
      pathname: '/search',
      search: `?query=${data.query}&page=1`,
    });
  }

  useEffect(() => {
    setValue('query', query);
  }, [query, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitRating)}>
        <input
          autoFocus={autoFocus}
          {...register('query', { required: true })}
          className='rounded border border-slate-400 bg-slate-200'
        />
        <input type='submit' className='ml-2 cursor-pointer rounded bg-slate-400 px-1 text-white' />
      </form>
      {errors.query && <p className='text-red-700'>Data required.</p>}
    </>
  );
};
