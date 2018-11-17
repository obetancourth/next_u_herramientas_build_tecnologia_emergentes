import React, { Component } from 'react';
import Nav from '../common/nav/Nav';
import './DetailItem.css';

export default class DetailItem extends Component{
  render() {
    return (
      <section className="container">
        <Nav></Nav>
        <section className="card-panel prddet">
          <header>
            <h1>Aguacate</h1>
          </header>
          <section className="detcnt">
            <div className="prddetimg">
              <img src="http://localhost:3001/imgs/aguacate.jpg" />
            </div>
            <div className="prtdetdet">
              <div>
                <h2>Precio: </h2>
                <h2>Unicades Disponibles: </h2>
              </div>
              <div>
                <button>Atras</button>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
