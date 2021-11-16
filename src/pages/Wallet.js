import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import Table from '../components/Table';
import { searchCurrencies } from '../actions';

import './Wallet.css';

const Wallet = (props) => {
  useEffect(() => {
    props.searchCurrencies();
  }, []);

  return (
    <>
      <header>
        <h1>Trybe</h1>

        <div className="user-info">
          <p data-testid="email-field">
            {` Email: ${props.user.email}`}
          </p>
          <p data-testid="total-field">Despesa Total: R$ 1000,00</p>
        </div>
      </header>

      <main>
        <Form />
        <Table />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { searchCurrencies }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
