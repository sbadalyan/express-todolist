'use strict';

class ItemApiController{
	createItem(req, res){
		res.json({
			status:'ok'
		});
	}
}

module.exports = new ItemApiController();
