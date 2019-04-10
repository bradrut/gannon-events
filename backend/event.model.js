const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    event_owner: {
        type: String
    },
    event_name: {
        type: String
    },
    event_desc: {
        type: String
    },
    event_date: {
        type: String
    },
    start_time: {
        type: String
    },
    end_time: {
        type: String
    },
    event_active: {
        type: String
    }
});

module.exports = mongoose.model('Event', Event);
