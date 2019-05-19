import React, { Component } from 'react';
import axios from 'axios';
import EventCard from './EventCard.js';

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
    pageContainer: {
        marginTop: '60px',
        marginLeft: '12px',
        marginRight: '20px',
        height: window.innerHeight-84   ,
    },
    cardContainer: {
        marginTop: '20px',
    },
}

export default class EventsList extends Component {

    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events/')
            .then(response => {
                const activeEvents = response.data.filter(event => event.event_active === 'true');
                //console.log(activeEvents);

                this.setState({ events: activeEvents });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    eventCardList() {
        return this.state.events.map(function(currentEvent, i){
            return <EventCard event={currentEvent} key={i} />;
        })
    }

    render() {
        return (
            <div style={styles.pageContainer}>
                <h3>Upcoming Events</h3>
                <hr/>
                <div style={styles.cardContainer}>
                    { this.eventCardList() }
                </div>
            </div>
        )
    }
}
