import React, { Component } from 'react';
import '../Style/Search.scss';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Search.." />
      </div>
    )
  }
}
