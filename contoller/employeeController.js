const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('employee/addOrDelt', {viewTitle: 'Add Employee'});
})

module.exports = router