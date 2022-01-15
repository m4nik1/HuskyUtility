import React from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import HomeWidgets from "./HomeWidgets";


const LocationCard = props => {

    const screenCallback = (screen) => {
        props.changeScreen(screen)
    }
        return (
            <View>
                <HomeWidgets title={"Dining Halls"} screen="Dining" day={props.currentDay} screenRequest={(screenCall) => screenCallback(screenCall)} />
            </View>
        )
    // else {
    //     return (
    //         null
    //     )
    // }
}

const styles = StyleSheet.create({

})

export default LocationCard;