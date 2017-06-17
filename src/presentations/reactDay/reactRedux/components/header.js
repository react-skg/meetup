import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, Heading, Appear, Layout } from 'spectacle';
import Logo from './logo';

class Header extends Component {
  static defaultProps = {
    compact: true,
    title: '',
    subtitle: '',
    withAnimations: false
  };

  renderWithAnimations = component => (
    this.props.withAnimations ? (
      <Appear>{component}</Appear>
    ) : (
      component
    )
  )

  renderTitle = () => {
    const { title, compact } = this.props;
    const styles = compact ? { margin: '0' } : {};

    return this.renderWithAnimations(
      <Heading textColor="#adbfe2" style={styles} size={compact ? 6 : 4}>
        {title}
      </Heading>
    );
  };

  renderSubtitle = () => {
    const { subtitle, compact } = this.props;
    return compact ? null : (
      this.renderWithAnimations(
        <Text>
          {subtitle}
        </Text>
      )
    );
  }

  renderLogo = () => {
    const { compact } = this.props;

    return <Logo size={compact ? 'small' : 'large'} />;
  }

  render() {
    const { compact } = this.props;
    const HeadingWrapper = !compact ? 'div' : Layout;
    const headingStyles = !compact ? {} : {
      justifyContent: 'flex-start',
      alignItems: 'center'
    };

    return (
      <HeadingWrapper style={headingStyles}>
        {this.renderSubtitle()}
        {this.renderLogo()}
        {this.renderTitle()}
      </HeadingWrapper>
    );
  }
}

Header.propTypes = {
  compact: PropTypes.bool
};

export default Header;
