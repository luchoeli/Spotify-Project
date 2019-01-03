import React from 'react';
import Input from './Input.js';
import { searchArtists } from '../actions';
import { connect } from 'react-redux';

class Header extends React.Component {
  
    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch (text) {
        this.props.searchArtists(text);
    }


    render() {

        if (this.props.haveSearchBar){ // boolean prop
            return (
                <div>
                    <header className='headerALaIzquierda'> LOGO PROPIO DE LA APP [X] </header>
                    <Input accion={ this.onSearch } />
                </div>
            )
        }
        else
            {
                return  <header className='headerCentrado'> LOGO PROPIO DE LA APP [X] </header>
            }
    }

};

const mapStateToProps = (state) => {
  return {
    favsElements: state.spotifyReducers.favsElements
  }
}

const mapDispatchToProps = dispatch => ({
  searchArtists: artist => dispatch(searchArtists(artist))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Header)