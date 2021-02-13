const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true});

mongoose.connection
    .once('open', () =>{
        console.log('Yahoo connect is established')
    })
    .on('error', (err) =>{
        console.log('Error:', err)
    })


require('./employee')