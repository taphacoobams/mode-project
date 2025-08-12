import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1499629533257!2d-17.46618492526739!3d14.688912476423918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173d9ad7399ed%3A0x211ce641c1a33a88!2sFann%20Hock%2C%20Dakar%2C%20Senegal!5e0!3m2!1sfr!2sus!4v1716657671037!5m2!1sfr!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Khalil Collection location"
        aria-label="Carte montrant l'emplacement de Khalil Collection à Fann Hock Rue 55X70, Dakar, Sénégal"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

// Note: In a production environment, you would implement this component using the Google Maps JavaScript API
// Example implementation with the actual Google Maps API:
/*
import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      // Check if the Google Maps API is loaded
      if (!window.google) {
        console.error('Google Maps API not loaded');
        return;
      }

      // The location of the store
      const storeLocation = { lat: 5.3364, lng: -4.0267 }; // Abidjan coordinates

      // Create the map
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: storeLocation,
        styles: [
          // Custom map styles can be added here
        ],
      });

      // Add a marker for the store location
      new window.google.maps.Marker({
        position: storeLocation,
        map: googleMapRef.current,
        title: 'Khalil Collection Boutique',
      });
    };

    // Load the Google Maps API script
    const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsAPI();
    } else {
      initMap();
    }

    return () => {
      // Cleanup if needed
      window.initMap = null;
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full"
      aria-label="Carte montrant l'emplacement de Khalil Collection à Dakar, Sénégal"
    ></div>
  );
};

export default GoogleMap;
*/
