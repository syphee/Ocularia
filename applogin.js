import React, { useState, useEffect, createContext, useContext } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// take value from App.js
import { AuthContext, setUser, hasUser } from './App';

const Stack = createStackNavigator();

// Login Info - hardcoded

const loginInfo1 = {
  email: 'abc@abc.com',
  password: 'abc123',
  userName: 'syphe',
};

const loginInfo2 = {
  email: 'a',
  password: 'a',
  userName: 'notSyphe',
};

const loginArray = [loginInfo1, loginInfo2];

export const CurrentLoggedAccount = createContext({
  email: '',
  password: '',
  userName: '',
});

const AppLogin = () => {
  const navigation = useNavigation();

  // change auth in app.js
  const { setUser } = useContext(AuthContext);

  const [toggleNotif, setNotif] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const img = require('./assets/icon.png');

  const homeLogin = () => {
    //onPress={() => navigation.navigate('Login')}>
    var doesExist = false;

    for (var i = 0; i < loginArray.length; i++) {
      // search login info from loginArray
      if (email == loginArray[i].email && password == loginArray[i].password) {
        doesExist = true;
        setUser(true);
      }
    }

    // if account does not exist / wrong password
    if (doesExist == false) {
      alert('Incorrect Username or Password. Please try again.');
    }

    // if does exist, then store info in object - to be used under myProfile
    if (doesExist == true) {
      //currentLoggedAccount.email = email
      //currentLoggedAccount.password = password
    }
  };

  return (

        <View  style={styles.container}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={img} style={styles.imgCSS} />
            <Text style={{ fontSize: 30 }}>Ocularia.</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 25,
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              Sign in
            </Text>
          </View>

          <View style={{ marginTop: 50, marginHorizontal: 10 }}>
            <View>
              <Text style={{ color: 'grey' }}>Email</Text>
              <TextInput
                placeholder="example@example.com"
                style={styles.textInputCSS}
                value={email}
                onChangeText={(text) => setEmail(text)}

                onFocus={{borderColor:'black'}}
              />
            </View>

            <View>
              <Text style={{ color: 'grey' }}>Password</Text>
              <TextInput
                placeholder="Enter Password"
                style={styles.textInputCSS}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}

                onFocus={{borderColor:'black'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Checkbox
                  disabled={false}
                  value={toggleNotif}
                  onValueChange={(newValue) => setNotif(newValue)}
                  style={{ marginRight: 10 }}
                />

                <Text style={{ marginLeft: 10 }}>Remember Password</Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('resetPassword')}>
                <Text style={{ color: 'red' }}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6495ed',
                  padding: 10,
                  paddingHorizontal: Dimensions.get('window').width * 0.4,
                  borderRadius: 20,
                }}
                //onPress={() => setUser(true)}>
                onPress={() => homeLogin()}>
                <Text style={{ color: 'white' }}>Login</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: 'black',textAlign:'center' }}>Or Login with</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{ margin: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.socialIcons,
                    {
                      backgroundColor: '#1e90ff',
                      padding: 10,
                      borderRadius: 20,
                      paddingHorizontal: Dimensions.get('window').width * 0.1,
                    },
                  ]}>
                  <Text style={{ color: 'white' }}>
                    <Ionicons
                      name="logo-facebook"
                      style={{ marginRight: 10 }}
                    />
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ margin: 20 }}>
                <TouchableOpacity
                  style={[
                    styles.socialIcons,
                    { backgroundColor: '#1e90ff', padding: 10, borderRadius: 20, paddingHorizontal: Dimensions.get('window').width * 0.1},
                  ]}
                  onPress={() => {
                    setUser(true);
                  }}>
                  <Text style={{ color: 'white' }}>
                    <Ionicons name="logo-google" style={{ marginRight: 10 }} />
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.hrLine}></View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text>Dont have an account?</Text>
              <TouchableOpacity
                style={{
                  marginVertical: 20,
                  backgroundColor: 'white',
                  borderWidth:2,
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                }}
                //onPress={() => navigation.navigate('Signup')}>
                onPress={() => navigation.navigate('Signup')}>
                <Text>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  );
};

const AppSignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // change auth in app.js

  const homeSignUp = () => {
    if (
      email.trim() != '' ||
      password.trim() != '' ||
      confirmPassword.trim() != ''
    ) {
      if (password != confirmPassword) {
        alert('Passwords do not match. Please try again.');
      } else {
        var newLogin = {
          email: email,
          password: password,
        };

        loginArray.push(newLogin);
        alert('Successfully signed up. Please log in.');

        navigation.navigate('Login');
      }
    } else {
      alert('Missing Input. Please try again.');
    }
  };
  const { setUser } = useContext(AuthContext);

  const img = require('./assets/icon.png');
  return (
    
      <ScrollView  style={{backgroundColor:'white'}} >
        <View style={styles.container}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={img} style={styles.imgCSS} />
            <Text style={{ fontSize: 30 }}>Ocularia.</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 25, marginHorizontal: 10 }}>Sign up</Text>
          </View>

          <View style={{ marginTop: 50, marginHorizontal: 10 }}>
            <View>
              <Text style={{ color: 'grey' }}>Email</Text>
              <TextInput
                placeholder="example@example.com"
                style={styles.textInputCSS}
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View>
              <Text style={{ color: 'grey' }}>Password</Text>
              <TextInput
                placeholder="Enter Password"
                style={styles.textInputCSS}
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <View>
              <Text style={{ color: 'grey' }}>Confirm Password</Text>
              <TextInput
                placeholder="Enter Password"
                style={styles.textInputCSS}
                value={confirmPassword}
                onChangeText={(confirmPassword) =>
                  setConfirmPassword(confirmPassword)
                }
                secureTextEntry={true}
              />
            </View>

            <View style={{ alignItems: 'center', marginVertical: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6495ed',
                  padding: 10,
                  paddingHorizontal: 100,
                  borderRadius: 20,
                }}
                onPress={() => homeSignUp()}>
                <Text style={{ color: 'white' }}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.hrLine}></View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                style={{
                  marginVertical: 20,
                  backgroundColor: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  borderWidth:2
                }}
                onPress={() => navigation.navigate('Login')}>
                <Text>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
  );
};

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  // change auth in app.js

  const resetPass = () => {
    if (email.trim() == '') {
      alert('Missing Input, Please try again.');
    } else {
      alert(
        'An email will be sent to your account to reset your password. Please check your email.'
      );
      navigation.navigate('Login');
    }
  };
  const { setUser } = useContext(AuthContext);

  const img = require('./assets/icon.png');
  return (
      <ScrollView style={{backgroundColor:'white'}}>
        <View >
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={img} style={styles.imgCSS} />
            <Text style={{ fontSize: 30 }}>Ocularia.</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 25, marginHorizontal: 10 }}>
              Forgot Password
            </Text>
          </View>

          <View style={{ marginTop: 50, marginHorizontal: 10 }}>
            <View>
              <Text style={{ color: 'grey', marginBottom: 10 }}>
                An email will be sent to your account to reset your password.
              </Text>

              <Text style={{ color: 'grey' }}>Email</Text>
              <TextInput
                placeholder="example@example.com"
                style={styles.textInputCSS}
                value={email}
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={{ alignItems: 'center', marginVertical: 70 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6495ed',
                  padding: 10,
                  paddingHorizontal: 100,
                  borderRadius: 20,
                }}
                onPress={() => resetPass()}>
                <Text style={{ color: 'white' }}>Send Confirmation Email</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.hrLine}></View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                style={{
                  marginVertical: 20,
                  backgroundColor: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  borderWidth:2
                }}
                onPress={() => navigation.navigate('Login')}>
                <Text>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
  );
};
export default LoginNavigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={AppLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={AppSignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="resetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  socialIcons: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  hrLine: {
    backgroundColor: 'grey',
    padding: 0.2,
  },
  textInputCSS: {
    backgroundColor: 'white',
    margin: 10,
    padding: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    color: '#dcdcdc',
  },
  imgCSS: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    borderRadius: 400 / 2,
    margin: 10,
  },
});
