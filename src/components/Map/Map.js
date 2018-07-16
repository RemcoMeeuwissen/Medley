import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import Typography from '@material-ui/core/Typography'

class Map extends Component {
  static propTypes = {
    map: PropTypes.object
  }

  render() {
    if (this.props.map === undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Typography variant="display3" color="primary">
          {this.props.map.name}
        </Typography>
      </div>
    )
  }
}

export default Map
