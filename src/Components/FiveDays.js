import React, { Component } from 'react';
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Image from '../Components/Image';
import MyCard from '../Components/MyCard';
import '../Style/Card.scss';
import axios from 'axios';

export default class FiveDays extends Component {
  listOfDays = [];
  cardList = [];

  handleOnEnter = (cityName) => {
    this.getFiveDays(cityName)
    console.log("handleOnEnter", cityName)
  }

  getFiveDays = (cityName, cityCode) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${cityCode}&appid=db7a34f6242741bf3b0fc2fecfaefc18&units=metric`)
      .then(response => {
        this.getDataFromList(response.data.list)
        console.log("Response", response)
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
      console.log("date", date)
      if (existingDays.includes(dayMonth)) {
        const dayFound = daysArray.find(x => x.day === dayMonth);
        dayFound.list.push(x)
      } else {
        daysArray.push({ day: dayMonth, list: [x] })
        existingDays.push(dayMonth)
      }
    });

    this.listOfDays = daysArray;
    this.handleMinMax();
    console.log("teste", this.listOfDays)
  }

  handleMinMax = () => {
    this.listOfDays.forEach((tempsOfDay) => {
      const dayTemp = {
        date: "",
        temp: {
          min: "",
          max: "",
        },
        cityName: ""
      };
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
      this.cardList.push(dayTemp);
    });
    console.log("cardList", this.cardList)
  }

  render() {
    // let newList;

    // if (this.list) {
    //   newList = <MyCard temp={this.state.temp} date={this.state.date} cityName={this.state.cityName} />
    // } else {
    //   newList = <p>Please, select a city.</p>
    // }

    return (
      <div>
        <Search onEnter={this.handleOnEnter} />
        <Image />
        <div className="flex-card">
          {/* <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard /> */}
        </div>
        <br></br>
        <Nav />
      </div>
    )
  }
}