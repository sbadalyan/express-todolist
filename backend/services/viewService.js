'use strict';
const fs = require('fs');

class ViewService{
	read(name){
		return new Promise((resolve, reject) => {
			fs.readFile(`${__dirname}/../views/${name}.html`, (error, data) => {
			   if (error) {
			      reject(error);
			      return;
			   }
			  resolve(data.toString()); 
			});
		});
	}

}

module.exports = new ViewService();