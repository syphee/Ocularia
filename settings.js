import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Checkbox from 'expo-checkbox';

// ico
import {
  Ionicons,

} from '@expo/vector-icons';

// app icon
const ocularia = require('./assets/icon.png');

const GeneralSettings = () => {
  return (
    <View style={{padding:10,borderRadius:20}}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
          
        }}>
        General
      </Text>
      <View style={{ marginVertical: 15 }}>
        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Change Menu Background</Text>
          <TouchableOpacity>
            <Ionicons
              name="caret-forward-outline"
              color="white"
              style={{ fontSize: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Change colours..</Text>
          <TouchableOpacity>
            <Ionicons
              name="caret-forward-outline"
              color="white"
              style={{ fontSize: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.settingsArrows}>
          <Text style={{ color: 'white' }}>Change Language</Text>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'grey', marginHorizontal: 20 }}>
                English
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

const NotificationSettings = () => {
  const [toggleNotif, setNotif] = useState(false);
  const [toggleAriaNotifAdd, setAriaNotifAdd] = useState(false);

  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        Notifications
      </Text>

      <View style={{ marginVertical: 15 }}>
        <View style={styles.settingsCheckbox}>
          <Text
            style={{
              color: 'white',
              flexWrap: 'wrap',
              width: Dimensions.get('window').width * 0.8,
            }}>
            Receive notifications when Arias send you memories
          </Text>

          <Checkbox
            disabled={false}
            value={toggleNotif}
            onValueChange={(newValue) => setNotif(newValue)}
          />
        </View>

        <View style={styles.settingsCheckbox}>
          <Text
            style={{
              color: 'white',
              flexWrap: 'wrap',
              width: Dimensions.get('window').width * 0.8,
            }}>
            Receive notifications when Arias send you a friend request
          </Text>

          <Checkbox
            disabled={false}
            value={toggleAriaNotifAdd}
            onValueChange={(newValue) => setAriaNotifAdd(newValue)}
          />
        </View>
      </View>
    </View>
  );
};

const AppInfo = () => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}>
        App Info
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={ocularia} style={styles.imgCSS} />
        <Text style={{ color: 'white', marginHorizontal: 10, fontSize: 15 }}>
          Ocularia.
        </Text>
      </View>

      <View style={styles.settingsArrows}>
        <Text style={{ color: 'white' }}>Version Number</Text>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'grey', marginHorizontal: 10 }}>
            v1.0.0beta
          </Text>
        </View>
      </View>

      <View style={styles.settingsArrows}>
        <Text style={{ color: 'white' }}>Licenses</Text>
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
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { alignItems: 'center' }]}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <ScrollView  style={{marginBottom:100}}>
        <View style={{ marginHorizontal: 30 }}>
          <GeneralSettings />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={{ marginHorizontal: 30 }}>
          <NotificationSettings />
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={{ marginHorizontal: 30 }}>
          <AppInfo />
        </View>
      </ScrollView>
    </View>
  );
}

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
  settingsCheckbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  horizontalLine: {
    backgroundColor: 'grey',
    padding: 0.2,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  imgCSS: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    borderRadius: 400 / 2,
    margin: 10,
  },
});
