// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_NEW_EXPENSE':
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  case 'SEARCH_CURRENCIES':
    return {
      ...state, currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
