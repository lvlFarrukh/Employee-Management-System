const express = require('express')
const router = express.Router()

// import model
const Employee = require('../model/employee')

router.get('/', (req, res) =>{
    res.render('employee/addOrDelt', {viewTitle: 'Add Employee'});
})

router.post('/', (req, res) =>{
    console.log(req.body)
    if (req.body._id)
        updateEmp(req, res)
    else
        insertEmp(req, res)
})

const insertEmp = (req, res) =>{
    let employee = new Employee()
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.number = req.body.number;
    employee.city = req.body.city;
    employee.address = req.body.address;
    employee.designation = req.body.designation;
    employee.status = 0
    employee.save((err, doc) =>{
        if (!err)
             res.redirect('/employee/list');
        else 
            console.log(err)
    })
}

const updateEmp = (req, res) =>{
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, { new: true }, (err, doc) =>{
        if(!err)
             res.redirect('employee/list');
    })
}

module.exports = router