import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './src/common/PrivateRoute';
import Main from './src/main/Main';
import DetailItem from './src/details/DetailItem';
import Checkout from './src/checkout/Checkout';
import Cmp404 from './src/Cmp404/Cmp404.js';
import Login from './src/login/login';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : window.localStorage.getItem('logged') === "true"
    }
    this.setAuthenticated = this.setAuthenticated.bind(this);
  }
  setAuthenticated(isAuthenticated){
    if (isAuthenticated){
      window.localStorage.setItem('logged','true');
      this.setState({...this.state, isAuthenticated:true});
    } else {
      window.localStorage.removeItem('logged');
      this.setState({ ...this.state, isAuthenticated: false });
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/login"
            render={
              (props) => {
                return (<Login {...props}
                  isAuthenticated={this.state.isAuthenticated}
                  loginHandler={this.setAuthenticated}
                />)
              }
            }
          />
          <Switch>
            <PrivateRoute
              isAuthenticated={this.state.isAuthenticated}
              path="/" exact component={Main}
              logout={this.setAuthenticated}
            />
            <PrivateRoute isAuthenticated={this.state.isAuthenticated}
              path="/detail" exact component={DetailItem}
            />
            <PrivateRoute isAuthenticated={this.state.isAuthenticated}
              path="/checkout" exact component={Checkout}
            />
            <Route component={Cmp404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
