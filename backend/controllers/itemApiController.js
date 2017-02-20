'use strict';
const mongo = require('promised-mongo');
const dbService = require('../services/dbService');

class ItemApiController{
	createItem(item){
		return dbService.items.insert(item);
	}
	readItems(){
		return dbService.items.find().toArray();
	}
	deleteItem(itemId){
		return dbService.items.remove({
			_id: mongo.ObjectId(itemId)
		});
	}
}

module.exports = new ItemApiController();
