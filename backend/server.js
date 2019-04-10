require("./event.model.js");

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const eventRoutes = express.Router();
var Event = mongoose.model('Event');

app.use(cors());
app.use(bodyParser.json());

eventRoutes.route('/').get(function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

eventRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Event.findById(id, function(err, event) {
        res.json(event);
    });
});

eventRoutes.route('/add').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'event': 'event added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new event failed');
        });
});

eventRoutes.route('/update/:id').post(function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send("data is not found");
        else
            event.event_name = req.body.event_name;
            event.event_desc = req.body.event_desc;
            event.event_date = req.body.event_date;
            event.start_time = req.body.end_time;
            event.end_time = req.body.end_time;
            event.event_active = req.body.event_active;

            event.save().then(event => {
                res.json('Event updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/events', eventRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
