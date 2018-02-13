import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openModal, removeEvent } from '../../actions/action';
import './Modal.css';
import NewModal from './New';

class Modal extends Component {

  handleClick = () => {
    this.props.openModal(false)
    this.props.removeEvent(this.props.data);
    
  }

  render() {
    // { isOpen } = this.props;
    return ( 
      <div className="Modal-wrapper">
        {this.props.isOpen ? 
          (
            <div>
              <div className="Modal-window">
                <div className="Modal-border">
                  <div className="Modal-main">
                    <NewModal data={this.props.data} />
                  </div>
                </div>
              </div>
              <div className="Modal-overlay" onClick={this.handleClick}></div>
            </div>
          ) 
        : null}
      </div>
    )
  }
}

const MapStateToProps = (state) => ({
  data: state.modalState.modalData,
  isOpen: state.modalState.bool
})

export default connect(MapStateToProps, {openModal, removeEvent})(Modal);