import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/HomeScreen';
import ClassesCard from './components/ClassCard';
import moment from "moment";
import LocationDining from './screens/LocationDining';

import LocationCard from './components/LocationCard';
import MapBar from './components/MapTabBar';

export default function App() {

  const [screen, setScreen] = useState("Dining")
  const [modal, setModal] = useState(false)

  const day = moment().format('dddd');

  const changeScreen = (newScreen) => {
    if(newScreen === "home" || newScreen === "classes" || newScreen === "Dining") {
      setScreen(newScreen)
    }
  }


  return (
    <View style={styles.container}>
      <Home current_day={day} shouldRengar={screen === "classes"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <LocationDining shouldRengar={screen === "Dining"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <ClassesCard currentDay={day} shouldRengar={screen === "home"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <LocationCard currentDay={day} changeScreen={(screen2) => {changeScreen(screen2)}} />
    </View>
    
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
