import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../Style/Card.scss';

export default class MyCard extends Component {
  render() {

    let moment;

    if (this.props.temp && this.props.temp.moment) {
      moment = <Typography variant="h5" id="graus" component="h2">
      {this.props.temp.moment}º
    </Typography>
    }
      return (
        <Card className="card1 card">
          <CardContent>
            <Typography className="title"  gutterBottom>
              {this.props.temp.min}º/{this.props.temp.max}º
            </Typography>
            {moment}
            <Typography className="title-date"  component="p">
              {this.props.date}
            </Typography>
          </CardContent>
        </Card>
      )
    }
  }