const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Assignment6";

let userSchema = Schema({
    emailId: { type: String, default: '' },
    password: { type: String, default: '' }
}, { collection: "User" })


let collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('User', userSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;
