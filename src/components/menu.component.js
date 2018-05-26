import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Menu extends PureComponent {
  render() {
    return (
        <Fragment>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/count">Count</Link>
        </Fragment>
    );
  }
}

export default Menu;
