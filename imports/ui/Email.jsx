
import React, { Component } from 'react';
import { Tabs, Tab, Badge, Button, Nav, NavItem, Checkbox, PageHeader, Grid, Row, Col } from 'react-bootstrap';
let Dashboard = require('./Dashboard.jsx');
let ReactDOM = require('react-dom');
let EmailTemplate = require('./EmailTemplate.jsx');
let DonorTable = require('./DonorTable.jsx');


export default class Email extends Component {

  constructor(props) {
    super(props);
  }



  render() {


  let StageDonors = {};

  let DonorsObject = this.props.donors;
  let BeneficiariesObject = this.props.campaigns;
  let stage = this.props.emailKey;

  let BeneficiaryKeys = Object.keys(this.props.campaigns);
  let DonorKeys = Object.keys(this.props.donors);

  BeneficiaryKeys.forEach(function(Bkey) {
    console.log("Bkey", Bkey);
    var Beneficiary = BeneficiariesObject[Bkey];
    console.log("Beneficiary", Beneficiary);
    if (Beneficiary.campaign_stage == stage) {

    }
  })




  let variables = [];
  let donorsData = [];
  let keys = Object.keys(this.props.campaigns);
  let count = 0;
  let campaign_keys;
  for (let key in keys){
    let campaign = this.props.campaigns[keys[key]];
    campaign_keys = Object.keys(campaign);
  }
  keys = Object.keys(this.props.donors);
  //  console.log("keys", keys);
  let donor_keys;
  for (let key in keys){
    //console.log("keys[key]", keys[key]);
    let donor = this.props.donors[keys[key]];
  //  console.log("donor", donor);
    donor_keys = Object.keys(donor);
  }

  let html_variables = [];

  donorsData = ['arushij@stanford.edu', 'bduran@stanford.edu', 'belce@stanford.edu', 'arushij@stanford.edu', 'bduran@stanford.edu', 'belce@stanford.edu']
  let donors = []
  //  console.log('this.props =', this.props);
  donorsData.forEach(function(donor) {
      donors.push(
          <Checkbox checked>
            {donor}
          </Checkbox>
        );
      });


    campaign_keys.forEach(function(key) {
        html_variables.push(
            <h6>
              [{key}]
            </h6>
          );
        });

    donor_keys.forEach(function(key) {
        html_variables.push(
            <h6>
              [{key}]
            </h6>
          );
        });


    return (

      <div>
        <Grid>
        <PageHeader> <small> Email Creation </small> </PageHeader>
        <h5> In the text box below, we have provided a email template based upon the stage of the beneficiaries selected.</h5>
        <h5> You are currently in <b> Stage {this.props.emailKey} </b></h5>
        <h5> Any text inside [ ] will be replced with the correct information when the email is sent </h5>
        <h5> The available replacement options are located below. </h5>
          <Row>
            <Col xs={12} md={9} >
              <PageHeader> <small> Email Template </small> </PageHeader>
              <Panel>
                <EmailTemplate emailKey={this.props.emailKey}  campaigns={this.props.campaigns} donors={this.props.donors}/>
              </Panel>
            </Col>

            <Col xs={12} md={3} >
                <PageHeader> <small> Variable Options </small> </PageHeader>
                  {html_variables}
                <DonorTable donors={donors} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
