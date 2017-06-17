import React, { Component } from 'react';

import { Image } from 'spectacle';
import logo from './logo.svg';

class ReduxLogo extends Component {
  render() {
    const { size } = this.props;
    return (
      <Image
        src={logo}
        alt="Redux"
        width="20%"
        style={{
          maxHeight: size === 'small' ? '100px' : '200px',
          ...size === 'small' ? { margin: '0' } : undefined
        }}
        textAlign="center"
      />
    );
  }
}

export default ReduxLogo;
