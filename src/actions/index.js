// Coloque aqui suas actions
// User Actions
export const changeUserEmail = (description) => ({
  type: 'CHANGE_USER_EMAIL',
  payload: description,
});

export const changeUserPassword = (description) => ({
  type: 'CHANGE_USER_PASSWORD',
  payload: description,
});

// Wallet Actions
export const getIdExpenses = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: 'INCREMENT_ID',
    payload: state.wallet.currentId,
  });
};

export const AddNewExpense = (form) => (dispatch, getState) => {
  const state = getState();

  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {

      // for (let letter in res) {
      //   console.log(res[letter].name.replace('/Real Brasileiro', ''));
      //   res[letter].name = res[letter].name.replace('/Real Brasileiro', '')
      // }

      const newState = {
        ...form, id: state.wallet.currentId, exchangeRates: res,
      };
      dispatch({
        type: 'ADD_NEW_EXPENSE',
        payload: newState,
      });
    }).then(() => dispatch(getIdExpenses()));
};

export const searchCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      const currencies = Object.keys(res).filter((code) => code !== 'USDT');
      dispatch({
        type: 'SEARCH_CURRENCIES',
        payload: currencies,
      });
    });
};

export const removeExpense = (list, id) => (dispatch, getState) => {
  const indexItem = list.findIndex((current) => current.id === id);
  const newList = [...list]

  newList.splice(indexItem, 1);

  console.log(newList)
  dispatch({
    type: 'REMOVE_EXPENSE',
    payload: newList,
  });
};

export const editExpense = (id) => (dispatch) => {
  dispatch({
    type: 'EDIT_EXPENSE',
    payload: id,
  });
};

export const saveEditExpense = (form) => (dispatch, getState) => {
  const state = getState();
  const { expenses, expenseIdEdit } = state.wallet;

  for (let i = 0; i < expenses.length; i += 1) {
    if (expenses[i].id === expenseIdEdit) {
      expenses[i] = form;
    }
  }
  dispatch({
    type: 'CHANGE_EXPENSES',
    payload: expenses,
  });
};
