const express = require('express')
const router = express.Router()

// import model
const Employee = require('../model/employee')

router.get('/list', (req, res) =>{
    Employee.find((err, doc) =>{
        console.log(doc)
        if (!err){
            res.render('employee/EmpList', {
                viewTitle: 'Employee List',
                list: doc,
                allowProtoPropertiesByDefault: {
                    trim: true
                }
            });
        }
        else {
            res.render('employee/EmpList', {
                viewTitle: 'Error while retriving list',
            });
        }
    })
    
})

router.get('/list/delete/:id', async (req, res) =>{
    await Employee.deleteOne({_id: req.params.id})
    res.redirect('/employee/list');
    // else {
})

router.get('/list/edit/:id', async (req, res) =>{
    await Employee.findById(req.params.id, (err, doc) =>{
        if(!err) {
            res.render("employee/addOrDelt", {
                viewTitle: "Add Employee",
                employee: doc
            });
        }
    })
    // res.send(req.params);
})

module.exports = router