import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import style from '../styles/Home.module.css'

const AnyReactComponent = ({ text }) => {
  return (<>
  </>)
}

const handleApiLoaded = (map, maps) => {
  console.log(map, maps);
};

function Index (props) {
  const motelList = [
    {
      lat: 21.0261,
      lng: 105.8536
    }
  ]
  const defaultProps = {
    center: {
      lat: 21.0261,
      lng: 105.8536
    },
    zoom: 16
  };
  const MAP_API_KEY = 'AIzaSyDIk5RXt8zhXowmcXQ6xX31yaNLlG8lRJc';

  const [data, setData] = useState(false);
  useEffect(() => {
    setData(true);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.map}>
      {
        data ? <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        
      </GoogleMapReact> : null
      }
      </div>
  </div>)
}

export default Index;
