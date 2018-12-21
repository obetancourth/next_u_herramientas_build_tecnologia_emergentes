import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render(){
    let cartItems = (<span className="bubble">{this.props.cart.length}</span>);
    return (
      <nav>
        <h1>La Bodega</h1>
        <ul>
          <li><Link to="/"><MaterialIcon icon="dashboard" /></Link></li>
          <li><Link to="/checkout"><MaterialIcon icon="shopping_cart"/></Link>{cartItems}</li>
          <li><Link to="/"><MaterialIcon icon="inbox"/></Link></li>
          <li><a onClick={(e)=>{this.props.logout(false);}}><MaterialIcon icon="exit_to_app"/></a></li>
        </ul>
      </nav>
    );
  }
}
