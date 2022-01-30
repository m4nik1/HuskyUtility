import React, { useState, useEffect } from 'react';
import { ButtonStyleSheet, View, StyleSheet } from 'react-native';
import Home from './screens/HomeScreen';
import ClassesCard from './components/ClassCard';
import moment from "moment";
import LocationDining from './screens/LocationDining';
import LocationCard from './components/LocationCard';
import { meals } from './data/UConnDining/DiningParsing';



function tabs() {
  return (
    <Tab.Navigator initialRouteName={"home"} >
      <Tab.Screen name="home" component={App} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [screen, setScreen] = useState("home")
  const [data, setData] = useState()

  const day = moment().format('dddd');

  const changeScreen = (newScreen) => {
    if(newScreen === "home" || newScreen === "classes" || newScreen === "Dining") {
      setScreen(newScreen)
      mealsFetch()
    }
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
    <View style={styles.container}>
      <Home current_day={day} shouldRengar={screen === "classes"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <LocationDining mealsData={data} shouldRengar={screen === "Dining"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <ClassesCard currentDay={day} shouldRengar={screen === "home"} changeScreen={(screen2) => {changeScreen(screen2)}} />
      <LocationCard currentDay={day} changeScreen={(screen2) => {changeScreen(screen2)}} />
      {/* <Button title='fetchP' onPress={() => setModal(true)} />  */}
      {/* <ModalDining isVisible={modal}  title="Putnam Dining Hall" menuData={meals("Northwest")} /> */}
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
