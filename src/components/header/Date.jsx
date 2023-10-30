import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions as searchActions } from '../../store/slices/searchSlice';

const Date = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    dispatch(searchActions.setDate({ from, to }));
  }, [from, to, dispatch]);

  return (
    <form className='form-outline d-flex justify-content-center'>
      <div className='d-inline-flex align-items-center'>
        <label className='form-label px-2' htmlFor='createdAt'>
          c
        </label>
        <input
          type='date'
          className='form-control'
          id='createdAt'
          name='createdAt'
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className='d-inline-flex align-items-center px-2'>
        <label className='form-label px-2' htmlFor='finishedAt'>
          по
        </label>
        <input
          type='date'
          className='form-control'
          id='finishedAt'
          name='finishedAt'
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Date;
