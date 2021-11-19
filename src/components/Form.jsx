import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AddNewExpense, saveEditExpense, searchCurrencies } from '../actions/index';

import './Form.css';

const Form = ({ editable, setEditable }) => {
  const dispatch = useDispatch();
  const { wallet } = useSelector((state) => ({
    wallet: state.wallet,
  }));
  const initialForm = {
    id: null,
    value: 0,
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: [],
  };

  useEffect(() => {
    dispatch(searchCurrencies());
  }, [dispatch]);

  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (editable) {
      wallet.expenses.map((expense, index) => {
        if (expense.id === wallet.expenseIdEdit) {
          return setForm(wallet.expenses[index]);
        }
        return '';
      });
    } else {
      setForm(initialForm);
    }
  }, [editable, wallet.expenseIdEdit, wallet.expenses]);

  const handleForm = (event) => {
    const { id, value } = event.target;
    setForm((state) => ({ ...state, [id]: value }));
  };

  const FormSubmit = (event) => {
    event.preventDefault();

    dispatch(AddNewExpense(form));
    setForm(initialForm);
  };
  const FormEdit = (event) => {
    event.preventDefault();

    dispatch(saveEditExpense(form));
    setForm(initialForm);
    setEditable(false);
  };

  return (
    <form
      onSubmit={editable ? FormEdit : FormSubmit}
      className={editable ? 'edit' : 'create'}
    >
      <label htmlFor="value">
        valor:
        <input
          type="number"
          id="value"
          value={form.value}
          onChange={handleForm}
          data-testid="value-input"
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={form.description}
          onChange={handleForm}
          data-testid="description-input"
        />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={form.currency}
          onChange={handleForm}
          data-testid="currency-input"
        >
          {
            wallet.currencies.map((moeda, index) => (
              <option key={index} value={moeda}>{moeda}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={form.method}
          onChange={handleForm}
          data-testid="method-input"
        >
          <option value="">Selecione um Método de pagamento</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          value={form.tag}
          onChange={handleForm}
          data-testid="tag-input"
        >
          <option value="">Selecione uma Tag</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <button type="submit">
        {!editable ? 'Adicionar despesa' : 'Editar despesas'}
      </button>
    </form>

  );
};

Form.propTypes = {
  editable: PropTypes.bool.isRequired,
  setEditable: PropTypes.func.isRequired,
};

export default Form;
