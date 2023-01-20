import React, { Component } from 'react'

export default class Location extends Component {
  render() {
    return (
      <div className='location'>

        <div className='place'>
        <div className='name'>
            {this.props.city},
            <span>{this.props.state},</span>
            <span>{this.props.country}</span>       
        </div>
        <div className='date'>
            {this.props.wdata.date}
        </div>
        </div>

        <div className='temp'>
            <div className='icon'>
                <img src={this.props.wdata.imgUrl} alt="img" />
            </div>
            <div className='tmp'>
                {((this.props.wdata.temp)-273.15).toFixed(2)}°C
            </div>
            <span>{this.props.wdata.desc}</span>
        </div>
      </div>
    )
  }
}
