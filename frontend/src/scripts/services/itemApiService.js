import ajax from '@fdaciuk/ajax';

import config from '../config';

class ItemApiService{
	
	createItem(item){
		return ajax().post(`${config.url}/api/items`, item);
	}
	readItems(){
		return ajax().get(`${config.url}/api/items`);
	}
	deleteItem(itemId){
		return ajax().delete(`${config.url}/api/items/${itemId}`)
	}
}

export default new ItemApiService();
