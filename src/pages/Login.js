import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Login.css';

import { useHistory } from 'react-router';
import { changeUserEmail, changeUserPassword } from '../actions/index';

// class Login extends React.Component {
//   render() {
//     return <div>Login</div>;
//   }
// }

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.changeUserEmail(email);
    props.changeUserPassword(senha);

    history.push('/carteira');
  };

  useEffect(() => {
    const userOK = (userEmail, usersenha) => {
      if (userEmail === ''
      || userEmail.indexOf('@') === -1
      || userEmail.indexOf('.') === -1
      ) {
        return console.log(false);
      }
      return console.log(true);
    };
    userOK(email, senha);
  }, [email, senha]);

  return (
    <main>
      <div className="container">
        <h1>Trybe</h1>

        <form onSubmit={ handleSubmit }>
          <input
            type="email"
            placeholder="Digite seu email"
            testid="email-input"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
            minLength="6"
            value={ senha }
            onChange={ (event) => setSenha(event.target.value) }
          />
          <button
            className="disabled"
            type="submit"
            disabled={ buttonDisabled }
          >
            Entrar

          </button>
        </form>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  user: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeUserEmail,
  changeUserPassword,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
