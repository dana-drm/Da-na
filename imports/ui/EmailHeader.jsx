import React, { Component } from 'react';
import {Grid , Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap'


export default class EmailHeader extends Component {


  render(){
    let style = {
      backgroundImage: 'url(' + '/src/assets/PCRF_Logo1.jpg' + ')',
      "min-height": "300px",
      "background-size": "cover",
    };



    return (
      <Jumbotron style={style} responsive>

      </Jumbotron>
    );
  }
}
