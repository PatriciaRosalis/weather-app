import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Nav.scss';

export default class TenDays extends Component {
  render() {
    return (
      <div>
        <Link className="nav" to="/">10 days Weather</Link>
        <Link className="nav" to="/">My Cities</Link>
      </div>
    )
  }
}
