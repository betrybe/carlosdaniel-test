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

export const clearForm = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_FORM',
  });
};

export const AddNewExpense = (form) => (dispatch, getState) => {
  const state = getState();

  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      delete res.USDT;
      delete res.DOGE;
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
      delete res.USDT;
      delete res.DOGE;

      dispatch({
        type: 'SEARCH_CURRENCIES',
        payload: res,
      });
    });
};

export const removeExpense = (id) => (dispatch, getState) => {
  const state = getState();
  const newArray = state.wallet.expenses.filter((expense) => expense.id !== id);

  dispatch({
    type: 'CHANGE_EXPENSES',
    payload: newArray,
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
