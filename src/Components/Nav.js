import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Nav.scss';
import '../Style/Fav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-father">
        <Link className="nav" to="/Five-Days-Weather">5 days Weather</Link>
        {/* <Link className="nav" to="/Favorites">My Favorites</Link> */}
      </div>
    )
  }
}
