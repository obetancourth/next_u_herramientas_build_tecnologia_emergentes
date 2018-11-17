import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './src/common/PrivateRoute';
import Main from './src/main/Main';
import DetailItem from './src/details/DetailItem';
import Checkout from './src/checkout/Checkout';

import Login from './src/login/login';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : true
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/" exact component={Main} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/detail" exact component={DetailItem} />
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/checkout" exact component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default App;
