import React, { Component } from 'react';

import { Image } from 'spectacle';
import logo from './logo.svg';

class ReduxLogo extends Component {
    render() {
        return (
            <Image
                src={logo}
                alt="Redux"
                width="20%"
                textAlign="center"
            />
        );
    }
}

export default ReduxLogo;