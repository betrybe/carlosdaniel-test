import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import { searchCurrencies } from '../actions';

const Wallet = (props) => {
  console.log(props);

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
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Descrição</td>
              <td>Tag</td>
              <td>Método de pagamento</td>
              <td>Valor</td>
              <td>Moeda</td>
              <td>Câmbio utilizado</td>
              <td>Valor convertido</td>
              <td>Moeda de conversão</td>
              <td>Editar/Excluir</td>
            </tr>
          </tbody>
        </table>
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
