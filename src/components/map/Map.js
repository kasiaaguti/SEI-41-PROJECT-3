import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import MapSecond from './MapSecond'




class Map extends React.Component {
  constructor() {
    super()
    this.state = { points: null }

  }

  componentDidMount(){
    this.getLocationList()
  }

  getLocationList() {
    axios.get('/api/locations/')
      .then(res => {
        this.setState({ points: res.data },() => console.log(this.state.points))
      })
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.points) return null
    return (
      <main>
        <MapSecond
          center={this.mapCenter}
          markers={this.state.points}

        />
      </main>
    )
  }
}

export default Map
