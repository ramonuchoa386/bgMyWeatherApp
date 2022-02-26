import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import * as A from './src/components/atoms';
import * as M from './src/components/molecules';
import * as O from './src/components/organisms';
import {getCurrentWeatherData, getForecastData} from './src/utils/fetchWeather';
import getBg from './src/utils/fetchBg';
import requestLocationPermission from './src/utils/requestLocationPermission';

const App = () => {
  const [image, setImage] = useState({});
  const [temp, setTemp] = useState('');
  const [forecast, setForecast] = useState([
    {
      day: '',
      max: '',
      min: '',
    },
  ]);

  useEffect(() => {
    requestLocationPermission().then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            getCurrentWeatherData(
              position.coords.latitude,
              position.coords.longitude,
            ).then(res => {
              setTemp(res.temp);
              getBg(res.query).then(res => {
                setImage({
                  imgUrl: res.imgUrl,
                  nome: res.nome,
                  link: res.link,
                  profileImg: res.profileImg,
                });
              });
            });

            getForecastData(
              position.coords.latitude,
              position.coords.longitude,
            ).then(res => {
              setForecast(res);
            });
          },
          error => {
            console.log('geolocation error: ', [error.code, error.message]);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('location permission denied');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <A.ImageBg imageSrc={image.imgUrl}>
        <O.TempSection currentWeather={temp} forecastData={forecast} />
        <M.CopySection
          authorName={image.nome}
          authorPic={image.profileImg}
          authorUrl={image.link}
        />
      </A.ImageBg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
