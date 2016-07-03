import React, { Component } from 'react';
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./EmailTimeline.jsx');
var Description = require('./EmailDescription.jsx');
var Header = require('./EmailHeader.jsx');


export default class NextSteps extends Component {


  render(){
    let leftButtonStyle = {
      display: 'inline',
      marginRight: '30px'
    };

    let rightButtonStyle = {
      display: 'inline',
      marginLeft: '30px'

    };

    let style = {
      textAlign: "center",
    };

    return (
      <div style={style} className="center-align row donorStats">
        <Button
          style={leftButtonStyle}
          onClick={this.handleModalOpen}
          bsStyle="primary"
          bsSize="large">Share this story
        </Button>

        <Button
          style={leftButtonStyle}
          onClick={this.handleModalOpen}
          bsStyle="primary"
          bsSize="large">Donate more
        </Button>

      </div>
    );
  }
}
