import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { handleForm, searchCurrencies } from '../actions';
import Form from '../components/Form';
import WalletTable from '../components/WalletTable';

import './Wallet.css';
import FormEdit from '../components/FormEdit';

const Wallet = ({ wallet, user, searchCurrency }) => {
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    searchCurrency();
  }, []);

  const totalExpenses = () => {
    let total = 0;

    wallet.expenses.map((expense) => {
      total += expense.exchangeRates[expense.currency].ask * expense.value;
      return total;
    });

    return total.toFixed(2);
  };

  return (
    <>
      <header>
        <h1>Trybe</h1>

        <div className="user-info">
          <p>
            Email:&nbsp;
            <span data-testid="email-field">
              {user.email}
            </span>
          </p>

          <p>
            Despesa Total: R$&nbsp;
            <span data-testid="total-field">
              {totalExpenses()}
            </span>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>

      <main>
        <Form editable={ [editable, setEditable] } />
        <WalletTable editable={ [editable, setEditable] } />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { searchCurrency: searchCurrencies }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
