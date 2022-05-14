import React, { useState, useEffect } from 'react';
import { ButtonStyleSheet, View, StyleSheet, Button } from 'react-native';
import Home from './screens/HomeScreen';
import ClassesCard from './components/ClassCard';
import moment from "moment";
import LocationDining from './screens/LocationDining';
import LocationCard from './components/LocationCard';
import { meals } from './data/UConnDining/DiningParsing';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar'
import { BlurView } from 'expo-blur'
import * as Location from "expo-location";
import DiningModal from './components/newDiningModal';


const Tab = createBottomTabNavigator()
let day = moment().format('dddd');

export default function App() {

  const [screen, setScreen] = useState("home")
  const [data, setData] = useState()
  const [mapRegion, setMapRegion] = useState();



  const changeScreen = (newScreen) => {
    if(newScreen === "home" || newScreen === "classes" || newScreen === "Dining") {
      setScreen(newScreen)
      mealsFetch()
    }
  }

  function MainScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ClassesCard navi={navigation} currentDay={day}  />
        <LocationCard coords={mapRegion} navi={navigation} currentDay={day} />
      </View>
    )
  }

  async function mealsFetch() {
    let meal = await meals()
    setData(await meal)
  }

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if(status !== 'granted') {
        setErrorMsg("Permission to access location is denied");
        return;
    }

    
    let location = await Location.getCurrentPositionAsync({})
    const lat = location["coords"]["latitude"]; // these are current location values
    const long = location["coords"]["longitude"]
    const currentRegion = {
        latitude: lat, 
        longitude: long,
        latitudeDelta: .01,
        longitudeDelta: .01
    }

    setMapRegion(currentRegion)
    console.log("Centered on current location")
}

  useEffect(() => {
    mealsFetch()
    getCurrentLocation()
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ 
          tabBarStyle: { position: 'absolute' }, tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />), }} 
        initialRouteName="Home" >
        <Tab.Screen name="Home" component={MainScreen} options={ {headerShown: false} } />
        <Tab.Screen name="Dining-Maps" component={LocationDining} options={ {headerShown: false} } />
        <Tab.Screen name="Classes" component={Home} options={ {headerShown: false} } />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  modalBtn: {
    marginTop: 200,
  }
});
