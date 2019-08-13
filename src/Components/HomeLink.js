import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/HomeLink.scss';

export default class HomeLink extends Component {
  render() {
    return (
      <div className="home-father">
        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}
