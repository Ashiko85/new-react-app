import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer>{props.authorInformation}</footer>
);


Footer.propTypes = {
    authorInformation: PropTypes.string,
};

Footer.defaultProps = {
    authorInformation: 'ghigougougo',
};

export default Footer;