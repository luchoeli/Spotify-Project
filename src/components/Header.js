import React from 'react';
import SearchForm from './SearchForm';

const Header = (props) => {
    if (props.haveSearchBar) {
        return (
            <div id="headerDiv">
                <header className='headerALaIzquierda'> <img id='logoApp' src='https://image.flaticon.com/icons/png/512/8/8710.png' alt={'logo de spotify'} /></header>
                <SearchForm />
            </div>
        )
    }
    else {
        return <header className='headerAlCentro'> <img id='logoApp' src='https://image.flaticon.com/icons/png/512/8/8710.png' alt={'logo de spotify'} /> </header>
    }

}

export default Header;
