import React, { useState,useContext,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,

  ImageBackground,
  
} from 'react-native';


// ico
import { Ionicons } from '@expo/vector-icons';


// take value from App.js
import {AuthContext} from "./App";

// take account details from log in
import currentLoggedAccount from './applogin'

// change profile pic
import * as ImagePicker from 'expo-image-picker';



export default function MyProfileSettings() {
  return (
    <View style={styles.container}>
    
      <View style={[styles.header, { alignItems: 'center' }]}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <ScrollView style={{marginBottom:100}}>
        <View style={{ marginHorizontal: 30 }}>
          <AccountInfo />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={{ marginHorizontal: 30 }}>
          <LinkedSocials />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={{ marginHorizontal: 30 }}>
          <AccountManagement />
        </View>
      </ScrollView>
    </View>
  );
}

const AccountInfo = () => {
  
  const [image, setImage] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  
  return (
    <View>
      
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Account Information
      </Text>

      <View style={{ marginVertical: 15 }}>
        <View style={[styles.settingsArrows, { alignItems: 'center' }]}>
          <Text style={{ color: 'white' }}>Change Profile Picture</Text>
          <TouchableOpacity onPress={pickImage}>
            <ImageBackground
              source={{uri:image}}
              style={[styles.imgCSS, { margin: 10, marginLeft: 10 }]}
              imageStyle={{ borderRadius: 400 / 2 }}
              blurRadius={2}>
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
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Username</Text>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'grey', marginHorizontal: 20 }}>
                {currentLoggedAccount.userName}
              </Text>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Email</Text>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'grey', marginHorizontal: 20 }}>
                {currentLoggedAccount.userName}
              </Text>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Password</Text>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'grey', marginHorizontal: 20 }}>
               
              </Text>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const LinkedSocials = () => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Linked Socials
      </Text>

      <View style={{ marginVertical: 15 }}>
        <View style={styles.settingsArrows}>
          <Text
            style={{
              color: 'white',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            <Ionicons
              name="logo-facebook"
              style={{ color: 'white', fontSize: 20 }}
            />
            syphe
          </Text>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text
            style={{
              color: 'white',

              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            <Ionicons
              name="logo-instagram"
              style={{ color: 'white', fontSize: 20 }}
            />
            itsyphe
          </Text>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text
            style={{
              color: 'grey',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            {' '}
            <Ionicons
              name="logo-twitter"
              style={{ color: 'grey', fontSize: 20 }}
            />
            Twitter
          </Text>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="add-outline"
                color="grey"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.settingsArrows, { flexWrap: 'nowrap' }]}>
          <Text
            style={{
              color: 'white',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            <Ionicons
              name="logo-google"
              style={{ color: 'white', fontSize: 20 }}
            />
            james@totallymygmail.com
          </Text>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="caret-forward-outline"
                color="white"
                style={{ fontSize: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AccountManagement = () => {
  const { setUser } = useContext(AuthContext);
  
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Account Management
      </Text>

      <View style={styles.settingsArrows}>
        <TouchableOpacity  onPress={() => setUser(false)}>
          <Text
            style={{
              color: 'grey',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            Log out of Account
          </Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.settingsArrows}>
        <TouchableOpacity>
          <Text
            style={{
              color: 'grey',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            Transfer Ocularia..
          </Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.settingsArrows}>
        <TouchableOpacity>
          <Text
            style={{
              color: 'red',
              //marginHorizontal: Dimensions.get('window').width * 0.1,
              fontSize: 15,
            }}>
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginVertical: '10%',
  },
  headerText: {
    fontSize: 20,

    //backgroundColor:"#563232",
    padding: 10,
    color: 'white',
    borderRadius: 20,
  },
  settingsArrows: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },

  horizontalLine: {
    backgroundColor: 'grey',
    padding: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  imgCSS: {
    width: Dimensions.get('window').width * 0.18,
    height: Dimensions.get('window').width * 0.18,
    borderRadius: 400 / 2,
    margin: 10,
    backgroundColor:'white'
  },
});
