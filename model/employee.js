const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    fullName: String,
    email: String,
    mobileNumber: String,
    city: String,
    Address: String,
    Status: String,
    Designation: String
});

mongoose.model('Employee', employeeSchema);

// module.exports = employee;