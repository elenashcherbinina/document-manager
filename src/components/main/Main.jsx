import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import Pagination from './Pagination';

const Main = () => {
  const data = useSelector((state) => state.documents.filtred);

  return (
    <main className='container-xl mt-3'>
      <Table data={data} />
      <Pagination data={data} />
    </main>
  );
};

export default Main;
