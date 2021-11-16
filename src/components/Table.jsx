import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { Container } from './styles';
import { removeExpense, editExpense } from '../actions';

import './Table.css';

const Table = (props) => {
  const { wallet } = props;
  // console.log(props)
  return (
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
        {
          wallet.expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{parseFloat(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency]?.name}</td>
              <td>{expense.exchangeRates[expense.currency]?.ask}</td>
              <td>
                {
                  (+expense.exchangeRates[expense.currency]?.ask) * expense.value
                }
              </td>
              <td>Real Brasileiro</td>
              <td>
                <button className="edit" onClick={ () => { props.editExpense(expense.id); } }>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={ 2 }
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button className="remove" onClick={ () => { props.removeExpense(expense.id); } }>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeExpense,
  editExpense,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
