import React, { Component } from 'react';
import Loading from './Loading'
import Image from './Image';
import MyCard from './MyCard';
import Nav from './Nav';
import Search from './Search';
import Fav from './Fav';
import '../Style/Card.scss';
import Axios from 'axios';

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: {
        min: "",
        max: "",
        moment: ""
      },
      date: "",
      cityName: ""
    }
  }

  handleAfterSearch = (temp) => {
    console.log("handleAfterSearch", temp)

  }

  getCurrentTemp = (cityName) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=db7a34f6242741bf3b0fc2fecfaefc18`)
      .then(response => {
        const date = new Date(response.data.dt * 1000)
        this.setState({
          cityName: response.data.name,
          temp: {
            min: response.data.main.temp_min,
            max: response.data.main.temp_max,
            moment: response.data.main.temp,
          },
          date: `${date.getDate().toString()}/${(date.getMonth() + 1).toString()}`
        })
        console.log("response", this.state)
      })
  }

  handleOnEnter = (cityName) => {
    this.getCurrentTemp(cityName)
    console.log("handleOnEnter", cityName)
  }

  render() {
    let info;

    if (this.state.cityName) {
      info = <MyCard temp={this.state.temp} date={this.state.date} cityName={this.state.cityName} />
    } else {
      info = <p>Please, select a city.</p>
    }

    return (
      <div>
        <Search onEnter={this.handleOnEnter} />
        <Fav />
        <Loading />
        <Image />
        <br />
        <div className="flex-card">
          {info}
        </div>
        <br />
        <br />
        <Nav />
      </div>
    )
  }
}
