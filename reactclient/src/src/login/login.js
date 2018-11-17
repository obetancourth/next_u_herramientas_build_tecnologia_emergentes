import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  render() {
    return (
      <section className="container login">
        <form>
          <h3 style={{textAlign: "center"}}>Inicia Sesión</h3>
          <fieldset>
            <label>Correo Electrónico</label>
            <input type="text" name="username" placeholder="correo@electronico" />
          </fieldset>
          <fieldset>
            <label>Contraseña</label>
            <input type="email" name="email" placeholder="contraseña" />
          </fieldset>
          <fieldset className="center">
            <button>Ingresar</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
