import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ForecastItem = ({forecast}) => {
  return (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastItemDay}>
        {new Date(forecast.day).getUTCDate()}
      </Text>
      <Text>{forecast.max}</Text>
      <Text>{forecast.min}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forecastItemDay: {
    fontWeight: 'bold',
  },
  forecastItem: {
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default ForecastItem;
