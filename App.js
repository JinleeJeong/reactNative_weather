import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
export default class extends React.Component {

  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
      return (
      <Loading/>
      );
    }
}


// div > View
// span > Text 모든 부분 Text 요구