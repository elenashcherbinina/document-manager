import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PaginationItem from './PaginationItem';
import { actions as documentsActions } from '../../store/slices/documentsSlice';

const Pagination = ({ data }) => {
  const currentPage = useSelector((state) => state.documents.currentPage);
  const pageCount = useSelector((state) => state.documents.pageCount);
  const dispatch = useDispatch();

  const handlePreviousClick = () => {
    dispatch(documentsActions.setCurrentPage(currentPage - 1));
  };
  const handleNextClick = () => {
    dispatch(documentsActions.setCurrentPage(currentPage + 1));
  };

  return (
    <nav className='col-md-12 text-center py-5' aria-label='pagination'>
      <ul className='pagination pagination-circle justify-content-center'>
        {currentPage !== 1 && (
          <li onClick={handlePreviousClick} className='page-item'>
            <button className='page-link prev' aria-label='previous'>
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'>Previous</span>
            </button>
          </li>
        )}
        <PaginationItem data={data} />
        {currentPage !== pageCount && (
          <li onClick={handleNextClick} className='page-item'>
            <button className='page-link next' aria-label='next'>
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'>Next</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
