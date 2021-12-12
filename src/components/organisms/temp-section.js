import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import * as M from '../molecules';
 
const TempSection = ({currentWeather, forecastData}) => {
  return (
    <View style={styles.weatherSectionWrapper}>
      <M.CurrentWeatherSection temp={currentWeather} />
      <M.ForecastSection forecast={forecastData} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  weatherSectionWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto'
  }
 });
 
 export default TempSection;
 