import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CurrentWeatherSection = ({temp}) => {
  return (
    <View style={styles.temp}>
      <Text style={styles.tempValue}>{temp}</Text>
      <Text style={styles.tempUnit}>ºC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tempValue: {
    fontSize: 86,
    lineHeight: 86,
    color: 'white',
    fontWeight: 'bold',
  },
  tempUnit: {
    fontSize: 64,
    lineHeight: 64,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CurrentWeatherSection;
