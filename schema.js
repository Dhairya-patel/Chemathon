const mongoose = require('mongoose');

let schema = mongoose.model('Chemtest', {
    sphinxID: {
        type: String,
        required: true,
        default: "1234"
    },
    q1: {
        type: Boolean,
        required: false,
        default: false
    },
    q2: {
        type: Boolean,
        required: false,
        default: false
    },
    q3: {
        type: Boolean,
        required: false,
        default: false
    },
    q4: {
        type: Boolean,
        required: false,
        default: false
    },
    q5: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = {
    schema
};