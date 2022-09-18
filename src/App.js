import React from "react";
import axios from "axios";
// import store from './redux/store.js';
import { connect } from "react-redux";
import { setPizzas as setPizzasAction} from './redux/actions/pizzas.js'

import { Route, Routes } from "react-router-dom";

import { Header } from './components';
import { Home, Cart } from './pages'

// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas);
//     })
//   },[]);

//   return (
//   <div className="wrapper">
//     <Header/>
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home items={pizzas}/>} exact/>
//           <Route path="/cart" element={<Cart/>} exact/>
//         </Routes>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
     <Header/>
       <div className="content">
         <Routes>
           <Route path="/" element={<Home items={this.props.items}/>} exact/>
           <Route path="/cart" element={<Cart/>} exact/>
        </Routes>
     </div>
       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);