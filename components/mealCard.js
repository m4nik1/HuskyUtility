import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, Button } from "react-native";


function MealCard(props) {
    let stationData = props.stationTitle

    function stations() {
        let stationsTitles = []

        for(j in stationData) {
            stationsTitles.push(
                <View>
                    <Text style={styles.stationTitle}>{stationData[j]["Station_Name"]}</Text>
                </View>
            )
        }
        return stationsTitles;
    }


    return(
        <View style={styles.container}>
            <Text style={styles.mealTitle}>{props.meal}</Text>
            {stations()}
        </View>
    )
}


const styles = StyleSheet.create({
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    stationTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#7a80e8',
    },
    menuItems: {
        fontSize: 15
    },
    container: {
        padding: 20
    }

})

export default MealCard;