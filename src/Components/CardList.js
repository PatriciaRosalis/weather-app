import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Style/CardList.scss';
import Typography from '@material-ui/core/Typography';

export default class CardList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const Favorites = this.props.favorites.map(cityName => {
      return (<Link to="#" key={cityName}  className="link-card-list" onClick={() => this.props.onFavoriteSelect(cityName)}> <Card className="card-pat card">
        <CardContent>
          <Typography variant="h5" id="graus" component="h2">
            {cityName}
          </Typography>
        </CardContent>
      </Card> </Link>
      )
    })
    return (
      <div className="card-list">
        <h3>Favorites</h3>
        <div className="card-container">
          {Favorites}
        </div>  
      </div>
    )
  }
}
