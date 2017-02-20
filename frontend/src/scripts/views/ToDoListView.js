import React from 'react';

import itemApiService from '../services/itemApiService';

import Input from '../components/Input.js';

export default class ToDoListView extends React.Component{

    constructor(props){
        super(props);
        
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    onKeyDown(event){
        if(event.keyCode==13){
            let item = event.target.value;
            this.props.createItem({title:item});
            event.target.value = '';
        }
    }
    renderTodoList(){
        return this.props.todoItemList.map(item=>{
            return(
                <div key={item._id} className="todo-block">
                    <Input
                        inputClass="todo-checkbox"
                        type="checkbox"
                        onClick = {()=>this.props.updateItemStatus(item._id)}
                    />
                    <Input
                        inputClass="todo-item"
                        type="text"
                        value={item.title}
                        readOnly
                    />
                    <svg viewBox="0 0 24 24" className="delete-item" onClick={()=>this.props.deleteItem(item._id)} xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
            );
        })
    }
    render(){
        return(
         <div className="todo">
            <Input
                inputClass="todo-create"
                type="text"
                name="todo"
                placeholder="Type and hit Enter to add"
                onKeyDown={(event)=>this.onKeyDown(event)}
            />
             {this.renderTodoList()}
         </div>
        );
    }
}

