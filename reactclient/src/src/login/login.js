import React, { Component } from 'react';
import * as request from 'superagent';
import { Redirect } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }
  onChangeHandler(e){
    let { name , value} = e.currentTarget;
    console.log(name, value);
    this.setState(
      {
        ...this.state,
        [name] : value
      }
    );
  }
  authenticate(e){
    e.preventDefault();
    e.stopPropagation();
    request
      .post('/usuarios/login')
      .send({ user:this.state.username, pass:this.state.password})
      .then((res)=>{
        if (res.text==="Validado"){
          this.props.loginHandler(true);
        }
      })
  }
  render() {
    if (this.props.isAuthenticated){
      return (
        <Redirect to="/" />
      )
    }
    return (
      <section className="container login">
        <form>
          <h3 style={{textAlign: "center"}}>Inicia Sesión</h3>
          <fieldset>
            <label>Correo Electrónico</label>
            <input type="email" name="username" placeholder="correo@electronico"
                onChange={this.onChangeHandler}
                value={this.state.username}
            />
          </fieldset>
          <fieldset>
            <label>Contraseña</label>
            <input type="password" name="password" placeholder="contraseña"
              onChange={this.onChangeHandler}
              value={this.state.password}
            />
          </fieldset>
          <fieldset className="center">
            <button onClick={this.authenticate}>Ingresar</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
