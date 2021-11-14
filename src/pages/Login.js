import React from 'react';
import './Login.css';

// class Login extends React.Component {
//   render() {
//     return <div>Login</div>;
//   }
// }

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <h1>Trybe</h1>

        <form onSubmit={ handleSubmit }>
          <input
            type="email"
            placeholder="Digite seu email"
            testid="email-input"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
            minLength="6"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
