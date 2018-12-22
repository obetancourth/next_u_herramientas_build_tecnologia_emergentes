import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import * as request from 'superagent';

import PrivateRoute from './src/common/PrivateRoute';
import Main from './src/main/Main';
import DetailItem from './src/details/DetailItem';
import Checkout from './src/checkout/Checkout';
import Cmp404 from './src/Cmp404/Cmp404.js';
import Login from './src/login/login';
import Nav from './src/common/nav/Nav';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : window.localStorage.getItem('logged') === "true",
      prods : [],
      cart : [],
      search : '',
      viewItem: {},
      redirect:''
    }
    this.setAuthenticated = this.setAuthenticated.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
  }
  setAuthenticated(isAuthenticated){
    if (isAuthenticated){
      window.localStorage.setItem('logged','true');
      this.setState(
        { ...this.state, isAuthenticated: true },
        ()=>{this.loadProducts(); this.loadCart();}
      );
    } else {
      window.localStorage.removeItem('logged');
      this.setState({ ...this.state, isAuthenticated: false });
    }
  }
  searchHandler(e) {
    let { name, value } = e.currentTarget;
    this.setState({ ...this.state, [name]: value }, this.loadProducts);
  }
  componentDidMount() {
    if (this.state.isAuthenticated){
        this.loadProducts();
        this.loadCart();
    }
  }
  loadProducts() {
    let uri = ((/^\s*$/).test(this.state.search)) ? '/productos/all' : `/productos/search/${this.state.search}`;
    request
      .get(uri)
      .then((res) => {
        if (res.text === "Not Allowed") {
          this.setAuthenticated(false);
        }
        return this.setState({ ...this.state, prods: res.body, redirect: '' });
      });
  }
  loadCart = ()=>{
    let uri = '/cart/';
    request
      .get(uri)
      .then((res)=>{
        if(res.text === "Not Allowed") {
          this.setAuthenticated(false);
        }
        return this.setState({...this.state, cart: res.body});
      })
  }
  viewHandler(id, hnd) {
    let item = this.state.prods.find((prd, i)=>{
      return prd._id === id;
    });
    if(item){
      this.setState({ viewItem: item});
      hnd();
    }
  }
  addToCart(productID, cantidad) {
    let uri = '/cart/add';
    request
      .post(uri)
      .send({ 'id': productID, 'cantidad': cantidad })
      .then((res) => {
        this.setState({ ...this.state, cart: res.body });
      });
  }
  confirmCart = (hdl)=>{
    let uri = '/cart/confirm';
    request
      .post(uri)
      .send({})
      .then((res)=>{
        if(res.text === "ok"){
          this.loadProducts();
          this.loadCart();
          hdl(true);
        }else{
          hdl(false);
        }
      })
  }
  render() {
    let rd = (this.state.redirecTo && true)? (
      <Redirect to={this.state.redirect} />) : null;
    return (
      <Router>
        <section className="container">
            <Nav
              cart={this.state.cart}
              logout={this.setAuthenticated}
              isAuthenticated={this.state.isAuthenticated}
            ></Nav>
            <Switch>
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
              <PrivateRoute
                isAuthenticated={this.state.isAuthenticated}
                path="/"
                exact
                component={Main}
                addToCart={this.addToCart}
                searchHandler={this.searchHandler}
                viewHandler={this.viewHandler}
                {...this.state}
              />
              <PrivateRoute
                isAuthenticated={this.state.isAuthenticated}
                path="/detail"
                exact
                component={DetailItem}
                selectItem={this.state.viewItem}
                {...this.state.viewItem}
              />
              <PrivateRoute
                isAuthenticated={this.state.isAuthenticated}
                path="/checkout"
                exact
                component={Checkout}
                cart={this.state.cart}
                confirm={this.confirmCart}
              />
              <Route component={Cmp404} />
            </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
