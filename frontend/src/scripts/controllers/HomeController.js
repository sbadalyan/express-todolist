import React from 'react';

import TodoListView from '../views/ToDoListView'

export default class HomeController extends React.Component {
	render (){
		return (
			<div>
				<TodoListView/>
			</div>
		);
	}

}