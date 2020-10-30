import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/index';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [pizzas, setPizzas] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => setPizzas(data.pizzas));
  }, []);
  console.log(pizzas);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
