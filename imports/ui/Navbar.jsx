import React, { Component } from 'react';
import classnames from 'classnames';
import Accounts from './Accounts.jsx';
import { Link } from 'react-router';

class Navbar extends Component {

  render() {
    return (
      <div className="navigation">
        <nav className="nav navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"> Dana </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
