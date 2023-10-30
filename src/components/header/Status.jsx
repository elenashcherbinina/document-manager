import React from 'react';
import { useDispatch } from 'react-redux';

import { actions as searchActions } from '../../store/slices/searchSlice';

const Status = () => {
  const dispatch = useDispatch();

  const handleSelectStatus = (e) => {
    dispatch(searchActions.setStatus(e.target.value));
  };

  return (
    <div className='form-outline'>
      <select
        id='status'
        name='status'
        className='form-control'
        style={{ cursor: 'pointer' }}
        aria-label='select-category'
        onChange={handleSelectStatus}
      >
        <option defaultValue>Статус</option>
        <option value='all'>Все</option>
        <option value='active'>Активный</option>
        <option value='canceled'>Отмененный</option>
        <option value='finished'>Завершенный</option>
      </select>
    </div>
  );
};

export default Status;
