import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Milk } from './types/types';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>THE MILK STORE</h2>
      </header>
      <Container />
    </div>
  );
}

export default App;
