import React from 'react';

class Input extends React.Component {
    
    render() {
        return (
            <form action="/artistsearch" > 
                    <input  type="search" 
                    id="artistSearch" name="q" aria-label="Search through site content"
                    placeholder="Search your favorite artist here" />
            </form>
        )
    }
};

export default Input;
