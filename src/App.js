import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import EventsList from "./components/events-list.component.js";
import EventDetails from "./components/event-details.component.js";
import CreateEvent from "./components/create-event.component.js";
import EditEvent from "./components/edit-event.component.js";

import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="https://gannon.edu/" target="_blank">
                            <img src={logo} width="30" height="30" alt="Gannon.edu" />
                        </a>
                        <Link to="/" className="navbar-brand">Gannon Events</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Event</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={EventsList} />
                    <Route path="/edit/:id" component={EditEvent} />
                    <Route path="/create" component={CreateEvent} />
                </div>
            </Router>
        );
    }
}

export default App;
