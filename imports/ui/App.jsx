import React, { Component, PropTypes } from 'react';
import Dashboard from './Dashboard.jsx';
import Accounts from './Accounts.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navbar from './Navbar.jsx';

class App extends Component {

  render(){
    return (
      <div className="container">
        { this.props.currentUser ?
          <div>
            <Navbar/>
            <Dashboard />
          </div>
          :
          <Accounts/>
        }
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer((props) => {
  return {
    children: props.children,
    currentUser: Meteor.user()
  };
}, App);
