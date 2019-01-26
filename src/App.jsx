import React, { Component } from 'react';
import './App.css';
import Form from './component/Form.jsx'
import GetWeather from './component/weather.jsx'

const API_KEY = "24bd3eb2c0667b3ac6863953d3d5004a";
const KEL_DEG = -273.15;
let weatherBg = "";
function swicthWeather_bg(desc) {
      switch(desc){
      case 'broken clouds':{
        weatherBg =  "clouds"
        break;
      }

    }

}
class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined,
    isVisible: true,

  }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = "Belarus";
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
      temp:data.main.temp + KEL_DEG,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      desc: data.weather[0].description,
      error: "",
      isVisible: false,
    });
      swicthWeather_bg(this.state.desc);
    }
    else{
      this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      desc: undefined,
      error: "Пожалуйста, введите город",
      isVisible: true
    });
    }
  }
  render() {
    return (
      <div>
      <Form getWeather = { this.getWeather }
            error = {this.state.error}
            isVisible = {this.state.isVisible}
              />
      <GetWeather 
       temp = {this.state.temp}
       city = {this.state.city}
       country = {this.state.country}
       humidity = {this.state.humidity}
       desc = {this.state.desc}
       isVisible = { this.state.isVisible }
      />
      </div>
    );
  }
}

export default App;
