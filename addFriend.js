import React, { useState, useContext, useMemo, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,

  TextInput,

} from 'react-native';



// ico
import { Ionicons } from '@expo/vector-icons';


// nav for selecting from gallery, take photo, or record

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();


const addFriendIcon = ({focused, color, size }) => {
  color = focused ? 'red' : 'grey'
  size =  15
  return (
    //<Image style={{height:25,width:25}} source={require('./assets/icons/person-add.svg')}/>
    <Ionicons name={'person-add-outline'} color={color} size={size} />
  );
};

const FriendsIcon = ({focused, color, size }) => {
  color = focused ? 'red' : 'grey'
  size =  15
  return (
    //<Image style={{height:25,width:25}} source={require('./assets/icons/person-add.svg')}/>
    <Ionicons name={'person-outline'} color={color} size={size} />
  );
};


export default function AddFriend() {
  return (
    <View style={styles.container}>
      <View style={[styles.header,{alignItems:"center"}]}>
        <Text style={styles.headerText}>Aria</Text>
      </View>
      <ContentSelect/>
    </View>
  );
}
const ContentSelect = () => {
  return (
    <Tab.Navigator style={{ top: 0, flex:1 }} screenOptions={{
                swipeEnabled:true,
                tabBarShowLabel: true ,
                

                tabBarStyle: 
                { 
                  
                  paddingVertical:20,
                  top:0,
                  justifyContent:'center',
                  backgroundColor:'white',
                  width:"100%",
                  
                  borderTopRightRadius:50,
                  borderTopLeftRadius:50,
                  
                  height:90,

                  
                 
                 },
                 tabBarIcon:{
                   color:'red'
                 },
              }} lazy>
      <Tab.Screen
        name="Search"
        component={SearchAria}
        options={{ headerShown: true, tabBarIcon: addFriendIcon }}
      />
      <Tab.Screen name="My Aria"
        component={MyAria}
        options={{ headerShown: true, tabBarIcon: FriendsIcon }} />
    </Tab.Navigator>
  );
};
const SearchedAria = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 15,
      }}>
      <Image
        style={[
          styles.imgCSS,
          {
            width: Dimensions.get('window').width * 0.15,
            height: Dimensions.get('window').width * 0.15,
          },
        ]}
        source={{
          uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      <Text style={{ color: 'grey', marginRight: 50 }}>Ocula1</Text>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#563232',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white' }}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



const SuggestedAria = () => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Image
        style={styles.imgCSS}
        source={{
          uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />

      <TouchableOpacity style={[styles.content, { flexDirection: 'column' }]}>
        <Text style={{ color: 'grey' }}>Ocula1</Text>
        <View
          style={{
            backgroundColor: '#563232',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white' }}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const SearchAria = () => {
  return(
    <View style={styles.container}>
      <Text
        style={[
          styles.headerText,
          { fontSize: 16, marginLeft: 10, color: 'grey', fontWeight: 'bold',marginTop:20 },
        ]}>
        Suggestions
      </Text>

      <View horizontal style={{flexDirection: 'row',justifyContent:"center"}}>
        
          <SuggestedAria />
          <SuggestedAria />
          <SuggestedAria />

        
      </View>

      

      <View
        style={[
          styles.textInput,
          {
            marginHorizontal: 20,

            padding: 8,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <Ionicons name="search-outline" />
        <TextInput
          placeholder="Search"
          style={{ marginHorizontal: 10 ,width:"100%" }}>
        </TextInput>
      </View>

      <ScrollView  style={{marginBottom:100}}>
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
      </ScrollView>
    </View>
  )
};

const MyAria = () => {
  return(
    <View style={styles.container}>

      <View
        style={[
          styles.textInput,
          {
            marginHorizontal: 20,

            padding: 8,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <Ionicons name="search-outline" />
        <TextInput
          placeholder="Search"
          style={{ marginHorizontal: 10 ,width:"100%" }}>
        </TextInput>
      </View>

      <ScrollView  style={{marginBottom:100}}>
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
        <SearchedAria />
      </ScrollView>
    </View>
  )
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
    
    color: 'white',
    borderRadius: 20,
    justifyContent:'center',
    marginBottom: 10,
  },

  imgCSS: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    borderRadius: 400 / 2,
    margin: 10,
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'grey',
    margin: 10,
    padding: 8,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    color: 'white',
  },
});