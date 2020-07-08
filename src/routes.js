import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PreCadastro from './pages/PreCadastro';
import Dashboard from './pages/Dashboard';




export default function Routes() {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/PreCadastro" component={PreCadastro} />
        <Route path="/Register" component={Register} />
        <Route path="/Dashboard" component={Dashboard} />

      </Switch>

    </BrowserRouter>

  );
  }