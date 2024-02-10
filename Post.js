import React, { useState, useContext, useMemo, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  SafeAreaView,
  Pressable
} from 'react-native';

// ico
import { Ionicons } from '@expo/vector-icons';

// camera roll
import { AssetsSelector } from 'expo-images-picker';

// take photo / video
import EnableCamera from './useCamera';

// date picker
import DateTimePicker from '@react-native-community/datetimepicker';

// nav for selecting from gallery, take photo, or record

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


// cover pic
// change profile pic
import * as ImagePicker from 'expo-image-picker';

// for phones with notches

import { MediaType } from 'expo-media-library';

export default function MyProfileSettings() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.headerText}>Post Ocularia bubble</Text>

        <View
          style={{
            marginRight: 20,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <TouchableOpacity>
            <Text>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginHorizontal: 30 }}>
        <TitleDateCoverSection />
      </View>

      <View style={styles.horizontalLine}></View>

      <View>
        <ContentSection />
      </View>

      <View style={styles.horizontalLine}></View>

      <View style={{ flex: 1, marginTop: 10 }}>
        <ContentSelect />
      </View>
    </View>
  );
}
const ContentSelect = () => {
  return (
    <Tab.Navigator style={{ top: 0 }} lazy>
      <Tab.Screen
        name="Gallery"
        component={GalleryRoll}
        options={{ unmountOnBlur: true }}
      />
      <Tab.Screen name="Camera" component={EnableCamera} />
    </Tab.Navigator>
  );
};
const TitleDateCoverSection = () => {
  const [postCover, setCover] = useState();

  const pickCover = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setCover(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View style={{ marginVertical: 15 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={pickCover}>
            <ImageBackground
              source={{ uri: postCover }}
              style={styles.imgCSS}
              imageStyle={{ borderRadius: 400 / 2 }}
              blurRadius={4}>
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
                <Ionicons name="camera-outline" style={{ fontSize: 20 }} />
                <Text>Change Cover Photo</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <View
            style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'grey' }}>Title</Text>
              <TextInput
                placeholder={'MyOcularia1'}
                style={{ color: 'grey' }}
              />
            </View>

            <View
              style={[styles.horizontalLine, { paddingHorizontal: '100%' }]}
            />
            <View
              style={[styles.horizontalLine, { paddingHorizontal: '100%' }]}
            />

            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'grey' }}>Date</Text>
              <ShowDate />
            </View>

            <View
              style={[styles.horizontalLine, { paddingHorizontal: '100%' }]}
            />

            <View
              style={[styles.horizontalLine, { paddingHorizontal: '100%' }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const ShowDate = () => {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('Empty');
  const [visible, setVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      ' - ' +
      (tempDate.getMonth() + 1) +
      ' - ' +
      tempDate.getFullYear();
    setText(fDate);
  };

  return (
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text style={{color:'grey',fontSize:16}}>
        <Ionicons name="calendar-outline" style={{ marginRight:10}} />
        {text}
        </Text>
      </TouchableOpacity>
      {visible && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const ContentSection = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginVertical: 20,
      }}>
      <Text style={{ color: 'white' }}>Content Preview</Text>
      <View>
        <ScrollView horizontal>
          <FixedImg/>
          <FixedImg/>
          <FixedImg/>
          <FixedImg/>
          <FixedImg/>
        </ScrollView>
      </View>
    </View>
  );
};
const FixedImg = () => {

  return (
    <View
      style={styles.bubble}
      
      >
      <Pressable
       
      >
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
          }}
          style={[styles.imgCSS, { margin: 10, marginLeft: 10 }]}
          imageStyle={{ borderRadius: 400 / 2 }}
          blurRadius={5}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: "100%",
              bottom: "100%",
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:"white",
              padding:10,
              borderRadius: 400 / 2,
            }}>
            <Text style={{ color: 'black', fontWeight: 'bold' , }}>
              <Ionicons name="close-outline" style={{ fontSize: 20 }}/>
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      
    </View>
  );
};
const GalleryRoll = () => {
  const onSuccess = (data: any) => {
    Alert.alert('Done', data.length + 'Images selected');
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: 'black',
      errorMessages: {
        hasErrorWithPermissions: 'Please Allow media gallery permissions.',
        hasErrorWithLoading: 'There was an error while loading images.',
        hasErrorWithResizing: 'There was an error while loading images.',
        hasNoAssets: 'No images found.',
      },
    }),
    []
  );

  // max selection
  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false, // true might perform slower results but gives meta data and absolute path for ios users
      initialLoad: 100,
      assetsType: [MediaType.photo, MediaType.video],
      minSelection: 1,
      maxSelection: 100,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const _textStyle = {
    color: 'black',
  };

  const _buttonStyle = {
    backgroundColor: 'white',
    borderRadius: 5,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: 'Add',
        back: 'Unselect All',
        selected: 'selected',
      },
      midTextColor: 'black',
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => {},
      onSuccess: (e: any) => onSuccess(e),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: 'black',
      spinnerColor: 'blue',
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: 'tomato',
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: 'white',
        bg: '#00000085',
        size: 26,
      },
    }),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            Navigator={widgetNavigator}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4648',
    //#563232
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '20%',
  },
  headerText: {
    fontSize: 20,

    //backgroundColor:"#563232",
    padding: 10,
    color: 'white',
    borderRadius: 20,
  },

  horizontalLine: {
    backgroundColor: 'grey',
    padding: 0.12,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  imgCSS: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: 400 / 2,
    margin: 10,
    backgroundColor: 'white',
  },
  bubble: {
    flexDirection: 'row',
  },
});
