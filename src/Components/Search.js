import React, { Component } from 'react';
import '../Style/Search.scss';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Cities from './Cities.json';

// const cities = 
function getCityCode(cityName) {
  const city = Cities.find(city => {
    return city.name === cityName
  });
  return city.id;
}

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.inputText = '';
  }

  handleValueChange = (c) => {
    this.inputText = c.target.value;
  }

  getWeatherForCity = () => {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric&appid=db7a34f6242741bf3b0fc2fecfaefc18`)
      .then(response => {
        this.getDataFromList(response.data.list)
        return response.data.list
      })
  }

  getDataFromList = (list) => {
    // const dt = new Date(dt); 
    const todayDate = new Date();
    // Dias que ja foram descobertos
    const existingDays = [];
    // Array que guarda os vários obj temperatura para o dia em específico
    const daysArray = [];

    list.forEach(x => {
      const date = new Date(x.dt * 1000);
      const dayMonth = date.getDate().toString() + date.getMonth().toString();
      console.log("date", date)
      if(existingDays.includes(dayMonth)) {
        const dayFound = daysArray.find(x => x.day === dayMonth);
        dayFound.list.push(x)
      } else {
        daysArray.push({day: dayMonth, list: [x]})
        existingDays.push(dayMonth)
      }
    });
      console.log("teste")
    // today.getDate()



    // dt = date.map( function (){
    //   return dt
    // })
  }

  handleKeyPress = (keyPress) => {
    if (keyPress.which === 13 || keyPress.key === 'Enter') {
      // const cityCode = getCityCode(this.inputText);
      this.getWeatherForCity();
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputText}&appid=db7a34f6242741bf3b0fc2fecfaefc18&units=metric`)
      .then(response => {
        console.log("Response", response)
        console.log(Cities)
      })
    }
    console.log(keyPress.key, keyPress.code);
  }
  render() {
    return (
      <div>
        <Input onChange={c => this.handleValueChange(c)} className="search" placeholder="Search" inputProps={{'aria-label': 'description',}} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}
