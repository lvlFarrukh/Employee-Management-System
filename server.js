require('./modal/db')
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const employeeController = require('./contoller/employeeController')

const app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Server started on: http://localhost:${app.get('port')}`);
});

app.use('/employee', employeeController);