import React from "react";
import {StyleSheet ,Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Haze: {
	  iconName: "weather-hail",
	  gradient: ["#005AA7", "#FFFDE4"],
	  title : "Haze",
	  subtitle : "watch out your step"
	},
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#0f0c29", "#302b63", "#24243e" ],
		title : "Thunderstorm",
		subtitle : "wow sounds great"
	},
	Drizzle: {
		iconName: "weather-hail",
		gradient: ["#06beb6", "#000046"],
		title : "Drizzle",
		subtitle : "chocolate drizzle above whip is best"
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#396afc", "#06beb6"],
		title : "Rain",
		subtitle : "rain-goddes YOUNHA"
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#74ebd5", "#74ebd5"],
		title : "Snow",
		subtitle : "do you want to build a snow"
	},
	Atmosphere: {
		iconName: "weather-hail",
		gradient: ["#108dc7", "#ef8e38"],
		title : "Atmosphere",
		subtitle : "fuuuuuuuuuuuck"
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#F2994A", "#F2C94C"],
		title : "Clear",
		subtitle : "flex~"
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#007991", "#78ffd6"],
		title : "Clouds",
		subtitle : "like whip cream XD"
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#1c92d2", "#f2fcfe"],
		title : "Mist",
		subtitle : "it may care your skin"
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#3E5151", "#DECBA4"],
		title : "Dust",
		subtitle : "i'm fed up with mask ㅗ"
	}
  };

export default function Weather ({temp, condition}){
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle = "light-content"/>
				<View style = {styles.halfContainer}>
				<MaterialCommunityIcons
				size = {96}
				name = {weatherOptions[condition].iconName}
				color = "white"
				/>
				<Text style = {styles.temp}>{temp}</Text>
				</View>
			<View style = {styles.halfContainer}>
				<View styles = {{...styles.halfContainer, ...styles.textContainer}}>
					<Text style = {styles.title}>{weatherOptions[condition].title}</Text>
					<Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
				</View>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp : PropTypes.number.isRequired,
	condition : PropTypes.oneOf([
	"Thunderstorm",
	"Drizzle",
	"Rain",
	"Snow",
	"Atmosphere",
	"Clear",
	"Clouds",
	"Haze",
	"Mist",
	"Dust"
	]).isRequied
};

const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : "center",
		alignItems : "center"
	},
	temp : {
		fontSize : 42,
		color : "white"
	},
	halfContainer : {
		flex : 1,
		justifyContent : "center",
		alignItems : "center"
	},
	title : {
		color : "white",
		fontSize : 44,
		fontWeight : "300",
		marginBottom : 10
	},
	subtitle : {
		fontWeight : "600",
		color : "white",
		fontSize : 24
	},
	textContainer : {
		paddingHorizontal : 20,
		alignItems : "flex-start"
	}
});
