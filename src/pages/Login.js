import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Login.css';

import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { changeUserEmail, changeUserPassword } from '../actions/index';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.changeUserEmail(email);
    props.changeUserPassword(senha);

    history.push('/carteira');
  };

  useEffect(() => {
    const dontHasInEmail = -1;
    const minLength = 6;

    const userCanLogin = (userEmail, userSenha) => {
      if (userEmail === ''
      || userEmail.indexOf('@') === dontHasInEmail
      || userEmail.indexOf('.com') === dontHasInEmail
      || userSenha.length < minLength
      ) {
        return setButtonDisabled(true);
      }
      return setButtonDisabled(false);
    };
    userCanLogin(email, senha);
  }, [email, senha]);

  return (
    <main className="container">
      <div className="content">
        <h1>Trybe</h1>

        <form className="form-login" onSubmit={ handleSubmit }>
          <input
            type="email"
            placeholder="Digite seu email"
            data-testid="email-input"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
            minLength="6"
            value={ senha }
            onChange={ (event) => setSenha(event.target.value) }
            required
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

Login.propTypes = {
  changeUserEmail: PropTypes.func.isRequired,
  changeUserPassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
