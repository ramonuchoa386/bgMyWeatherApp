import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  copyright: {
      justifyContent: 'flex-start',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20
  },
  copyrightText: {
      fontSize: 16,
      lineHeight: 16,
      color: 'white',
      textTransform: 'uppercase'
  },
  author: {
      fontSize: 24,
      lineHeight: 24,
  }
});
 
const CopySection = ({authorName}) => {
  return (
    <View style={styles.copyright}>
      <Text style={styles.copyrightText}>Autor:</Text>
      <Text style={styles.author}>{authorName}</Text>
    </View>
  );
};
 
 export default CopySection;
 