import React, { Component } from 'react';
let Airtable = require('airtable');
import { Tabs, Tab, Badge, Button, Nav, NavItem, PageHeader, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import BeneficiaryGrid from './BeneficiaryGrid.jsx';

export default class Dashboad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stageKey: 1,
      donors: [],
      campaigns: [],
    };
  }

  componentWillMount() {
    axios.get('https://api.airtable.com/v0/appfroa8YN4yjSWIk/UOI?maxRecords=5&view=Main%20View&api_key=keyJoo0QH6ip5yH4S')
      .then(response => this.setState({ campaigns: response.data.records }));
  }


  handleSelect(eventKey) {
    console.log(eventKey)
    ReactDOM.render(<BeneficiaryGrid stageKey={eventKey} donors={this.state.donors} campaigns={this.state.campaigns}/>, document.getElementById('BeneficiaryGrid'));
  };


  render() {
    console.log("campaigns", this.state.campaigns);
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
