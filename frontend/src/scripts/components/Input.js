import React from 'react';

export default class Input extends React.Component{
    render (){
        return(
          <input
            className={`input ${(this.props.inputClass)}`}
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onKeyDown={this.props.onKeyDown}
            onClick={this.props.onClick}
            readOnly = {this.props.readOnly}
            checked= {this.props.checked}
          />
        );
    }
}