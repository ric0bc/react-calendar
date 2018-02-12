import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AddEvent extends Component {
  render() {
    return (
      <div>{this.props.location.position}</div>
    )
  }
}

export default withRouter(AddEvent)