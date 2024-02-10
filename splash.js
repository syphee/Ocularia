import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,

} from 'react-native';


export default SplashScreen = () => {
  return (
    <View style={styles.splashScreenRootView}>
      <Image source={require('./assets/adaptive-icon.png')} style={styles.image} />
      <Text style={{ color: 'white', textAlign: 'center' }}>Ocularia.</Text>
    </View>
  );
};


const styles = StyleSheet.create({

  splashScreenRootView: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
});
