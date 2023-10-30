import React from 'react';
import { useSelector } from 'react-redux';

import { parseDate } from '../../helpers/parseDate';
import paginate from '../../helpers/paginate';

const PAGE_SIZE = 7;

const Table = ({ data }) => {
  const currentPage = useSelector((state) => state.documents.currentPage);
  const paginatedData = paginate(data, currentPage, PAGE_SIZE);

  return (
    <div className='table-responsive'>
      <table className='table table-hover'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>Название</th>
            <th scope='col'>Описание</th>
            <th scope='col'>Пользователь</th>
            <th scope='col'>Дата создания</th>
            <th scope='col'>Дата исполнения</th>
            <th scope='col'>Статус</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 &&
            paginatedData.map((el) => (
              <tr key={el.id}>
                <td>{el.title}</td>
                <td className='text-truncate'>{el.body}</td>
                <td>{el.user}</td>
                <td>{parseDate(el.createdAt)}</td>
                <td>{el.finishedAt ? parseDate(el.finishedAt) : '-'}</td>
                <td data-label='Статус'>{el.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
