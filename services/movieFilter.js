import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';


export const getLocation = () =>{
    return new Promise((resolve,reject) => {
      const onReceiveLocation = (getLocation) =>{
        resolve(getLocation);
      };
      Geolocation.getCurrentPosition(onReceiveLocation, (error) => {
        console.log(error);
        reject();
      });
   });
};

export const filterByContry = async(movies,geolocation) =>{
  const location = await Geocoder.geocodePosition({
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude,
  });

  const national = movies.filter((item,index) =>{
    return(isYourCountry =
      item.Country.indexOf(location[0].country) !== -1||
      item.Country.indexOf(location[0].CountryCode) !== -1);
  });
  return  national;
};

