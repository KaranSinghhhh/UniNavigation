
/*
import React, { useEffect, useRef } from 'react';

function MapItem(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (props.latitude && props.longitude) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: props.latitude, lng: props.longitude },
        zoom: props.zoom || 11,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: props.latitude, lng: props.longitude },
        map: map,
      });

      const infoWindow = new window.google.maps.InfoWindow();

      marker.addListener('click', () => {
        const contentDiv = document.createElement('div');
        const directionsLink = document.createElement('a');
        directionsLink.textContent = 'Get Directions';
        directionsLink.addEventListener('click', (e) => {
          e.preventDefault();
          getUserLocationAndOpenDirections(directionsLink, props.latitude, props.longitude);
        });
        contentDiv.appendChild(directionsLink);

        infoWindow.setContent(contentDiv);
        infoWindow.open(map, marker);
      });
    }
  }, [props.latitude, props.longitude, props.zoom]);

  // Function to get user's location and open directions
  function getUserLocationAndOpenDirections(linkElement, destLat, destLng) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          linkElement.href = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}`;
          window.open(linkElement.href, '_blank');
        },
        () => {
          
          linkElement.href = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
          window.open(linkElement.href, '_blank');
        }
      );
    } else {
      
      linkElement.href = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
      window.open(linkElement.href, '_blank');
    }
  }

  return <div ref={mapRef} style={{ height: '120px', width: '100%' }} />;
}

export default MapItem;
*/


import React, { useEffect, useRef } from 'react';

function MapItem(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (props.latitude && props.longitude) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: props.latitude, lng: props.longitude },
        zoom: props.zoom || 11,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: props.latitude, lng: props.longitude },
        map: map,
      });

      const contentDiv = document.createElement('div');
      const directionsLink = document.createElement('a');
      directionsLink.textContent = 'Get Directions';
      directionsLink.href = '#'; // Placeholder href
      directionsLink.addEventListener('click', (e) => {
        e.preventDefault();
        getUserLocationAndOpenDirections(directionsLink, props.latitude, props.longitude);
      });
      contentDiv.appendChild(directionsLink);

      const infoWindow = new window.google.maps.InfoWindow({
        content: contentDiv
      });

      // Open InfoWindow immediately
      infoWindow.open(map, marker);

      // Optional: If you want to close the InfoWindow when the map is clicked
      map.addListener('click', () => {
        infoWindow.close();
      });
    }
  }, [props.latitude, props.longitude, props.zoom]);

  // Function to get user's location and open directions
  function getUserLocationAndOpenDirections(linkElement, destLat, destLng) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          linkElement.href = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}`;
          window.open(linkElement.href, '_blank');
        },
        () => {
          // Error callback
          linkElement.href = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
          window.open(linkElement.href, '_blank');
        }
      );
    } else {
      // Geolocation is not supported
      linkElement.href = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
      window.open(linkElement.href, '_blank');
    }
  }

  return <div ref={mapRef} style={{ height: '120px', width: '100%' }} />;
}

export default MapItem;
