import ajax from '@fdaciuk/ajax';

import config from '../config';

class ItemApiService{
	createItem(item){
		ajax().post(`${config.url}/api/item`, item);
	}
}

export default new ItemApiService();
