import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../Style/Card.scss';

export default class MyCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <Card className="card1 card">
          <CardContent>
            <Typography className="title" color="textSecondary" gutterBottom>
              {this.props.cityName}
            </Typography>
            <Typography className="title" color="textSecondary" gutterBottom>
              {this.props.temp.min}/{this.props.temp.max}
            </Typography>
            <Typography variant="h5" id="graus" component="h2">
              {this.props.temp.moment}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.date}
            </Typography>
          </CardContent>
        </Card>
      )
    }
  }