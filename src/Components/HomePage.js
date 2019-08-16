import React, { Component } from 'react';
import Loading from './Loading'
import Image from './Image';
import MyCard from './MyCard';
import Nav from './Nav';
import Search from './Search';
import MyFav from './MyFav';
import '../Style/Card.scss';
import CardList from './CardList';
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
      cityName: "",
      favorites: [] 
    }
  }

  handleAfterSearch = (temp) => {
    console.log("handleAfterSearch", temp)

  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      console.log("location.", lat, lon);
      this.getCoordinates(lat, lon)
    })
    this.getFavorites();
  }

  getCoordinates = (lat, lon) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=039e336e1a5e229ad3e4f3da54a7aedf`)
      .then(response => {
        this.handleApiResponse(response);
      })
  }

  getCurrentTemp = (cityName) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=039e336e1a5e229ad3e4f3da54a7aedf`)
      .then(response => {
        this.handleApiResponse(response);
      })
  }

  getFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites) {
      this.setState({favorites: favorites});
    }
  }

  handleApiResponse = (response) => {
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
  }

  handleOnEnter = (cityName) => {
    this.getCurrentTemp(cityName)
    console.log("handleOnEnter", cityName)
  }

  handleOnFavorite = () => {
    const isFavorite = this.state.favorites.includes(this.state.cityName)
    let newFavorites;

    if(isFavorite) {
      newFavorites = this.state.favorites.filter(city => {
        return city !== this.state.cityName
      });
    } else {
      newFavorites = this.state.favorites;
      newFavorites.push(this.state.cityName);
    }
    this.setState({
      favorites: newFavorites
    });
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  handleOnFavoriteSelect = (cityName) => {
    this.getCurrentTemp(cityName)
  }

  render() {
    let info;
    let fav;

    if (this.state.cityName) {
      info = <MyCard temp={this.state.temp} date={this.state.date} cityName={this.state.cityName} />
    } else {
      info = "";
    }

    if (this.state.cityName) {
      fav = <MyFav isFavorite={this.state.favorites.includes(this.state.cityName)} onFavorite={this.handleOnFavorite}/>
    }

    return (
      <div>
        <Search onEnter={this.handleOnEnter} />
        <CardList favorites={this.state.favorites} onFavoriteSelect={this.handleOnFavoriteSelect} />
        <Loading />
        <Image />
        <br />
        <div className="name-fav">
          {fav}
          <span >{this.state.cityName ? this.state.cityName : "Please, select a city."}</span>
        </div>
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
