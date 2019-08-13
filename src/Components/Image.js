import React, { Component } from 'react';
import '../Style/Image.scss';

export default class Image extends Component {
  render() {
    return (
        <div className="sun">
        <img src="/cloud.png" alt="cloud" height="250px" width="250px" />
        </div>
    )
  } 
}
