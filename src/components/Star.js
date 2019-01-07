import React from 'react'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

// https://react-icons.netlify.com/#/icons/io
// TiStarFullOutline TiStarOutline   

export default class Star extends React.Component {
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e){
        console.log(e.target)
    }
    render() {
        if (this.props.isFav)
        /*
        */
            return (
                <div>
                    <TiStarFullOutline/>
                </div>
            );
        else{
            return(
                <TiStarOutline/>
            );
        }
    }
}