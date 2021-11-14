// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_USER_EMAIL':
    return {
      ...state, email: action.payload,
    };
  case 'CHANGE_USER_PASSWORD':
    return {
      ...state, senha: action.payload,
    };
  default:
    return state;
  }
};

export default user;
