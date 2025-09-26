'use client'

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = ({coords,setCoords}) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null); 


  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coords,
      zoom: 11,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    
    marker.current = new mapboxgl.Marker({ color: 'red', draggable: false })
      .setLngLat(coords)
      .addTo(map.current);

  
    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      marker.current.setLngLat([lng, lat]); // move marker
      setCoords([lng, lat]);               // update state

    });
  }, []);

  return (
    <>
      <h3>Mark the Exact Location</h3>
      <div 
        ref={mapContainer} 
        className="map-container" 
        style={{ width: '100%', height: '400px', borderRadius: '10px' }} 
      />
      <p>Selected Coordinates: {coords[1].toFixed(5)}, {coords[0].toFixed(5)}</p>
    </>
  );
};

export default Map;
