import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Contents from './components/Contents/index';
import Solar from './components/Solar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Contents /> */}
      <Solar />
    </div>
  );
}

export default App;
