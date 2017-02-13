import React from 'react';

import itemApiService from '../services/itemApiService';

import Input from '../components/Input.js';

export default class ToDoListView extends React.Component{

    constructor(props){
        super(props);
    }
    onKeyDown(event){
        if(event.keyCode==13){
            itemApiService.createItem({
                title: event.target.value
            });
        }
    }
    render(){
        return(
          <Input
            type="text"
            name="todo"
            placeholder="Type and hit Enter to add"
            onKeyDown={(event)=>this.onKeyDown(event)}
          />
        );
    }
}

