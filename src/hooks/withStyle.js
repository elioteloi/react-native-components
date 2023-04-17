import React, {Component} from 'react';

import {colors, fonts, metrics, family} from '../styles';

const withStyle = WrappedComponent =>
  class extends Component {
    render() {
      return (
        <>
          <WrappedComponent
            colors={colors}
            fonts={fonts}
            family={family}
            metrics={metrics}
            {...this.props}
          />
        </>
      );
    }
  };

export default withStyle;
