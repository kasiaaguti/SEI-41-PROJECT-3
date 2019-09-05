import React from 'react'
import mapboxgl from 'mapbox-gl'
// import axios from 'axios'
// import Geocoder from 'geocoder'
import MapboxGeocoder from 'mapbox-gl-geocoder'
import Auth from '../../lib/Auth'

class MapSecond extends React.Component {
  constructor() {
    super()
    this.markers = []
    this.number = 1
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 10,
      center: [-0.1, 51.5074]
    })
    this.map.scrollZoom.disable()


    this.props.markers.map(point => {
      const el = document.createElement('div')
      el.className = 'marker'

      // el.style.backgroundImage = 'url(' + point.image + ')'
      // customise markers based on category here



      return new mapboxgl.Marker() // add el inside brackets for custom marker
        .setLngLat({ lat: point.coordinates.lat, lng: point.coordinates.lng })
        .addTo(this.map)

        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(Auth.isAuthenticated() ? `
            <main>
              <h1 class="title is-5">${point.name}</h1>

              <h2 class="subtitle is-6">${point.address.buildingNumber}  ${point.address.street}, ${point.address.postcode}</h2>

             <div style="background-image: url('${point.image}'); height: 120px; min-width: 150px; background-repeat: no-repeat; background-size: cover; background-position: center;"></div>

         <button class="popupbutton "> <a href="/locations/${point._id}" class="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Reviews & edit</a> </button>

        <button class="popupbutton"><a href=${point.website} class="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Go to their website</a> </button>




            </main>
          ` :
            `
            <main>
           <h1 class="title is-5">${point.name}</h1>

           <h2 class="subtitle is-6">${point.address.buildingNumber}  ${point.address.street}, ${point.address.postcode}</h2>

             <div style="background-image: url('${point.image}'); height: 120px; min-width: 150px; background-repeat: no-repeat; background-size: cover; background-position: center;"></div>

              <button class="popupbutton"> <a href="/locations/${point._id}" class="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Reviews</a> </button>

        <button class="popupbutton"><a href=${point.website} class="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Go to their website</a> </button>


            </main>
          `))
    })

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      country: 'gb',
      city: 'london'

    }), 'bottom-left')

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')






    // this.map.on('click', this.handleClick)

  }

  // handleClick(e) {
  //   console.log(e)
  //   // console.log(e.lngLat.lat, e.lngLat.lng)
  // }

  render() {
    return (

      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }
}

export default MapSecond
