import React, { Component } from 'react';
let Airtable = require('airtable');
import { Tabs, Tab, Badge, Button, Nav, NavItem, PageHeader, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import BeneficiaryGrid from './BeneficiaryGrid.jsx';

export default class Dashboad extends Component {

  constructor(props) {
    Session.set("response", {})
    super(props);
    this.stageKey =  1;
    this.bindData = this.bindData.bind(this);
    this.state = {
      stageKey: 1,
      donors: [],
      campaigns: Session.get("response"),
    };
  }



  handleSelect(eventKey) {
    console.log(eventKey)
    ReactDOM.render(<BeneficiaryGrid stageKey={eventKey} donors={this.state.donors} campaigns={this.state.campaigns}/>, document.getElementById('BeneficiaryGrid'));
  };

  bindData(event) {
      var _this = this;

      //later inside the closed function
      _this.setState({content: response});
  }

  render() {
    let content;

    // content = Meteor.call( 'getCommentsWrapAsync', function( error, response ) {
    //   if ( error ) {
    //     // If our API returned an error, we'd see it in the console.
    //     console.log( error );
    //   } else {
    //     // console.log(response)
    //     // content = response ;
    //     // this.setState({
    //     //   campaigns: response['content'],
    //     // });
    //     Session.set("response", response);
    //     return response
    //   }
    // });

    let answer;
    let result = axios.get('https://api.airtable.com/v0/appfroa8YN4yjSWIk/UOI?maxRecords=50&view=Main%20View&api_key=keyWQTQBrkgbMOE4w')
      .then(function (response) {
        //this.setState({content: response})
        answer = response;
        Session.set("response", response)
        console.log("setting state to content", response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(result)
      console.log(answer)



    console.log("session is", Session.get("response"))

    console.log("sontent is", content)

    let rightButtonStyle = {
      display: 'inline',
      marginLeft: '30px'
    };

    let stageCounts = {
      "Transportation to Treatment Location": 0,
      "Surgery Completed": 0,
      "Recovery Period": 0,
      "Treatment Completed": 0
    };

    let gridStyle = {
      clear: 'left'
    };

    let rowStyle = {
      display:'flex',
      flexWrap: 'wrap'
    };
    let task = { _id: 1, text: 'This is task 1' };

    return (



      <div className ="container">
        <Grid className="container-fluid" style={gridStyle}>
          <PageHeader>
            <small> Treatment Abroad </small>
          </PageHeader>
          <Row style={rowStyle}>
            <Nav bsStyle="tabs" ActiveKey={1} justified onSelect={this.handleSelect}>
                <NavItem eventKey={1}> Transported <span className="badge">{stageCounts["Transportation to Treatment Location"]}</span> </NavItem>
                <NavItem eventKey={2}> Surgery Completed <span className="badge">{stageCounts["Surgery Completed"]}</span> </NavItem>
                <NavItem eventKey={3}> Recovery Period <span className="badge">{stageCounts["Recovery Period"]}</span> </NavItem>
                <NavItem eventKey={4}> Treatment Completed <span className="badge">{stageCounts["Treatment Completed"]}</span> </NavItem>
            </Nav>

            <div id="BeneficiaryGrid">
              <BeneficiaryGrid stageKey="1" donors={this.state.donors} campaigns={this.state.campaigns}/>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
