import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Checkout.css';

class CheckoutDetail extends Component{
  render(){
    return(
      <div className="crtprd">
        <div className="crtprdimg">
          <div>
            <img src={`http://localhost:3001/${this.props.url}`} alt={`Imágen de ${this.props.nombre}`}/>
          </div>
        </div>
        <div className="crtprdsbt">
          <div>
            <span><b>{this.props.nombre}</b></span><br />
            <span><b>Precio:</b> {this.props.nombre}</span><br />
            <span><b>Unidades:</b> {this.props.cantidad}</span>
          </div>
          <div>
            <b>Subtotal: ${(this.props.cantidad * this.props.precio)}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default class Checkout extends Component {
  constructor(){
    super();
    this.state={
      redirect:''
    };
  }
  pagarHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.props.confirm(
      (okResult)=>{
        if(okResult){
          alert('Orden confirmada');
          this.setState({redirect:'/'});
        }else{
          alert('Error al confirma orden de compra!');
        }
      }
    );
  }
  render(){
    if(this.state.redirect!==''){
      return (<Redirect to="/" />);
    }
    let total = 0;
    let productosCart = this.props.cart.map((o,i)=>{
      total += (o.precio * o.cantidad);
      return (<CheckoutDetail {...o} key={o._id}></CheckoutDetail>);
    });
    return (
        <section className="card-panel chkout">
          <header>
            <h1>Carrito de Compras</h1>
          </header>
          <section className="crtdetprd">
            <div className="crtprds">
                {productosCart}
            </div>
            <div className="crtact">
              <div>Total: ${total}</div>
              <div>
                <button onClick={(e)=>{e.preventDefault();e.stopPropagation();this.setState({redirect:"/"});}}>Cancelar</button>
                <button onClick={this.pagarHandler}>Pagar</button>
              </div>
            </div>
          </section>
        </section>
    );
  }
}
