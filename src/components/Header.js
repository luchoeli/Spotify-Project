import React from 'react';
import SearchForm from './SearchForm';

const Header = (props) => {
    if (props.haveSearchBar){ 
        return (
            <div>
                <header className='headerALaIzquierda'> <img id='logoApp' src='https://image.flaticon.com/icons/png/128/246/246141.png' alt={'logo de spotify'}/></header>
                <SearchForm />
            </div>
        )
    }
    else
        {
            return  <header className='headerAlCentro'> <img id='logoApp' src='https://image.flaticon.com/icons/png/128/246/246141.png' alt={'logo de spotify'}/> </header>
        }
        
}
    
export default Header;
