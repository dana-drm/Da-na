import React, { Component } from 'react';
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./EmailTimeline.jsx');
var Description = require('./EmailDescription.jsx');
var Header = require('./EmailHeader.jsx');


export default class EmailTimeline extends Component {


  render(){
      let cells = [];
      let emailKey = this.props.emailKey;
      this.props.stages.forEach(function(stage) {
        if(stage.id < emailKey){
          cells.push(
            <Col xs={12} md={3}>
            <Thumbnail src="src/assets/checkmark.png" alt="242x200" style={style}>
              <h5> {stage.description} </h5>

            </Thumbnail>
            <p> {stage.description_detail}</p>
            </Col>

          );
        }
         else {
          cells.push(
            <Col xs={12} md={3}>
            <Thumbnail src="src/assets/waiting.png" alt="242x200" style={style}>
              <h5> {stage.description} </h5>
            </Thumbnail>
            <p> {stage.description_detail}</p>
            </Col>

          );

        }
      });


    return (
        <div style={style} className="center-align row donorStats">
        <div className="row" style={timelineStyle}>
        {cells}
        </div>
        </div>
      );
    }
  }
