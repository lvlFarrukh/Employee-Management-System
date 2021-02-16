const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    fullName: String,
    email: String,
    number: String,
    city: String,
    address: String,
    designation: String,
    status: Number,

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;