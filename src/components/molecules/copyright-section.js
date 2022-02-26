import React, {useCallback} from 'react';
import {StyleSheet, Button, Text, View, Image, Linking} from 'react-native';

const styles = StyleSheet.create({
  copyright: {
    justifyContent: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  copyrightText: {
    fontSize: 12,
    color: 'white',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  copyrightSource: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  profilePic: {
    width: 22,
    height: 22,
    borderRadius: 22,
    borderColor: 'white',
    borderWidth: 1,
    marginEnd: 6,
  },
});

const CopySection = ({authorName, authorPic, authorUrl}) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(authorUrl);
  }, [authorUrl]);

  return (
    <View style={styles.copyright}>
      <Text style={styles.copyrightText}>Autor:</Text>
      <View style={styles.copyrightSource}>
        <Image
          resizeMethod="scale"
          resizeMode="cover"
          style={styles.profilePic}
          source={{
            uri: authorPic,
          }}
        />
        <Text style={styles.author} onPress={handlePress}>
          {authorName}
        </Text>
      </View>
    </View>
  );
};

export default CopySection;
