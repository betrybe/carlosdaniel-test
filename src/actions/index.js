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
export const handleForm = (event) => (dispatch, getState) => {
  const { id, value } = event.target;
  const state = getState();
  const newState = { ...state.wallet.form, [id]: value };

  dispatch({
    type: 'CHANGE_FORM',
    payload: newState,
  });
};

export const AddNewExpense = () => (dispatch, getState) => {
  const state = getState();

  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      delete res.USDT;
      delete res.DOGE;
      const newState = {
        ...state.wallet.form, id: state.wallet.expenses.length, exchangeRates: res,
      };
      dispatch({
        type: 'ADD_NEW_EXPENSE',
        payload: newState,
      });
    });
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
  console.log(state.wallet.expenses);
  const newArray = state.wallet.expenses.filter((expense) => expense.id !== id);
  console.log(newArray);

  dispatch({
    type: 'REMOVE_EXPENSE',
    payload: newArray,
  });
};

export const editExpense = (id) => (dispatch, getState) => {
  const state = getState();

  const newEspense = { ...state.wallet.expenses[id], isEditable: true };

  dispatch({
    type: 'EDIT_EXPENSE',
    payload: newEspense,
  });
};

export const saveEditExpense = () => (dispatch, getState) => {
  const state = getState();
  const { form, expenses } = state.wallet;

  expenses[form.id] = form;

  dispatch({
    type: 'SAVE_EDITED_EXPENSE',
    payload: expenses,
  });
};
