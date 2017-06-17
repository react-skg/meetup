import React, { Component } from 'react';

import { Deck, Slide } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import slidesImports from './slides';

import './main.css';

const initialTheme = createTheme(
  {
    primary: '#042B35',
    secondary: '#D2A03E',
    tertiary: '#FD853D',
    quartenary: '#A7A7A7'
  },
  {
    primary: 'Fira Code'
  }
);

export const theme = {
  ...initialTheme,
  screen: {
    ...initialTheme.screen,
    components: {
      ...initialTheme.screen.components,
      code: {
        ...initialTheme.screen.components.code,
        color: initialTheme.screen.colors.quartenary
      },
      text: {
        ...initialTheme.screen.components.text,
        color: initialTheme.screen.colors.quartenary
      },
      link: {
        ...initialTheme.screen.components.link,
        color: initialTheme.screen.colors.secondary
      }
    }
  }
};

export default class ReactRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    Promise.all(slidesImports).then((slideComponents) => {
      const slides = slideComponents.map(
        (slide = { default: '' }) => slide.default
      );
      this.setState({ slides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck
        theme={theme}
        progress="pacman"
      >
        {slides.map((slide, index) => React.cloneElement(slide, { key: index }))}
      </Deck>
    );
  }
}
