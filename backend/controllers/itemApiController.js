'use strict';
const mongo = require('promised-mongo');
const dbService = require('../services/dbService');

class ItemApiController{
	createItem(item){
		return dbService.items.insert(item);
	}
	readItems(){
		return dbService.items.find().sort( { title: 1 } ).toArray();
	}
	deleteItem(itemId){
		return dbService.items.remove({
			_id: mongo.ObjectId(itemId)
		});
	}
	updateItem(itemId, data){
		return dbService.items.update({
			_id: mongo.ObjectId(itemId)
		}, {
			$set: data
		});
	}
}

module.exports = new ItemApiController();
