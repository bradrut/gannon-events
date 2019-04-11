import React, { Component } from 'react';
import axios from 'axios';

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

export default class EditEvent extends Component {

    constructor(props) {
        super(props);

        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeEventDescription = this.onChangeEventDescription.bind(this);
        this.onChangeEventDate = this.onChangeEventDate.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
                    start_time: response.data.end_time,
                    end_time: response.data.event_active
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeEventName(e) {
        this.setState({
            event_name: e.target.value
        });
    }

    onChangeEventDescription(e) {
        this.setState({
            event_desc: e.target.value
        });
    }

    onChangeEventDate(e) {
        this.setState({
            event_date: e.target.value
        });
    }

    onChangeStartTime(e) {
        this.setState({
            start_time: e.target.value
        });
    }

    onChangeEndTime(e) {
        this.setState({
            end_time: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            event_owner: this.state.event_owner,
            event_name: this.state.event_name,
            event_desc: this.state.event_desc,
            event_date: this.state.event_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            event_active: this.state.event_active
        };
        console.log(obj);
        axios.post('http://localhost:4000/events/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Event</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Event Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.event_name}
                                onChange={this.onChangeEventName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Event Description: </label>
                        <textarea
                                className="form-control"
                                value={this.state.event_desc}
                                onChange={this.onChangeEventDesc}
                                />
                    </div>
                    <div className="form-group">
                        <label>Event Date: </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.event_desc}
                                onChange={this.onChangeEventDate}
                                />
                    </div>
                    <div className="form-group">
                        <label>Start Time: </label>
                        <input  type="time"
                                className="form-control"
                                value={this.state.start_time}
                                onChange={this.onChangeStartTime}
                                />
                    </div>
                    <div className="form-group">
                        <label>End Time: </label>
                        <input  type="time"
                                className="form-control"
                                value={this.state.end_time}
                                onChange={this.onChangeEndTime}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Event" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
