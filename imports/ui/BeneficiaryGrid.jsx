import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, Badge, Button, Nav, NavItem, PageHeader, Grid, Row, Col } from 'react-bootstrap';
import BeneficiaryCell from './BeneficiaryCell.jsx';
import Email from './Email.jsx';
import ReactDOM from 'react-dom';

export default class BeneficiaryGrid extends Component {

  handleEmailTemplateOpen() {
    console.log("rendering email")
    ReactDOM.render(<Email emailKey={this.props.stageKey} campaigns={this.props.campaigns}  donors={this.props.donors}/>, document.getElementById('render-target'));
  };



  render() {
    //console.log(Meteor.connection._methodHandlers)
    campaigns = [];
    // let value_object = Meteor.call('loadDataFromAirtable')
    // Meteor.apply('loadDataFromAirtable', [campaigns], true, function(err,data){
    //   if (err)
    //     console.log(err);
    //   else{
    //     console.log("callback data is", data)
    //     //campaigns = JSON.parse(data);
    //   //console.log(data);
    //   }
    // });

    // values = Session.get('campaigns');
    // console.log("returned value is", values)
    let gridStyle = {
      clear: 'left'
    };

    let rowStyle = {
      display:'flex',
      flexWrap: 'wrap'
    }
    let ButtonStyle = {
      display: 'center',
      marginBottom: '10px',
      borderRadius: '30px'
    }

    let stageMap = {
      1: "Transportation to Treatment Location",
      2: "Surgery Completed",
      3: "Recovery Period",
      4: "Treatment Completed"
    }
    let rows = [];
    let keys = Object.keys(this.props.campaigns);
    console.log("stage key is are", this.props.stageKey)
    console.log("campaigns are", this.props.campaigns)
    for (let key in keys){
      console.log(keys[key])
      let campaign_array = this.props.campaigns[keys[key]];
      for (let c in campaign_array){
        campaign = campaign_array[c]
        //var donor = this.props.donors[keys[key]];
          if (campaign.stage == stageMap[this.props.stageKey]) {
            rows.push(
              <Col xs={12} md={3}>
                <BeneficiaryCell
                  campaign={campaign}
                  name={campaign.campaign_name}
                  stage={campaign.campaign_stage}
                  img={campaign.campaign_photo}
                  treatment={campaign.campaign_treatment}
                  condition={campaign.campaign_condition}
                  location={campaign.campaign_location}
                  />
              </Col>
          );
        }
      }
    }

    return (
    <div style={gridStyle}>
     <Button
      style={ButtonStyle}
      onClick={this.handleEmailTemplateOpen.bind(this)}
      bsStyle="primary"
      bsSize="large">Update Donors
    </Button>
        <Grid className="container-fluid" style={gridStyle}>
          <Row style={rowStyle}>
          {rows}
          </Row>
        </Grid>
    </div>
    );
  }
}

BeneficiaryGrid.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  campaigns: PropTypes.object.isRequired,
  donors: PropTypes.array.isRequired,
  stageKey: PropTypes.string.isRequired,
};
