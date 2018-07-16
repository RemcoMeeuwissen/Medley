import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  let map = undefined

  if (state.maps.allIds.includes(id)) {
    map = state.maps.byId[id]
  }

  return {
    map
  }
}

export default connect(mapStateToProps)(Map)
export { mapStateToProps }
