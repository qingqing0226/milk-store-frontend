import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import { Milk } from './types/types';

function App() {
  const [milklist, setMilklist] = useState<Array<Milk>>([]);
  useEffect(() => {
    const getData = async () => {
      const results = await fetch('http://localhost:8080/api/milk', {mode: 'cors', headers: {'Content-Type': 'application/json'}});
      const data = await results.json();
      console.log(data);
      setMilklist(data);
    }

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>THE MILK STORE</h2>
      </header>
      <Container milkList={milklist} setMilklist={setMilklist} />
    </div>
  );
}

export default App;
