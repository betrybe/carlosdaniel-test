import React from 'react';
import { useSelector } from 'react-redux';

import './Header.css';

const Header = () => {
  const { user, wallet } = useSelector((state) => ({
    user: state.user,
    wallet: state.wallet,
  }));

  const totalExpenses = () => {
    let total = 0;

    wallet.expenses.map((expense) => {
      total += expense.exchangeRates[expense.currency].ask * expense.value;
      return total;
    });

    return total.toFixed(2);
  };

  return (
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

  );
};

export default Header;
