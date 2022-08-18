import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './screens/ClassesScreen';
import moment from "moment";
import LocationDining from './screens/LocationDining';
import { meals } from './data/UConnDining/DiningParsing';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from "expo-location";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HallStatus } from './data/UConnDining/HallStatus';
import HomeDashboard from './screens/HomeDashboard';
import DiningDashboard from './screens/DiningDashboard';


const Stack = createNativeStackNavigator()
let day = moment().format('dddd');

export default function App() {

  const [screen, setScreen] = useState("home")
  const [data, setData] = useState()
  const [mapRegion, setMapRegion] = useState();


  // function MainScreen({ navigation }) {
  //   return (
  //     <View style={styles.container}>
  //        {/* <ClassesCard navi={navigation} currentDay={day}  /> */}
  //        <LocationCard coords={mapRegion} navi={navigation} currentDay={day} />
  //     </View>
  //   )
  // }

  async function mealsFetch() {
    let meal = await meals()
    setData(await meal)
    HallStatus()
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
    HallStatus()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeDashboard} options={ {headerShown: false} } />
        <Stack.Screen name="Dining-Maps" component={LocationDining} options={ {headerShown: false} } />
        <Stack.Screen name="Classes" component={Home} options={ {headerShown: false} } />
        <Stack.Screen name="Dining-Dashboard" component={DiningDashboard} options={ {headerShown: false} } />
      </Stack.Navigator>
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
