import React from 'react';

const SearchForm = () => {


    return (
        <form className="barraDeBusqueda" action="/artistsearch" >
            <input type="search"
                id="artistSearch" name="q" aria-label="Search through site content"
                placeholder="Search your favorite artist here" />
        </form>
    )
}

export default SearchForm;
