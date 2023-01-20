
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Location from './components/Location';
import WeatherConditions from './components/WeatherConditions';
// import Weather from './components/Weather';


export default class App extends Component {
   constructor(props){
    super(props);
    this.state={
      location:{
        lat:28.65,
        long:77.22
      },
      city:"Delhi",
      state:"Delhi",
      country:"IN",
      wData:{
        date:new Date().toDateString()
      }
    }
   }
   changeCity=(c)=>{
   
    this.setState({
      city:c
    })
    //console.log("states before:"+this.state)
   }
   findCity=async ()=>{
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&appid=8bbca8a0bce1bdef0ea21c55d7210655`;
    let cityData = await fetch(url);
    let parsedData = await cityData.json();
   //console.log(parsedData);
    this.setState({
      location:{
        lat:parsedData[0].lat,
        long:parsedData[0].lon
      },
      state:parsedData[0].state,
      country:parsedData[0].country
    })
    setTimeout(this.currentWeather,0);
   }
  currentWeather=async()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.location.lat}&lon=${this.state.location.long}&appid=8bbca8a0bce1bdef0ea21c55d7210655`;
    let wData = await fetch(url);
    let pData = await wData.json();
    console.log(pData)
    console.log(url)
    let ic = pData.weather[0].icon;
    let tem = pData.main.temp;
    let des = pData.weather[0].description;
    
    this.setState(
    {
      wData:{
          ...this.state.wData,
          temp:tem,
          desc:des,
          imgUrl:`http://openweathermap.org/img/wn/${pData.weather[0].icon}@2x.png`,
          sunrise:this.getTime(pData.sys.sunrise),
          sunset:this.getTime(pData.sys.sunset),
          high:((pData.main.temp_max)-273.15).toFixed(2),
          low :((pData.main.temp_min)-273.15).toFixed(2),
          wind:pData.wind.speed, 
          humi:pData.main.humidity
      }
    }
    )
    console.log(this.state.wData);
  }
  getTime=(t)=>{
    let x =t*1000;
    let tim = new Date(x);
    return `${tim.getHours()}:${tim.getMinutes()}`;
   }
 
  render() {
    return (
      <div>
        <Navbar fn1={this.changeCity} fn2={this.findCity} />
        <Location city={this.state.city} state={this.state.state} country={this.state.country} wdata={this.state.wData}/>
        {/* <Weather/> */}
        <WeatherConditions wdata = {this.state.wData}/>
      </div>
    )
  }
}


