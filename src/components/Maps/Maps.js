import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import MapCard from '../MapCard'

const StyledMaps = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 1em;
`

class Maps extends Component {
  static propTypes = {
    maps: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <Typography variant="display3" color="primary">
          Your maps
        </Typography>

        <StyledMaps>
          {this.props.maps.allIds.map(id => (
            <MapCard key={id} name={this.props.maps.byId[id].name} />
          ))}
        </StyledMaps>
      </div>
    )
  }
}

export default Maps
