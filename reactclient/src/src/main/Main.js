import React, { Component } from 'react';
import Nav from '../common/nav/Nav';
import Details from '../details/Detail';

import './Main.css';

export default class Main extends Component{
  render(){
    return (
      <section class="container">
        <Nav></Nav>
        <Details></Details>
      </section>
    );
  }
}
