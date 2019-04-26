import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*const Event = props => (
    <tr>
        <td>{props.event.event_name}</td>
        <td>{props.event.event_desc}</td>
        <td>{props.event.event_date}</td>
        <td>{props.event.start_time}</td>
        <td>{props.event.end_time}</td>
        <td>
            <Link to={"/edit/"+props.event._id}>Edit</Link>
        </td>
    </tr>
)*/

const styles = {
    card: {
        display: 'inline-block',
        marginBottom: '20px',
        marginRight: '20px',
        width: '350px',
    },
    media: {
        display: 'block',
        maxWidth: '350px',
        width: 'auto',
        height: 'auto',
    },
    container: {
        marginTop: '60px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    cardContainer: {
        marginTop: '20px',
    },
}

const Event = props => (
    <Card style={styles.card}>
        <Link to={"/details/"+props.event._id} style={{ textDecoration: 'none' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={require("../resources/ErieTower.jpg")}
                    title="Contemplative Reptile"
                    style={styles.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.event.event_name}
                    </Typography>
                    <Typography component="p">
                        {props.event.event_desc}
                    </Typography>
                    <Typography component="p">
                        {props.event.event_date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
    </Card>
)

export default class EventsList extends Component {

    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events/')
            .then(response => {
                this.setState({ events: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    eventList() {
        return this.state.events.map(function(currentEvent, i){
            return <Event event={currentEvent} key={i} />;
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <h3>Upcoming Events</h3>
                <hr/>
                <div style={styles.cardContainer}>
                    { this.eventList() }
                </div>
            </div>
        )
    }
}
