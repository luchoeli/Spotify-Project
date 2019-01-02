import React from 'react';
import PropTypes from 'prop-types';

class SpotifyComp extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    const { children } = this.props;

    return (
    	<div id="container">
        {children} 
    	</div>
    )
  }
}

export default SpotifyComp;
