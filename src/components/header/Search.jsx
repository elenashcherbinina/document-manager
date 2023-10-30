import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as searchActions } from '../../store/slices/searchSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('input').trim();
    dispatch(searchActions.setInput(value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className='form-outline d-flex'>
      <input
        className='form-control rounded-pill px-4'
        type='text'
        placeholder='Поиск'
        name='input'
        aria-label='input'
        autoComplete='off'
      />
      <button className='btn text-dark border-0 rounded-pill ml-n5' type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </button>
    </form>
  );
};

export default Search;
