import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddNewExpense } from '../actions/index';

const Form = (props) => {
  const [formData, setFormData] = useState({
    value: 0,
    description: '',
    currency: '',
    payment_method: '',
    tag: '',
  });

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  console.log(props);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    props.AddNewExpense(formData);
  };

  return (
    <form onSubmit={ FormSubmit }>
      <label htmlFor="value">
        valor:
        <input
          type="number"
          id="value"
          value={ formData.value }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ formData.description }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          value={ formData.currency }
          onChange={ handleChange }
        >
          {
            props.moedas
        && props.moedas.map((moeda, index) => (
          <option
            key={ `${moeda}-${index}` }
            value={ moeda }
          >
            {moeda}
          </option>
        ))
          }
        </select>
      </label>

      <label htmlFor="PaymentMethod">
        Método de pagamento:
        <select
          id="payment_method"
          value={ formData.payment_method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="CartaoCredito">Cartão de crédito</option>
          <option value="CartaoDebito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          value={ formData.tag }
          onChange={ handleChange }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>

      <button type="submit">Enviar</button>
    </form>

  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  AddNewExpense,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
