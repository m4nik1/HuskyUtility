import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import HomeWidgets from "./HomeWidgets"
import { classItems } from "../data/classData";

const ClassesCard = props => {

    const [data, changeData] = useState(classItems);

    const screenCallback = (screen) => {
        props.changeScreen(screen)
    }
        return (
            <View>
                <HomeWidgets title={"Today's Classes: "} screen="classes" day={props.currentDay} screenRequest={(screen2) => screenCallback(screen2)} />
            </View> 
            
        )
}

const styles = StyleSheet.create({})

export default ClassesCard;