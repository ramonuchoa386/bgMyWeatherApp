import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import sampleImg from '../../assets/images/ibrahim-rifath-u2ey1Y1g0dI-unsplash.jpg';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const ImageBg = ({children, imageSrc}) => {
  if(imageSrc !== '') {
    return (
      <ImageBackground source={{ uri: imageSrc }} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    )
  } else {
    return (
      <ImageBackground source={sampleImg} resizeMode="cover" style={styles.image}>
        {children}
      </ImageBackground>
    )
  }
};

export default ImageBg;