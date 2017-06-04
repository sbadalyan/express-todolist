import ajax from '@fdaciuk/ajax';

import config from '../config';

const request = ajax({
	headers: {
    	'content-type': 'application/json',
    	
    }
});

class ItemApiService{
	
	createItem(item){
		return request.post(`${config.url}/api/items`, item);
	}
	readItems(){
		return request.get(`${config.url}/api/items`);
	}
	deleteItem(itemId){
		return request.delete(`${config.url}/api/items/${itemId}`)
	}
	updateItem(itemId, data){
		return request.put(`${config.url}/api/items/${itemId}`, data)
	}
}

export default new ItemApiService();
