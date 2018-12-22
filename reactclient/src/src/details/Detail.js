import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Detail.css';

class DetailItem extends Component{
  constructor(){
    super();
    this.state = {
      cantidad: 1,
      redirect:''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addClickHanlder = this.addClickHanlder.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
  }
  changeHandler(e){
    let {name, value} = e.currentTarget;
    this.setState({...this.state,[name]:value});
  }
  addClickHanlder(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.add(this.props._id, this.state.cantidad);
  }
  viewHandler(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.viewHandler(this.props._id, ()=>{
      this.setState({"redirect":'/detail'})
    });
  }
  render(){
    if(this.state.redirect!==''){
      return (<Redirect to='/detail' />);
    }
    return(
      <div className="card medium">
        <img className="card-image" src={`http://localhost:3001/${this.props.url}`} />
        <div className="card-title">{this.props.nombre}</div>
        <div className="price"><b>Precio:</b>&nbsp;<b>${this.props.precio}</b></div>
        <div className="price"><b>Unidades Disponibles:</b>&nbsp;<b>{this.props.stock}</b></div>
        <div className="card-action">
          <button onClick={this.viewHandler}>Ver Más</button>
          <form>
            <button className="add" onClick={this.addClickHanlder}>Agregar</button>
            <input type="number"
              name="cantidad"
              maxLength="3"
              max={this.props.stock}
              min="1"
              value={this.state.cantidad}
              onChange={this.changeHandler}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default class Details extends Component {
  render(){
    let prods = (this.props.prods || []).map((o,i)=>{
      return (<DetailItem { ...o }
                  key={ o._id }
                  add={this.props.add}
                  viewHandler={this.props.viewHandler}
              />
      );
    })
    return(
      <section className="card-panel ctdprd">
        <header>
          <div>
            <h1>Catálogo de Productos</h1>
          </div>
          <div>
            <div>
              <form className="searchForm">
                <label>¿Qúe está buscando?</label><br />
                <input className="sinput"
                  type="text"
                  name="search"
                  onChange={this.props.searchHandler}
                  maxLength="30" value={this.props.search}/>
              </form>
            </div>
          </div>
        </header>
        <section>
          {prods}
        </section>
      </section>
    )
  }
}
