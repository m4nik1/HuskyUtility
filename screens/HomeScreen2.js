import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import ClassHomeWidget from "../components/classWidget"
import { classItems } from "../data/classData";

const Home2 = props => {

    const [data, changeData] = useState(classItems);

    const screenCallback = (screen) => {
        props.changeScreen(screen)
    }

    if(props.shouldRengar) {
        return (
            <View>
                <ClassHomeWidget screenRequest={(screen2) => screenCallback(screen2)} />
            </View> 
            
        )
    }
    else {
        return(
            null
        );
    }
}

const styles = StyleSheet.create({})

export default Home2;