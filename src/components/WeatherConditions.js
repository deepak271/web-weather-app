import React, { Component } from 'react'

export default class WeatherConditions extends Component {
  render() {
    return (
      <div className='wcond my-2 mx-1'>
      <div className="row">
        <div className="col up">
          <span className='info'>{this.props.wdata.high}°C</span>
          <div className='bel'>High</div>
        </div>
        <div className="col up">
        <span className='info'>{this.props.wdata.wind}m/s</span>
          <div className='bel'>Wind</div>
        </div>
        <div className="col up">
        <span className='info'>{this.props.wdata.sunrise}</span>
          <div className='bel'>Sunrise</div>
        </div>
        
      </div>   
      <div className="row">
        <div className="col up">
        <span className='info'>{this.props.wdata.low}°C</span>
          <div className='bel'>Low</div>
        </div>
        <div className="col up">
        <span className='info'>{this.props.wdata.humi}%</span>
          <div className='bel'>Humidity</div>
        </div>
        <div className="col up">
        <span className='info'>{this.props.wdata.sunset}</span>
          <div className='bel'>Sunset</div>
        </div>
        
      </div>    
      </div>
    )
  }
}
