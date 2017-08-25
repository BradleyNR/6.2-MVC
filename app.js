const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./router');
//absolute path
const path = require('path');

const app = express();

//database
let database = process.env.MONGODB_URI || 'mongodb://localhost/test';
mongoose.connect(database);

//absolute path
app.use('/static', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//middleware
app.use(bodyParser.urlencoded({ extended: false}));

//passing app into routes
routes(app);

app.listen(process.env.PORT || 3000);

// module.exports = app;
