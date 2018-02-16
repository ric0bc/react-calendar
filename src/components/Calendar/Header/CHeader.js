import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';

import './CHeader.css'

class CHeader extends Component {

  componentDidMount() {
    console.log(moment())
  }

  render() {
    return (
      <div role="presentation" className="c-header">
        <div className="c-header-leftspace">
          <div className="left-space"></div>
        </div>
        <div role="presentation" className="c-heaeder-content">
          <div role="row" className="c-header-row">
            <div role="presentation" className="c-header-content-wrap">
              <div role="columnheader" className="header-content">
                <div className="header-title-wrap">
                  <h2 className="header-title">
                    <div className="day-name">{moment().format('dddd')}</div>
                    <div className="day-number">{moment().week()}</div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  view: state.viewState.view
})

export default connect(mapStateToProps, null)(CHeader)