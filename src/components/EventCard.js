import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'inline-block',
        marginBottom: '8px',
        width: '350px',
        marginRight: '10px',
    },
    media: {
        display: 'block',
        maxWidth: '350px',
        width: 'auto',
        height: 'auto',
    },
}

class EventCard extends Component {
  render() {
    return(
      <Card style={styles.card}>
          <Link to={"/details/"+this.props.event._id} style={{ textDecoration: 'none' }}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="140"
                      image={require("../resources/ErieTower.jpg")}
                      style={styles.media}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {this.props.event.event_name}
                      </Typography>
                      <Typography component="p">
                          {this.props.event.event_desc}
                      </Typography>
                      <Typography component="p">
                          {this.props.event.event_date}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Link>
      </Card>
    )
  }
}

export default EventCard;
