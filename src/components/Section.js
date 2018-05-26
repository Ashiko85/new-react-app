import React, {Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Section extends PureComponent {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };
  render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

export default Section;
