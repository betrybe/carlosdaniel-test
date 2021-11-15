import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { searchCurrencies } from '../actions';
import Table from '../components/Table';

const Wallet = (props) => {
  // console.log(props);

  useEffect(() => {
    props.searchCurrencies();
  }, []);

  return (
    <div>
      <header>
        <h1>Trybe</h1>

        <p data-testid="email-field">
          Email:
          {props.user.email}
        </p>
        <p data-testid="total-field">Despesa Total: R$ 1000,00</p>

      </header>
      <main>
        <Form />
        <Table />
      </main>
    </div>
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
