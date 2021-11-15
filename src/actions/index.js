// Coloque aqui suas actions
export const changeUserEmail = (description) => ({
  type: 'CHANGE_USER_EMAIL',
  payload: description,
});

export const changeUserPassword = (description) => ({
  type: 'CHANGE_USER_PASSWORD',
  payload: description,
});

export const AddNewExpense = (expense) => (dispatch, getState) => {
  const state = getState();
  expense.exchangeRates = state.wallet.currencies;

  dispatch({
    type: 'ADD_NEW_EXPENSE',
    payload: expense,
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
