import React from 'react';

export default class Input extends React.Component{
    render (){
        return(
          <input
            className="input"
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onKeyDown={this.props.onKeyDown}
          />
        );
    }
}