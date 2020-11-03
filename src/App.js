import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import { setPizzas } from './redux/actions/pizzas';
import { Header } from './components/index';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const dispatch = useDispatch();

  window.test = () => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPizzas(data.pizzas));
      });
  };
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPizzas(data.pizzas));
      });
  }, [dispatch]);

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
