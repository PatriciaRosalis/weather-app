import React, { Component } from 'react';
import '../Style/Loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loader" style={ this.props.isVisible ? { display:'block'} : {display : 'none'} } >
        Loading...
      </div>
    )
  }
}
