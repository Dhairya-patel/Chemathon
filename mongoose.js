const mongoose = require('mongoose');
let { update } = require('./update-mongoose');
let { newID } = require('./backend-input');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Chemtest');
console.log('Connected');

let obj = newID;
update(obj);

module.exports = {
    mongoose
}