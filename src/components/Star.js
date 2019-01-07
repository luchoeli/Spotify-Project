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
        console.log(e)
        //this.props.on
    }
    render() {
        if (this.props.isFav)
        /*
        */
            return (
                <span onClick={this.props.onClick}>
                    <TiStarFullOutline/>
                </span>
            );
        else{
            return(
                <TiStarOutline/>
            );
        }
    }
}