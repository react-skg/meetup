import React from 'react';
import { Image } from 'spectacle';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';

const Icons = ({ name = 'twitter' }) => (
  <Image
    style={{ maxHeight: '100px' }}
    src={name === 'twitter' ? twitterIcon : githubIcon}
  />
);

export default Icons;
