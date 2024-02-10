import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,

  Dimensions,
  ScrollView,

  Pressable,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';


const bg = require('./assets/background/appbg.jpg');

export default HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={bg}>
          <View style={styles.header}>
            <View>
              <Text style={styles.date}>Header</Text>
            </View>

            <ScrollView  showsVerticalScrollIndicator={false}  style={{marginBottom:100}}>
              <View>
                <FixedImg />

                <FixedImg2 />

                <FixedImg3 />
              </View>

              <View style={[styles.content, { flexDirection: 'column' }]}>
                <FixedImg3 />

                <FixedImg />

                <FixedImg />
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const randMargin = [10, 50, 90, 140];

const FixedImg = () => {
  const [Hidden, setHidden] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = (event) => {
  //   setIsFocused(true);

  //   if (onFocus) {
  //     onFocus(event);
  //   }
  // };

  // const handleBlur = (event) => {
  //   setIsFocused(false);

  //   if (onBlur) {
  //     onBlur(event);
  //   }
  // };

  return (
    <View
      style={styles.bubble}
      
      >
      <Pressable
       onLongPress={()=>setHidden(!Hidden)} 
      >
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
          }}
          style={[styles.imgCSS, { margin: 10, marginLeft: randMargin[3] }]}
          imageStyle={{ borderRadius: 400 / 2 }}
          blurRadius={5}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Trip to Miami
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      {Hidden ? (
        <View>
          <OnLongPress />
        </View>
      ) : null}
    </View>
  );
};

const FixedImg2 = () => {
  const [Hidden, setHidden] = useState(false);
  return (
    <View
      style={styles.bubble}
      >
      <Pressable  onLongPress={()=>setHidden(!Hidden)}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/13986931/pexels-photo-13986931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={[styles.imgCSS, { margin: 10, marginLeft: randMargin[2] }]}
          imageStyle={{ borderRadius: 400 / 2 }}
          blurRadius={5}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Daily walks
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      {Hidden ? (
        <View>
          <OnLongPress />
        </View>
      ) : null}
    </View>
  );
};

const FixedImg3 = () => {
  const [Hidden, setHidden] = useState(false);
  return (
    <View
      style={styles.bubble}
      >
      <Pressable onLongPress={()=>setHidden(!Hidden)} >
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={[styles.imgCSS, { margin: 10, marginLeft: randMargin[1] }]}
          imageStyle={{ borderRadius: 400 / 2 }}
          blurRadius={5}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Niagra falls
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      {Hidden ? (
        <View>
          <OnLongPress />
        </View>
      ) : null}
    </View>
  );
};

const OnLongPress = () => {
  return (
    <View style={{position:"absolute" ,flexWrap:"wrap"}}>
      <Pressable
        style={{
          backgroundColor: 'white',
          margin: 10,
          padding: 5,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text>Edit Memory</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'white',
          margin: 10,
          padding: 5,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text>Delete Memory</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'white',
          margin: 10,
          padding: 5,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text>Merge Memory</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'white',
          margin: 10,
          padding: 5,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text>Share Memory</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    
  },

  date: {
    marginLeft: '60%',

    padding: '2%',
    backgroundColor: 'beige',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 2,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch'
  },

  header: {
    marginTop: '10%',
  },

  imgCSS: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderRadius: 400 / 2,
    margin: Math.floor(Math.random() * (20 - 2 + 1)) + 2,
  },
  bubble: {
    flexDirection: 'row',
  },
});
