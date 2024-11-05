const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema
const enq = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
   
    Create_Password: {
        type: String
    },
    Confrime_Password: {
        type: String
    },
    EmployeID: {
        type: String
    }
})
module.exports = mongoose.model('enqs', enq)

