var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();
var connectionString = 'postgres://postgres:Colour45@localhost/sandbox';
var massiveInstance = massive.connectSync({connectionString: connectionString});
app.set('db', massiveInstance);
var db = app.get('db');

var mainCtrl = require('./controller');


app.use(bodyParser.json());
app.use(cors());

app.get('/planes', mainCtrl.getPlanes);
app.post('/planes', mainCtrl.addPlane);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
