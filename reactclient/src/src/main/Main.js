import React, { Component } from 'react';

import Details from '../details/Detail';

import './Main.css';

export default class Main extends Component{
  render(){
    return (
      <section className="container">
        <Details
          logout={this.props.logout}
          prods={this.props.prods}
          search={this.props.search}
          add={this.props.addToCart}
          searchHandler={this.props.searchHandler}
          viewHandler={this.props.viewHandler}
        >
        </Details>
      </section>
    );
  }
}
