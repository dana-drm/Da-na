import React, { Component } from 'react';
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'
var TimeLine = require('./EmailTimeline.jsx');
var Description = require('./EmailDescription.jsx');
var Header = require('./EmailHeader.jsx');


export default class DonorTable extends Component {


  render(){
    let leftButtonStyle = {
      display: 'inline',
      marginRight: '30px'
    };

    let ButtonStyle = {
      display: 'inline',
      marginLeft: '30px'

    };

    let style = {
      textAlign: "center",
    };

    return (
      <div className="donorList">
          <PageHeader><small> Donors </small></PageHeader>
            <Col xs={12}>
              {this.props.donors}
            </Col>
            <Button justified
              style={ButtonStyle}
              bsStyle="primary"
              bsSize="small">Send Email
            </Button>

        </div>
    );
  }
}
