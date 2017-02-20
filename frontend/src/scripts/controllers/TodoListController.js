import React from 'react';

import itemApiService from '../services/itemApiService';
import TodoListView from '../views/ToDoListView'

export default class TodoListController extends React.Component {
	constructor(props){
		super(props);

 		this.state = {
            todoItemList: []
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.createItem = this.createItem.bind(this);
	}
	componentWillMount(){
		this.loadItems();
	}
	loadItems(){
		itemApiService.readItems().then((response)=>{
			console.log('readItems');
            this.setState({
            	todoItemList:response
            })
        });
	}
	createItem(item){
		itemApiService.createItem(item).then((response)=>{
            this.loadItems();
        });

	}
	deleteItem(itemId){
		itemApiService.deleteItem(itemId).then((response)=>{
			console.log('deleteItem');
			this.loadItems();
		});
	}
	render (){
		return (
			<div>
				<TodoListView
					todoItemList={this.state.todoItemList}	
					deleteItem={this.deleteItem}	
					createItem={this.createItem}			
				/>
			</div>
		);
	}

}
