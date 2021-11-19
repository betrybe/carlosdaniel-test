import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { removeExpense, editExpense } from '../actions';
import editIcon from '../assets/images/editIcon.svg';
import trashIcon from '../assets/images/trashIcon.svg';

import './Table.css';

const Table = ({ setEditable }) => {
  const { wallet } = useSelector((state) => ({
    wallet: state.wallet,
  }));
  const dispatch = useDispatch();
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
          wallet.expenses.map((expense, index) => {
            console.log(expense)
            return (
              (
                <tr key={`${expense.id}-${index}`}>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>
                    {`${Number(expense.value)}`}
                  </td>
                  <td>
                    {expense.exchangeRates[expense.currency]
                      .name}
                  </td>
                  <td>
                    {parseFloat(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)}
                  </td>
                  <td>
                    {
                      ((+expense.exchangeRates[expense.currency].ask) * expense.value)
                        .toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      className="edit"
                      type="button"
                      onClick={() => {
                        dispatch(editExpense(expense.id));
                        setEditable(true);
                      }}
                      data-testid="edit-btn"
                    >
                      <img src={editIcon} alt="Icon Edit" />
                    </button>
                    <button
                      className="remove"
                      type="button"
                      onClick={() => {
                        dispatch(removeExpense(wallet.expenses, expense.id))
                      }}
                      data-testid="delete-btn"
                    >
                      <img src={trashIcon} alt="Icon Remove" />
                    </button>
                  </td>
                </tr>
              )
            )
          })
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  setEditable: PropTypes.func.isRequired,
};

export default Table;
