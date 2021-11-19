// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentId: 0,
  expenseIdEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CLEAR_FORM':
      return {
        ...state, form: INITIAL_STATE.form,
      };
    case 'INCREMENT_ID':
      return {
        ...state, currentId: action.payload + 1,
      };
    case 'CHANGE_FORM':
      return {
        ...state, form: action.payload,
      };
    case 'ADD_NEW_EXPENSE':
      return {
        ...state, expenses: [...state.expenses, action.payload],
      };
    case 'SEARCH_CURRENCIES':
      return {
        ...state, currencies: action.payload,
      };
    case 'CHANGE_EXPENSES':
      return {
        ...state, expenses: action.payload,
      };
    case 'EDIT_EXPENSE':
      return {
        ...state, expenseIdEdit: action.payload,
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state, expenses: action.payload,
      };
    default:
      return state;
  }
};

export default wallet;
