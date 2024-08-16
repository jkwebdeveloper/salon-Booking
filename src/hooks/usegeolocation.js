import { useState, useEffect } from 'react';

function useGeoLocation() {
     const [userlocation, setLocation] = useState({ loading: true, latitude: null, longitude: null, error: null });
     const [id, setId] = useState(null);

     const removeUserLocation = () => {
          setLocation({ loading: false, latitude: null, longitude: null, error: true });
          (localStorage.getItem('userloc')) ? localStorage.removeItem('userloc') : '';
     };

     const getUserLocation = async () => {
          if (!navigator.geolocation) {
               removeUserLocation();
               return;
          }
          function handleError(error) {
               removeUserLocation();
               navigator.geolocation.clearWatch(id);
          }
          function handleSuccess(position) {
               if (position.coords.latitude && position.coords.longitude) {
                    const { latitude, longitude } = position.coords;
                    setLocation({ loading: false, latitude, longitude, error: null });
                    localStorage.setItem('userloc', JSON.stringify({ latitude, longitude }));
               } else {
                    removeUserLocation();
               }
               navigator.geolocation.clearWatch(id);
          }
          const id = navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
          setId(id);
     }

     useEffect(() => {
          const loc = localStorage.getItem('userloc');
          if (loc) {
               setLocation({ loading: false, latitude: JSON.parse(loc).latitude, longitude: JSON.parse(loc).longitude, error: null });
          } else {
               getUserLocation();
          }

     }, [userlocation?.loading, id]);

     return { userlocation };
}

export default useGeoLocation;