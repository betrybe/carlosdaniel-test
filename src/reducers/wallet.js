// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  form: {
    id: null,
    value: 0,
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: [],
    isEditable: false,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
  case 'REMOVE_EXPENSE':
    return {
      ...state, expenses: action.payload,
    };
  case 'EDIT_EXPENSE':
    return {
      ...state, form: action.payload,
    };
  case 'SAVE_EDITED_EXPENSE':
    return {
      ...state, expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
