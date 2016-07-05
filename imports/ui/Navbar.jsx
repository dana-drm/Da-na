import React, { Component } from 'react';
import classnames from 'classnames';
import Accounts from './Accounts.jsx';

class Navbar extends Component {

  render() {
    return (
      <div className="navigation">
        <nav className="nav navbar-default navbar-fixed-top">
          <div className="navbar-header">
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
