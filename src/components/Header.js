import React from 'react';
import Input from './Input.js';

class Header extends React.Component {
  

    render() {

        if (this.props.haveSearchBar){ 
            return (
                <div>
                    <header className='headerALaIzquierda'> LOGO PROPIO DE LA APP [X] </header>
                    <Input />
                </div>
            )
        }
        else
            {
                return  <header className='headerAlCentro'> LOGO PROPIO DE LA APP [X] </header>
            }
    }

};

export default Header;