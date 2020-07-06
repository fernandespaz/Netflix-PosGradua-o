import React,{ useState,useEffect} from 'react';

import {StatusBar, Dimensions} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { getLocation,filterByContry} from '../services/movieFilter';

// const api = [
//   require('../assets/movies/movie1.jpg'),
//   require('../assets/movies/movie2.jpg'),
//   require('../assets/movies/movie3.jpg'),
//   require('../assets/movies/movie4.jpg'),
// ];

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {

const [movies,setMovies] = useState([]);
const [nationalmovies,setNationalMovies] = useState([]);

useEffect(() => {


 const loadingMovies = async () => {
   const moviesJson = require('../assets/Movies.json');
   const position = await getLocation();
   const nationalContries = await filterByContry(moviesJson,position);
   setNationalMovies(nationalContries);
   const nationalContriesTitle = nationalContries.map(
     (item, index) => item.Title,
   ); 
   moviesWithoutNational = moviesJson.filter((item,index) => {
     return !nationalContriesTitle.includes(item.Title);
   });
   setMovies(moviesWithoutNational);
  };
  loadingMovies();

  },[]) ;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies label="Recomendados" data={movies} />
        <Movies label="Nacionais" data={nationalmovies} />
      </Container>
    </>
  );
};

export default Home;
