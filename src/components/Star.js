import React from 'react'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

// https://react-icons.netlify.com/#/icons/io
// TiStarFullOutline TiStarOutline

const Star = props => {
    const { isFav, onClick } = props;
  
    return <span onClick={onClick}> 
                { isFav ? <TiStarFullOutline /> : <TiStarOutline/> }
           </span>
  };
  export default Star;