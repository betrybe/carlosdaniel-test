import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { AddNewExpense, handleForm, saveEditExpense } from '../actions/index';

import './Form.css';

const Form = ({ wallet, handleForm, AddNewExpense,saveEditExpense, editable }) => {
  const FormSubmit = (event) => {
    event.preventDefault();

    AddNewExpense();
  };
  const FormEdit = (event) => {
    event.preventDefault();

    saveEditExpense();
    editable[1](false)
  };
  console.log(editable)
  const handleButton =()=>{
    if(editable[0] === true){
      return (
        <button type="submit"> Editar despesa </button>
      )
    }else{
      return (
        <button type="submit">Adicionar despesa</button>
      )
    }
  }

  return (
    <form
      onSubmit={ editable[0] === true ? FormEdit : FormSubmit }
      className={ editable[0] === true ? "edit" : "create" }
    >
      <label htmlFor="value">
        valor:
        <input
          type="number"
          id="value"
          value={ wallet.form?.value }
          onChange={ handleForm }
          data-testid="value-input"
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ wallet.form?.description }
          onChange={ handleForm }
          data-testid="description-input"
        />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ wallet.form?.currency }
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
          value={ wallet.form?.method }
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
          value={ wallet.form?.tag }
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

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  AddNewExpense,
  handleForm,
  saveEditExpense,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);

