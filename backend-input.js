let schema = require('./schema');

let { update } = require('./update-mongoose');

let newObj = new schema.schema({
    sphinxID: '98',
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false
});

function func(inputObj, f) {
    switch (inputObj.id) {
        case 1:
            newObj.q1 = f;
            break;
        case 2:
            newObj.q2 = f;
            break;
        case 3:
            newObj.q3 = f;
            break;
        case 4:
            newObj.q4 = f;
            break;
        case 5:
            newObj.q5 = f;
            break;
    }
    console.log(JSON.stringify(newObj._doc));
    update(newObj._doc);
};

module.exports = {
    func
};