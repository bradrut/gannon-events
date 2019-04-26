import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import EventsList from "./components/events-list.component.js";
import EventDetails from "./components/event-details.component.js";
import CreateEvent from "./components/create-event.component.js";
import EditEvent from "./components/edit-event.component.js";

const styles = {
    container: {
        marginRight: '0px',
        marginLeft: '0px',
        maxWidth: '100%',
        paddingLeft: '0px',
        paddingRight: '0px',
        backgroundColor: '#edebe9',
        height: '',
    },
    navbar: {
        backgroundColor: '#811010',
        position: 'fixed',
        width: '100%',
        zIndex: '1',
        boxShadow: '0px 1px 10px grey',
    },
    colorWhite: {
        color: '#fff',
        fontWeight: '500',
        borderColor: '#fff',
    },
    secondaryColor: {
        color: '#e3aa41',
        fontWeight: 'bold',
        borderColor: '#e3aa41',
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container" style={styles.container}>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
                        <button className="navbar-toggler" style={styles.colorWhite} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <a className="navbar-brand" style={styles.secondaryColor} href="/">Gannon Events</a>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" style={styles.colorWhite}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link" style={styles.colorWhite}>Create Event</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success my-2 my-sm-0" style={styles.secondaryColor} type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={EventsList} />
                    <Route path="/details/:id" component={EventDetails} />
                    <Route path="/create" component={CreateEvent} />
                    <Route path="/edit/:id" component={EditEvent} />
                </div>
            </Router>
        );
    }
}

export default App;
