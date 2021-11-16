import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AddNewExpense, saveEditExpense } from '../actions/index';

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

  const [form, setForm] = useState(editable
    ? wallet.expenses[wallet.expenseIdEdit]
    : initialForm);

  useEffect(() => {
    if (editable) {
      setForm(wallet.expenses[wallet.expenseIdEdit]);
    } else {
      setForm(initialForm);
    }
  }, [editable, wallet.expenseIdEdit]);

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

  const handleButton = () => {
    if (editable === true) {
      return (
        <button type="submit"> Editar despesa </button>
      );
    }
    return (
      <button type="submit">Adicionar despesa</button>
    );
  };

  return (
    <form
      onSubmit={ editable === true ? FormEdit : FormSubmit }
      className={ editable === true ? 'edit' : 'create' }
    >
      <label htmlFor="value">
        valor:
        <input
          type="number"
          id="value"
          value={ form.value }
          onChange={ handleForm }
          data-testid="value-input"
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ form.description }
          onChange={ handleForm }
          data-testid="description-input"
        />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ form.currency }
          onChange={ handleForm }
          data-testid="currency-input"
        >
          <option value="">Selecione uma Moeda</option>
          {
            Object.entries(wallet.currencies).map((moeda, index) => (
              <option key={ index } value={ moeda[0] }>{moeda[0]}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={ form.method }
          onChange={ handleForm }
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
          value={ form.tag }
          onChange={ handleForm }
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
      {
        handleButton()
      }
    </form>

  );
};

Form.propTypes = {
  editable: PropTypes.bool.isRequired,
  setEditable: PropTypes.func.isRequired,
};

export default Form;
