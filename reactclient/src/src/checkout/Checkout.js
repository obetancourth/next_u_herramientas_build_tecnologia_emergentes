import React, { Component } from 'react';
import Nav from '../common/nav/Nav';
import './Checkout.css';

export default class Checkout extends Component {
  render(){
    return (
      <section className="container">
        <Nav></Nav>
        <section className="card-panel chkout">
          <header>
            <h1>Carrito de Compras</h1>
          </header>
          <section className="crtdetprd">
            <div className="crtprds">

              <div className="crtprd">
                <div className="crtprdimg">
                  <div>
                    <img src="http://localhost:3001/imgs/aguacate.jpg" />
                  </div>
                </div>
                <div className="crtprdsbt">
                  <div>
                    <span>Ajo</span><br />
                    <span><b>Unidades:</b> 5</span>
                  </div>
                  <div>
                    <b>Subtotal: $5</b>
                  </div>
                </div>
              </div>

              <div className="crtprd">
                <div className="crtprdimg">
                  <div>
                    <img src="http://localhost:3001/imgs/aguacate.jpg" />
                  </div>
                </div>
                <div className="crtprdsbt">
                  <div>
                    <span>Ajo</span><br />
                    <span><b>Unidades:</b> 5</span>
                  </div>
                  <div>
                    <b>Subtotal: $5</b>
                  </div>
                </div>
              </div>

              <div className="crtprd">
                <div className="crtprdimg">
                  <div>
                    <img src="http://localhost:3001/imgs/aguacate.jpg" />
                  </div>
                </div>
                <div className="crtprdsbt">
                  <div>
                    <span>Ajo</span><br />
                    <span><b>Unidades:</b> 5</span>
                  </div>
                  <div>
                    <b>Subtotal: $5</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="crtact">
              <div>Total: $22</div>
              <div>
                <button>Cancelar</button>
                <button>Pagar</button>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
