import React, { Component } from 'react';
import * as request from 'superagent';

import Nav from '../common/nav/Nav';
import Details from '../details/Detail';

import './Main.css';

export default class Main extends Component{
  constructor(){
    super();
    this.state = {
      prods: [],
      cart: [],
      search: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  searchHandler(e) {
    let { name, value } = e.currentTarget;
    this.setState({ ...this.state, [name]: value }, this.loadProducts);
  }
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts() {
    let uri = ((/^\s*$/).test(this.state.search)) ? '/productos/all' : `/productos/search/${this.state.search}`;
    request
      .get(uri)
      .then((res) => {
        if (res.text === "Not Allowed") {

        }
        return this.setState({ ...this.state, prods: res.body, redirect: '' });
      });
  }
  addToCart(productID, cantidad) {
    let uri = '/cart/add';
    request
      .post(uri)
      .send({ 'id': productID, 'cantidad': cantidad })
      .then((res) => {
        this.setState({ ...this.state, cart: res.body });
        // console.log(res);
      });
  }
  render(){
    return (
      <section className="container">
        <Nav
          logout={this.props.logout}
          cart={this.state.cart}>
        </Nav>
        <Details
          logout={this.props.logout}
          prods={this.state.prods}
          search={this.state.search}
          add={this.addToCart}
          searchHandler={this.searchHandler}
        >
        </Details>
      </section>
    );
  }
}
