import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import { setPizzas } from './redux/actions/pizzas';
import { Header } from './components/index';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App({ pizzas, setPizzas }) {
  // const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={pizzas} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pizzas: state.pizzas.pizzas,
});

// const mapDispatchToProps = (dispatch) => ({
//   savePizza: (items) => dispatch(setPizzas(items)),
// });

export default connect(mapStateToProps, { setPizzas })(App);
