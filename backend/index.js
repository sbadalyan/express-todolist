'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const itemApiController = require('./controllers/itemApiController');

const viewService = require('./services/viewService');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
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


app.post('/api/items', function(req, res){
	const item = {
		title: req.body.title
	};
	itemApiController.createItem(item).then(() => {
		res.json({
			status:'ok'
		});
	}).catch((error)=>{
		console.log(error);
		res.status(500);
		res.json({
			status:'error'
		});
	});
});

app.get('/api/items', function(req, res){
	itemApiController.readItems().then((data)=>{
		console.log(data);
		res.json(data);
	});
});

app.delete('/api/items/:id', function(req, res){
	console.log(req.params.id);
	itemApiController.deleteItem(req.params.id).then(() => {
		res.json({
			status:'ok'
		});
	}).catch((error)=>{
		console.log(error);
		res.status(500);
		res.json({
			status:'error'
		});
	});
});
app.put('/api/items/:id', function(req, res){
	console.log(req.params.id);
	console.log( req.body.data, 'data');
	res.json({
			status:'ok'
	});
});

app.listen(1111);