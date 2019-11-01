const mongoose = require('mongoose');

let { schema } = require('./schema');

let foundObj, editObj;

async function retrieveUser(sphinxID, callback) {
    await schema.find({ sphinxID: sphinxID }, function(err, obj) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, obj[0]);
        }
    });
};

let update = (newID) => {
    editObj = newID;
    schema.findOne({ sphinxID: newID.sphinxID }, function(err, existingUser) {
        if (!existingUser) {

            mongoose.connection.collection('chemtests').insert(newID);

        } else {
            retrieveUser(newID.sphinxID, function(err, obj) {
                if (err) {
                    console.log(err);
                }
                console.log(obj._doc);
                let ans = obj._doc;
                if (ans.q1 == true) {
                    editObj.q1 = true;
                }
                if (ans.q2 == true) {
                    editObj.q2 = true;
                }
                if (ans.q3 == true) {
                    editObj.q3 = true;
                }
                if (ans.q4 == true) {
                    editObj.q4 = true;
                }
                if (ans.q5 == true) {
                    editObj.q5 = true;
                }
                schema.findOneAndUpdate({ sphinxID: newID.sphinxID }, {
                    q1: editObj.q1,
                    q2: editObj.q2,
                    q3: editObj.q3,
                    q4: editObj.q4,
                    q5: editObj.q5,
                }, (err, affected, resp) => {
                    if (err) {
                        return console.log('Error in update');
                    }
                });
            });
            // .then((obj) => {
            //     console.log("async ans found obj", ans);
            // ans.resolve();
            // console.log('ansprom', obj[0]._doc);
            // .then((ans) => {
            // console.log('ans', ans);
            // if (ans.q1 == true) {
            //     editObj.q1 = true;
            // }
            // if (ans.q2 == true) {
            //     editObj.q2 = true;
            // }
            // if (ans.q3 == true) {
            //     editObj.q3 = true;
            // }
            // if (ans.q4 == true) {
            //     editObj.q4 = true;
            // }
            // if (ans.q5 == true) {
            //     editObj.q5 = true;
            // }
            // schema.findOneAndUpdate({ sphinxID: newID.sphinxID }, {
            //     q1: editObj.q1,
            //     q2: editObj.q2,
            //     q3: editObj.q3,
            //     q4: editObj.q4,
            //     q5: editObj.q5,
            // }, (err, affected, resp) => {
            //     if (err) {
            //         return console.log('Error in update');
            //     }
            // });
            // });
            // });
            // console.log("New id", newID);
            // console.log("Edit inside", editObj);
            // schema.findOneAndUpdate({ sphinxID: newID.sphinxID }, {
            //     q1: editObj.q1,
            //     q2: editObj.q2,
            //     q3: editObj.q3,
            //     q4: editObj.q4,
            //     q5: editObj.q5,
            // }, (err, affected, resp) => {
            //     if (err) {
            //         return console.log('Error in update');
            //     }
            // });
        }
    });
};

module.exports = {
    update
};