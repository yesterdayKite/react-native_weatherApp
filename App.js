import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";



const API_KEY = "2179d799807161c9b784aebf7b547465";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  //이부분 배열구조 모던자바스크립트 보고 공부하기!!
  getWeather = async (latitude, longitude) => {
    const {
      data : {
        main : {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading : false,
      condition : weather[0].main,
      temp // 위의 const data 가 정리되지 않으면 원래는 이거 -> temp : data.main.temp});
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() { //첫번째 렌더링이 끝나면 바로 실행되는 메소드
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition} = this.state;
    return isLoading ? (<Loading />) : (< Weather temp = {Math.round(temp)} condition = {condition}/> );
  }
}
