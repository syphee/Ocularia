import React, { createContext, useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView, StyleSheet } from 'react-native';

// ico
import { Ionicons } from '@expo/vector-icons';

// Navs
import HomeScreen from './home';
import AddFriend from './addFriend';
import SplashScreen from './splash';
import Settings from './settings';
import MyProfileSettings from './myProfile';
import Post from './Post';
import LoginNavigation from './applogin';



// Icons

const homeIcon = ({ focused, color, size }) => {
  color = focused ? 'red' : 'white'
  size =  30
  return <Ionicons name={'home-outline'} size={size} color={color} />;
};

const settingsIcon = ({ focused, color, size }) => {
  color = focused ? 'red' : 'white'
  size =  30
  let iconName = focused ? 'list' : 'settings';

  return <Ionicons name={iconName} color={color} size={size} />;
};

const addFriendIcon = ({focused, color, size }) => {
  color = focused ? 'red' : 'white'
  size =  30 
  return (
    //<Image style={{height:25,width:25}} source={require('./assets/icons/person-add.svg')}/>
    <Ionicons name={'people-outline'} color={color} size={size} />
  );
};

const myProfile = ({ focused,color, size }) => {
  color = focused ? 'red' : 'white'
  size =  30
  return (
    //<Image style={{height:25,width:25}} source={require('./assets/icons/person-add.svg')}/>
    <Ionicons name={'person-outline'} color={color} size={size} />
  );
};

const addIcon = ({focused}) =>{
  color = focused ? 'red' : 'white'
  size =  30
  return (
    //<Image style={{height:25,width:25}} source={require('./assets/icons/person-add.svg')}/>
    <Ionicons name={'add-circle-outline'} color={color} size={size} />
  );
}

// main
const Tab = createMaterialTopTabNavigator();

// used to auth from login / sign up
export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});



export default App = () => {
  //splash
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isVisible == true ? <SplashScreen /> : null}
      {isVisible == false ? <Main /> : null}
    </SafeAreaView>
  );
};

const Main = () => {
  const [hasUser, setUser] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{ hasUser, setUser }}>
        {hasUser ? (
          <NavigationContainer>
            <Tab.Navigator
            tabBarPosition='bottom'
            
            
              screenOptions={{
                swipeEnabled:true,
                tabBarShowLabel: false ,
                

                tabBarStyle: 
                { 
                  
                  position:"absolute",
                  bottom:0,
                  justifyContent:'center',
                  backgroundColor:'black',
                  width:"100%",
                  
                  borderTopLeftRadius:50,
                  borderTopRightRadius:50,
                  
                  height:90,

                  
                 
                 },
                 tabBarIcon:{
                   color:'red'
                 },
              }}>
              <Tab.Screen
                name="Feed"
                component={HomeScreen}
                options={{ headerShown: false, tabBarIcon: homeIcon}}
              />

              <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false, tabBarIcon: settingsIcon }}
              />

              <Tab.Screen
                name="Post"
                component={Post}
                options={{ headerShown: false, tabBarIcon: addIcon }}
              />

              <Tab.Screen
                name="Add Aria"
                component={AddFriend}
                options={{ headerShown: false, tabBarIcon: addFriendIcon }}
              />

              <Tab.Screen
                name="My Profile"
                component={MyProfileSettings}
                options={{ headerShown: false, tabBarIcon: myProfile }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        ) : (
          //<Post/>
          <LoginNavigation />
          //<MyProfileSettings/>
          //<Settings/>
        )}
      </AuthContext.Provider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    width:"100%",
    height:"100%",
  },
});
