import React from 'react';

import Search from './Search';
import Date from './Date';
import Status from './Status';

const Header = () => {
  return (
    <header className='container-xl mt-2 border-bottom'>
      <h1 className='font-weight-normal'>
        <a href='/' className='text-decoration-none text-dark'>
          Таблица
        </a>
      </h1>
      <div className='row justify-content-center justify-content-md-start'>
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 mb-3'>
          <Search />
        </div>
        <div className='col-12 col-sm-8 col-md-6 col-lg-5 mb-3'>
          <Date />
        </div>
        <div className='col-6 col-sm-4 col-md-3 col-lg-2 mb-3'>
          <Status />
        </div>
      </div>
    </header>
  );
};

export default Header;
