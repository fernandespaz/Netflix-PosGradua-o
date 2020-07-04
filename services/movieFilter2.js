import React from 'react';
import Geolocation from '@react-native-community/geolocation';


export const Geolocation1 = () =>{
    Geolocation.getCurrentPosition(
        (info) => console.log(info),
        (error) => console.log(error),
      );
};

