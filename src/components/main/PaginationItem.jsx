import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as documentsActions } from '../../store/slices/documentsSlice';

const PAGE_SIZE = 7;

const PaginationItem = ({ data }) => {
  const currentPage = useSelector((state) => state.documents.currentPage);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / PAGE_SIZE); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    dispatch(documentsActions.setPageCount(pageNumbers.length));
  }, [dispatch, pageNumbers]);

  const handlePageChange = (page) => {
    dispatch(documentsActions.setCurrentPage(page));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        onClick={() => handlePageChange(number)}
        key={number}
        className={number === currentPage ? 'page-item active' : 'page-item'}
      >
        <button className='page-link'>{number}</button>
      </li>
    );
  });

  return renderPageNumbers;
};

export default PaginationItem;
