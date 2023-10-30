import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import filterDocuments from './helpers/filterDocuments';
import { actions as documentsActions } from './store/slices/documentsSlice';

function App() {
  const documents = useSelector((state) => state.documents.documents);
  const params = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const filtred = filterDocuments(documents, params);
    dispatch(documentsActions.filter(filtred));
  }, [dispatch, documents, params]);

  return (
    <div className='container-fluid'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
