'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const itemApiController = require('./controllers/itemApiController');

const viewService = require('./services/viewService');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const staticOptions = {
  maxAge: 60
};
app.use('/static/styles', express.static(`${__dirname}/../frontend/dist/styles`, staticOptions));
app.use('/static/scripts', express.static(`${__dirname}/../frontend/dist/scripts`, staticOptions));
app.use('/static/images', express.static(`${__dirname}/../static/images`, staticOptions));

app.get('/', function(req, res){
	viewService.read('index').then((data)=>{
		res.send(data);
	}).catch((error)=>console.log(error));
});


app.post('/api/item', function(req, res){
	itemApiController.createItem(req, res);
});
app.listen(1111);