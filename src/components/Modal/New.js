import React, { Component } from 'react';

import { byPropKey } from '../../Helper/Helper';


class New extends Component {
  state = {
    start: null,
    end: null,
  }

  componentDidMount() {
    const { data } = this.props
    this.setState({start: data.start, end: data.end })
  }

  handleSubmit = (event) => {

  }

  render() {
    const { start, end } = this.state
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input name="start" value={start || ''} type="time" placeholder="Start Date" onChange={event => this.setState(byPropKey('start', event.target.value))} />
          <input name="end" value={end || ''}  type="time" placeholder="End Date" onChange={event => this.setState(byPropKey('end', event.target.value))} />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default New