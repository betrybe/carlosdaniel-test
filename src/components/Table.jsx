import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { Container } from './styles';
import { removeExpense } from '../actions';

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
          wallet.expenses.map((expense) => {
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{parseFloat(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency]?.name}</td>
                <td>{expense.exchangeRates[expense.currency]?.ask}</td>
                <td>{
                  (+expense.exchangeRates[expense.currency]?.ask)*expense.value
                }</td>
                <td>Real Brasileiro</td>
                <td>
                  <button>ED</button>
                  <button onClick={()=>{props.removeExpense(expense.id)}}>EX</button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) =>bindActionCreators({
  removeExpense
},dispatch
);


export default connect(mapStateToProps,mapDispatchToProps)(Table);
