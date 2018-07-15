import { connect } from 'react-redux'
import Maps from '../components/Maps'

const mapStateToProps = state => ({
  maps: state.maps
})

export default connect(mapStateToProps)(Maps)
