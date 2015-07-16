process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 8000;

var express = require('./config/express.js');

var app = express();

console.log('Server running');
app.listen(process.env.PORT);
console.log(process.env.PORT);

module.exports = app;