import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Nav.scss';
import '../Style/Fav.scss';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link className="nav" to="/Five-Days-Weather">5 days Weather</Link>
        <Link className="nav" to="/Favorites"><img id="star" src="/star.png" alt="star" width="30px" height="30px" /> </Link>
      </div>
    )
  }
}
