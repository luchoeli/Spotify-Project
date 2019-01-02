import React from 'react';
import Home from '../views/Home.js';
import PropTypes from 'prop-types';

class SpotifyComp extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    const { children } = this.props;

    return (
    	<div id="container">
    		<Home body={children} /> 
    	</div>
    )
  }
}

export default SpotifyComp;
