import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import Home2 from './screens/HomeScreen2';
import LocationDining from './screens/LocationDining';

export default function App() {

  const [screen, setScreen] = useState("home")

  const changeScreen= (newScreen) => {
    if(newScreen === "home" || newScreen === "classes") {
      setScreen(newScreen)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Home shouldRengar={screen === "classes"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <Home2 shouldRengar={screen === "home"} changeScreen={(screen2) => {changeScreen(screen2)}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
