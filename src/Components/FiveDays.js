import React, { Component } from 'react';
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Image from '../Components/Image';
import MyCard from '../Components/MyCard';
import '../Style/Card.scss';
import axios from 'axios';
import '../Style/FiveDays.scss';
import HomeLink from './HomeLink';

export default class FiveDays extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfDays: [],
      cityName: ""
    }
  }

  handleOnEnter = (cityName) => {
    this.getFiveDays(cityName)
    console.log("handleOnEnter", cityName)
  }

  getFiveDays = (cityName) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=db7a34f6242741bf3b0fc2fecfaefc18&units=metric`)
      .then(response => {
        this.getDataFromList(response.data.list)
        this.setState({
          cityName: response.data.city.name
        });
        const date = new Date(response.data.dt * 1000)
        // this.setState({
        //   cityName: response.data.name,
        //   temp: {
        //     min: response.data.list.temp_min,
        //     max: response.data.list.temp_max,
        //   },
        //   date: `${date.getDate().toString()}/${(date.getMonth() + 1).toString()}`
        // })
      })
  }

  getDataFromList = (list) => {
    // Dias que ja foram descobertos
    const existingDays = [];
    // Array que guarda os vários obj temperatura para o dia em específico
    const daysArray = [];

    list.forEach(x => {
      const date = new Date(x.dt * 1000);
      const dayMonth = date.getDate().toString() + date.getMonth().toString();
      if (existingDays.includes(dayMonth)) {
        const dayFound = daysArray.find(x => x.day === dayMonth);
        dayFound.list.push(x)
      } else {
        daysArray.push({ day: dayMonth, list: [x] })
        existingDays.push(dayMonth)
      }
    });

    this.setState({
      listOfDays: this.getMappedDaysArray(daysArray)
    })
  }

  getMappedDaysArray = (daysArray) => {
    return daysArray.map((tempsOfDay) => {
      const dayTemp = {
        date: "",
        temp: {
          min: "",
          max: "",
        }
      };
      if (tempsOfDay.list.length > 0) {
        const date = new Date(tempsOfDay.list[0].dt * 1000)
        dayTemp.date = `${date.getDate().toString()}/${(date.getMonth() + 1).toString()}`
      }

      tempsOfDay.list.forEach((tempLog) => {
        if (dayTemp.temp.min) {
          if (dayTemp.temp.min > tempLog.main.temp_min) {
            dayTemp.temp.min = tempLog.main.temp_min
          }
        } else {
          dayTemp.temp.min = tempLog.main.temp_min;
        }

        if (dayTemp.temp.max) {
          if (dayTemp.temp.max < tempLog.main.temp_max) {
            dayTemp.temp.max = tempLog.main.temp_max
          }
        } else {
          dayTemp.temp.max = tempLog.main.temp_max;
        }
      });
      return dayTemp;
    });
  }

  render() {

    const cards = this.state.listOfDays.map(dayTemp => {
      return <MyCard temp={dayTemp.temp} date={dayTemp.date} />
    })

    return (
      <div>
        <Search onEnter={this.handleOnEnter} />
        <Image />

        <p className="city-name">{this.state.cityName ? this.state.cityName : "Please, select a city."}</p>
        <div className="flex-card">
          {cards}
        </div>
        <br></br>
        <div className="nav-home">
          <HomeLink />
          <Nav />
        </div>
      </div>
    )
  }
}