import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

export default class extends React.Component {

  state = {
    isLoading: true,
  }

  getWeather = async(longitude, latitude) => {

    const { data: {
      main: {temp},
      weather
    } 
  
  } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )

    this.setState({isLoading : false, temp, condition : weather[0].main});

  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords : {longitude, latitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(longitude, latitude);

    } catch (error) {
      Alert.alert("Can`t find you");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;

      return isLoading? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
    }
}


// div > View
// span > Text 모든 부분 Text 요구