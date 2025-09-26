'use client'

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapDetails = ({coords}) => {
 
  const mapContainer = useRef(null);
  const map = useRef(null);
  const[online,setOnline]=useState(true);
  useEffect(()=>{
    if(navigator.onLine){
      setOnline(true)
    }else{
      setOnline(false)
    }
  },[])
  useEffect(() => {
    if (map.current) return;
    if(!online) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coords,
      zoom: 11,
    });
    if(!online) return;
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    
    new mapboxgl.Marker({color:'red'}).setLngLat(coords).addTo(map.current);
  }, []);

  return (

    <div className='container w-100 mt-5'>
     
      <h3>Exact Location</h3>
    {online&&(

      <div   ref={mapContainer}   className="map-container"  style={{ width: '100%', height: '400px', borderRadius: '10px' }}  />
    )}
    {!online&&(
      <p className='text-danger text-center'>Cant show map, maybe internet problem</p>
    )}
    </div>
  );
};

export default MapDetails;
