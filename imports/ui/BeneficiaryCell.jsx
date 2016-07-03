import React, { Component, PropTypes } from 'react';
import { Thumbnail, Row, Col } from 'react-bootstrap';

// Task component - represents a single todo item
export default class BeneficiaryCell extends Component {
  render() {
    console.log(this.props.stageKey)

    return (
      <div>
        <Thumbnail>
          <h5>
            Campaign Name: {this.props.name}
          </h5>
          <h6>
          <p>Location: {this.props.location} </p>
          <p>Status: {this.props.stage}</p>
          </h6>
        </Thumbnail>
      </div>
    );
  }
}

BeneficiaryCell.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  stage: PropTypes.string.isRequired,
};
