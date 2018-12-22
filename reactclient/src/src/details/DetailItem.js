import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './DetailItem.css';

export default class DetailItem extends Component{
  constructor(){
    super();
    this.state={
      redirect:''
    }
  }
  doRedirect = ()=>{
    this.setState({redirect:'/'});
  }
  render() {
    if(this.state.redirect!==''){
      return (<Redirect to="/" />);
    }
    return (
        <section className="card-panel prddet">
          <header>
            <h1>{this.props.nombre}</h1>
          </header>
          <section className="detcnt">
            <div className="prddetimg">
            <img src={`http://localhost:3001/${this.props.url}`} alt={`Imágen de ${this.props.nombre}`}/>
            </div>
            <div className="prtdetdet">
              <div>
                <h2>Precio: {this.props.precio}</h2>
                <h2>Unicades Disponibles: {this.props.stock}</h2>
              </div>
              <div>
                <button onClick={this.doRedirect}>Atras</button>
              </div>
            </div>
          </section>
        </section>
    );
  }
}
