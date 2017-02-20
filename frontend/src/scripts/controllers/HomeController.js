import React from 'react';

import TodoListController from '../controllers/TodoListController'

export default class HomeController extends React.Component {
	render (){
		return (
			<div>
				<TodoListController/>
			</div>
		);
	}

}