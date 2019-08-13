import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Search.scss';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Cities from './Cities.json';

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

  handleKeyPress = (keyPress) => {
    if (keyPress.which === 13 || keyPress.key === 'Enter') {
      // this.getWeatherForCity();^
      this.props.onEnter(this.inputText)
      // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputText}&appid=db7a34f6242741bf3b0fc2fecfaefc18&units=metric`)
      //   .then(response => {
      //     console.log("Response", response)
      //     console.log(Cities)
      //   })
    }
  }
  render() {
    return (
      <div className="search-father">
        {/* <Link className="home" to="/">Home</Link> */}
        <Input onChange={c => this.handleValueChange(c)} className="search" placeholder="Search" inputProps={{ 'aria-label': 'description', }} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}
