import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/index';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
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

// const mapStateToProps = (state) => ({
//   pizzas: state.pizzas.pizzas,
// });

// const mapDispatchToProps = (dispatch) => ({
//   savePizza: (items) => dispatch(setPizzas(items)),
// });

export default App;
