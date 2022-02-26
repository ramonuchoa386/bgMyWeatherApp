import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import sampleImg from '../../assets/images/ibrahim-rifath-u2ey1Y1g0dI-unsplash.jpg';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

const ImageBg = ({children, imageSrc}) => {
  if (imageSrc !== '') {
    return (
      <ImageBackground
        source={{uri: imageSrc}}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.overlay}></View>
        {children}
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={sampleImg}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.overlay}></View>
        {children}
      </ImageBackground>
    );
  }
};

export default ImageBg;
