import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEvent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            event_owner: '',
            event_name: '',
            event_desc: '',
            event_date: '',
            start_time: '',
            end_time: '',
            event_active: false
        }

        // Bind the onChange methods to 'this' since they are modifying this component's state object.
        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeEventDesc = this.onChangeEventDesc.bind(this);
        this.onChangeEventDate = this.onChangeEventDate.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEventName(e) {
        this.setState({
            event_name: e.target.value
        });
    }

    onChangeEventDesc(e) {
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
        this.setState({
            event_active: true
        })

        // This is where the backend logic will go to submit the new event to the database.
        console.log(`Form submitted:`);
        console.log(`Event Name: ${this.state.event_name}`);
        console.log(`Event Description: ${this.state.event_desc}`);
        console.log(`Event Date: ${this.state.event_date}`);
        console.log(`Start Time: ${this.state.start_time}`);
        console.log(`End Time: ${this.state.end_time}`);

        const newEvent = {
            event_owner: this.state.event_owner,
            event_name: this.state.event_name,
            event_desc: this.state.event_desc,
            event_date: this.state.event_date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            event_active: this.state.event_active
        };

        axios.post('http://localhost:4000/events/add', newEvent)
            .then(res => console.log(res.data));

        // Reset the form state.
        this.setState({
            event_owner: '',
            event_name: '',
            event_desc: '',
            event_date: '',
            start_time: '',
            end_time: '',
            event_active: false
        })
    }

    render() {
        return (
            <div style={{padding: 50}}>
                <h3>Create New Event</h3>
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
                                value={this.state.event_date}
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
                        <input type="submit" value="Submit Event" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
