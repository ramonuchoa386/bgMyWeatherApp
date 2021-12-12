import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
 
const ForecastSection = ({forecast}) => {
  return (
    <View style={styles.forecastWrapper}>
      {forecast.map((forecast, index) => {
        return (
          <View key={index}>
            <Text>dia: {forecast.day}</Text>
            <Text>max: {forecast.max}</Text>
            <Text>min: {forecast.min}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 130,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  }
});
 
export default ForecastSection;
 