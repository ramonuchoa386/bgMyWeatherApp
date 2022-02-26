import React from 'react';
import {StyleSheet, View} from 'react-native';

import ForecastItem from './forecast-item';

const ForecastSection = ({forecast}) => {
  return (
    <View style={styles.forecastWrapper}>
      {forecast.map((forecast, index) => (
        <ForecastItem key={index} forecast={forecast} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 130,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default ForecastSection;
