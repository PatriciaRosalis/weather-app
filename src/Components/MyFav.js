// MyCities
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import '../Style/Fav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class MyFav extends Component {
  render() {
    return (
      <button className="star" onClick={this.props.onFavorite}>
        <FontAwesomeIcon style={{ color: this.props.isFavorite  ? 'yellow': 'bisque'}} icon={faStar} />
      </button>
    )
  }
}
