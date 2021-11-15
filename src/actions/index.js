// Coloque aqui suas actions
export const changeUserEmail = (description) => ({
  type: 'CHANGE_USER_EMAIL',
  payload: description,
});

export const changeUserPassword = (description) => ({
  type: 'CHANGE_USER_PASSWORD',
  payload: description,
});

export const AddNewExpense = (expense) => ({
  type: 'ADD_NEW_EXPENSE',
  payload: expense,
});
