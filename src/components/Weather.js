import React, { Component } from 'react'
import WeatherItem from './WeatherItem'

export default class weather extends Component {
    
      constructor() {
        super();
        this.state = {
            data:this.List,
        }
      }
      async componentDidMount()
      {
        let url = "http://api.openweathermap.org/data/2.5/forecast?lat=28.38&lon=77.22&appid=6394c8d0fd3de0b26ff56ce026e7bb2f";
        let data = await fetch(url);
        console.log(await data.json());
      }
  render() {
    return (
      <div>
        {/* {
            this.state.data.map((e)=>{
                return <div key={e.dt}> <WeatherItem  imgUrl={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} temp={e.main.temp} dis={e.weather.description} speed={e.wind.speed} /> </div>
            })
        } */}
        hi
      </div>
    )
  }
}
