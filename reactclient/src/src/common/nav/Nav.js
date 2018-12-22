import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render(){
    if (!this.props.isAuthenticated){
      return null;
    }
let cartItems = (this.props.cart.length > 0)?(<span className="bubble">{this.props.cart.length}</span>):null;
    return (
      <nav>
        <h1>La Bodega</h1>
        <ul>
          <li><Link to="/"><MaterialIcon icon="dashboard" /></Link></li>
          <li><Link to="/checkout"><MaterialIcon icon="shopping_cart" /> {cartItems} </Link></li>
          <li><Link to="/"><MaterialIcon icon="inbox"/></Link></li>
          <li><button onClick={(e)=>{this.props.logout(false);}}><MaterialIcon icon="exit_to_app"/></button></li>
        </ul>
      </nav>
    );
  }
}
