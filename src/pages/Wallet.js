import React, { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

const Wallet = () => {
  const [editable, setEditable] = useState(false);
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
