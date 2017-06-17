import React, { Component } from 'react';
import { Slide } from 'spectacle';

const SlideWithBackgroundHOC = WrappedSlide => class SlideWithBackground extends Component {
  render() {
    return React.cloneElement(<WrappedSlide />, { bgImage: 'https://images.unsplash.com/photo-1491598601902-712af90cc6ee?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=', ...this.props });
  }
};

export default SlideWithBackgroundHOC(Slide);
