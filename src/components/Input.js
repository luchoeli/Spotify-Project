import React from 'react';

class Input extends React.Component {
    
    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch (event) {
        event.preventDefault();

        this.props.accion(event.target.attributes.value);
    }

    render() {
        return (
            <input className="searchField" onClick={ this.onSearch } placeholder="Search for your favorite artist here" />
        )
    }
};

export default Input;
