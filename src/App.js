import React, { useEffect } from "react";
import axios from "axios";
// import store from './redux/store.js';
import { useDispatch } from "react-redux";
import { setPizzas } from './redux/actions/pizzas.js'

import { Route, Routes } from "react-router-dom";
import { Header } from './components';
import { Home, Cart } from './pages'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="wrapper">
    <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
       </Routes>
    </div>
      </div>
  )
}

export default App;