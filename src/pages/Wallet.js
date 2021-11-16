import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';
import { searchCurrencies } from '../actions';

const Wallet = () => {
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCurrencies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Form editable={ editable } setEditable={ setEditable } />
        <Table setEditable={ setEditable } />
      </main>
    </>
  );
};

export default Wallet;
