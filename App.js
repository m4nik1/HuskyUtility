import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/HomeScreen';
import Home2 from './screens/HomeScreen2';
import LocationDining from './screens/LocationDining';

export default function App() {
  return (
    <View style={styles.container}>
      <Home2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
