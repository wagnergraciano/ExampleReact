import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import NavBar from './ui/NavBar';
import Home from './container/Home';
import Release from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';

function App() {
  const logo = 'Inicio'
  return (
    <div className="container">
      <NavBar logo={logo}/>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/releases" component={Release} />
        <Route path="/backlog" component={Backlog} />
        <Route path="/sprints" component={Sprints} />
      </Switch>
    </div>
  );
}

export default App;
