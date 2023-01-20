import React, { Component } from 'react'
import WeatherItem from './WeatherItem'

export default class weather extends Component {
    
      constructor() {
        super();
        this.state = {
            data:null,
        }
        this.k = process.env.REACT_APP_API_KEY
      }
      async componentDidMount()
      {
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=28.38&lon=77.22&appid=${this.k}`;
        let dat = await fetch(url);
        let parsdata = await dat.json();
        console.log(parsdata)
        this.setState({data:parsdata});
      }
  render() {
    return (
      <div>
        {
            this.state.data? this.state.data.list.map((e)=>{
                return <div key={e.dt}> <WeatherItem  imgUrl={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} temp={e.main.temp} dis={e.weather.description} speed={e.wind.speed} city={this.state.data.city.name} /> </div>
            }):"No data"
        }
      </div>
    )
  }
}
