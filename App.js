import React, { useState, useEffect } from 'react';
import { ButtonStyleSheet, View, StyleSheet } from 'react-native';
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


const Tab = createBottomTabNavigator()
let day = moment().format('dddd');

export default function App() {

  const [screen, setScreen] = useState("home")
  const [data, setData] = useState()



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
        <LocationCard navi={navigation} currentDay={day} />
      </View>
    )
  }

  async function mealsFetch() {
    let meal = await meals()
    setData(await meal)
  }

  useEffect(() => {
    mealsFetch()
    meals()
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={{ 
          tabBarStyle: { position: 'absolute' }, tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />), }} 
        initialRouteName="Home" tabBar={(props) => <TabBar {... props} />} >
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
