require('./model/db')
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')

// import controller
const employeeController = require('./contoller/employeeController')
const employeeList = require('./contoller/employeeList');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', 
                           defaultLayout: 'mainLayout', 
                           layoutsDir: __dirname + '/views/layouts/',
                           runtimeOptions: {
                                allowProtoPropertiesByDefault: true,
                                allowProtoMethodsByDefault: true
                           }
                        }))

app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Server started on: http://localhost:${app.get('port')}`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/employee', employeeController);
app.use('/employee', employeeList);