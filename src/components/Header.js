import React from 'react';
import Input from './Input.js';

class Header extends React.Component {
  

    render() {

        if (this.props.haveSearchBar){ 
            return (
                <div>
                    <header className='headerALaIzquierda'> <img id='logoApp' src='https://image.flaticon.com/icons/png/128/246/246141.png' alt={'logo de spotify'}/></header>
                    <Input />
                </div>
            )
        }
        else
            {
                return  <header className='headerAlCentro'> <img id='logoApp' src='https://image.flaticon.com/icons/png/128/246/246141.png' alt={'logo de spotify'}/> </header>

            }
    }

};

export default Header;