const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema
const Checking = new Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    }
})
const user = mongoose.model('Checking', Checking)
module.exports=user;
