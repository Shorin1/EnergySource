import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Contents from './components/Contents/index';
import Solar from './components/Solar';
import Air from './components/Air';
import Hydro from './components/Hydro';
import Biomass from './components/Biomass';
import { HashRouter, Route } from 'react-router-dom';
import Tasks from './components/Tasks';

function App(props) {
  return (

    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/" component={Contents} />
        <Route path="/solar" component={Solar} />
        <Route path="/air" component={Air} />
        <Route path="/hydro" component={Hydro} />
        <Route path="/biomass" component={Biomass} />
        <Route path="/tasks" component={Tasks} />
      </HashRouter>
    </div>

  );
}

export default App;
