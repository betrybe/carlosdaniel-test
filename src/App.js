import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const App = () => (
  <Switch>
    <Route path="/" component={ Login } exact />
    <Route path="/carteira" component={ Wallet } />
  </Switch>

);

export default App;
