import React from 'react';

const Input = props => {
  
    onSearch = (event) => {
        event.preventDefault();

        props.accion(event.target.attributes.value);
    }
 
    return (
        <input class="searchField" onClick={ this.onSearch } placeholder="Search for your favorite artist here" />
    )
};

export default Input;