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
    currentUser: PropTypes.object,
};

export default createContainer((props) => {
  return {
    currentUser: Meteor.user()
  };
}, App);
