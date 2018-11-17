import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render(){
    return (
      <nav>
        <h1>La Bodega</h1>
        <ul>
          <li><Link to="/"><MaterialIcon icon="dashboard" /></Link></li>
          <li><Link to="/checkout"><MaterialIcon icon="shopping_cart"/></Link></li>
          <li><Link to="/"><MaterialIcon icon="inbox"/></Link></li>
          <li><Link to="/login"><MaterialIcon icon="exit_to_app"/></Link></li>
        </ul>
      </nav>
    );
  }
}
