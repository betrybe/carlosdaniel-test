import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddNewExpense, handleForm, saveEditExpense } from '../actions/index';

import './Form.css';

const FormEdit = (props) => {
  const FormEdit = (event) => {
    event.preventDefault();

    props.saveEditExpense();
  };

  return (
    <form
      onSubmit={ FormEdit }
      className="edit"
    >

      <label htmlFor="value">
        valor:
        <input
          type="number"
          id="value"
          value={ props.wallet.form.value }
          onChange={ props.handleForm }
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ props.wallet.form.description }
          onChange={ props.handleForm }
        />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ props.wallet.form.currency }
          onChange={ props.handleForm }
        >
          <option value="">Selecione uma Moeda</option>
          {
            Object.entries(props.wallet.currencies).map((moeda, index) => (
              <option key={ index } value={ moeda[0] }>{moeda[0]}</option>
            ))
          }
        </select>
      </label>

      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={ props.wallet.form.method }
          onChange={ props.handleForm }

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
          value={ props.wallet.form.tag }
          onChange={ props.handleForm }

        >
          <option value="">Selecione uma Tag</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>

      <button type="submit">Editar despesa</button>
    </form>

  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  AddNewExpense,
  handleForm,
  saveEditExpense,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
