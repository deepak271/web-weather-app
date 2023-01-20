import React, { Component } from 'react'

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}} key={this.props.k}>
            <img src={this.props.imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">City:{this.props.city}</h2>
                <h5 className="card-title">Temp:{this.props.temp-273}</h5>
                <p className="card-text">{this.props.dis}</p>
                <div>Speed:{this.props.speed}</div>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
