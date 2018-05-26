import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <header>{props.applicationName}</header>
);

Header.propTypes = {
    applicationName: PropTypes.string,
};

Header.defaultProps = {
    applicationName: 'khihigifyifyfi',
};

export default Header;