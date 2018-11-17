import React, { Component } from 'react'
import './Detail.css';

export default class Details extends Component {
  render(){
    return(
      <section className="card-panel ctdprd">
        <header>
          <div>
            <h1>Catálogo de Productos</h1>
          </div>
          <div>
            <app-search></app-search>
          </div>
        </header>
        <section>
          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>

          <div className="card medium">
            <img className="card-image" src="http://localhost:3001/imgs/aguacate.jpg" />
            <div className="card-title">Aguacate</div>
            <div className="price"><b>Precio:</b>&nbsp;<b>$100.00</b></div>
            <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>10</b></div>
            <div className="card-action">
              <button>Ver Más</button>
              <form>
                <button className="add">Agregar</button>
                <input type="number" name="cantidad" maxlength="3" max="100" min="1" value="1" />
              </form>
            </div>
          </div>
        </section>
      </section>
    )
  }
}
