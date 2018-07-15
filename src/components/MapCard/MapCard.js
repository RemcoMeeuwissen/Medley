import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const StyledCard = styled(Card)`
  padding: 0.5em 0 0 0;
`

const StyledTypography = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

class MapCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <StyledCard>
        <CardContent>
          <StyledTypography variant="title">{this.props.name}</StyledTypography>
        </CardContent>
      </StyledCard>
    )
  }
}

export default MapCard
