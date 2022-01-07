import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import Home2 from './screens/HomeScreen2';
import moment from "moment";
import LocationDining from './screens/LocationDining';

export default function App() {

  const [screen, setScreen] = useState("home")

  const day = moment().format('dddd');

  const changeScreen= (newScreen) => {
    if(newScreen === "home" || newScreen === "classes") {
      setScreen(newScreen)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Home current_day={day} shouldRengar={screen === "classes"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <Home2 currentDay={day} shouldRengar={screen === "home"} changeScreen={(screen2) => {changeScreen(screen2)}} />
    </SafeAreaView>

    // <View>
    //   <LocationDining />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
