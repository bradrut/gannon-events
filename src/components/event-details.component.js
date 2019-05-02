import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    container: {
        marginTop: '60px',
        marginLeft: '20px',
        height: window.innerHeight-85,
    },
    media: {
        maxWidth: window.innerWidth-38,
        float: 'left',
        display: 'block',
        boxShadow: '0px 1px 2px grey',
        borderRadius: '3px',
    },
}

export default class EventDetails extends Component {

    constructor(props) {
        super(props);

        this.onArchive = this.onArchive.bind(this);

        this.state = {
            event_owner: '',
            event_name: '',
            event_desc: '',
            event_date: '',
            start_time: '',
            end_time: '',
            event_active: true
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    event_owner: response.data.event_owner,
                    event_name: response.data.event_name,
                    event_desc: response.data.event_desc,
                    event_date: response.data.event_date,
                    start_time: response.data.start_time,
                    end_time: response.data.end_time,
                    event_active: response.data.event_active,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onArchive(e) {
        e.preventDefault();

        const obj = {
            event_owner: this.state.event_owner,
            event_name: this.state.event_name,
            event_desc: this.state.event_desc,
            event_date: this.state.event_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            event_active: false,
        };

        axios.post('http://localhost:4000/events/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={styles.container}>
                <Typography variant="h4">{this.state.event_name}</Typography>
                <hr style={{marginTop: '5px'}}/>
                <img src={require('../resources/ErieTower.jpg')} style={styles.media}/>
                <p>{this.state.event_date} from {this.state.start_time} to {this.state.end_time}</p>
                <p style={{visibility: 'hidden'}}>Break</p>
                <Typography variant="h6">Description</Typography>
                <p>{this.state.event_desc}</p>
                <p style={{visibility: 'hidden'}}>Break</p>

                <form onSubmit={this.onArchive}>
                    <input type="submit" value="Archive" className="btn btn-danger" />
                </form>
            </div>
        )
    }
}
