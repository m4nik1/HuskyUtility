import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, Button, Platform, UIManager, TouchableOpacity, LayoutAnimation } from "react-native";


function MealCard(props) {
    let stationData = props.stationTitle

    if(Platform.OS === 'android') {
        if(UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    const [open, setOpen] = useState(false)


    function collpaseList() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open)
    }

    function stations() {
        let stationsTitles = []

        for(j in stationData) {
            // console.log(stationData[j])
            stationsTitles.push(
                <View>
                    <Text style={styles.stationTitle}>{stationData[j]["Station_Name"]}</Text>
                    { stationData[j]["food"].map((foods) => {
                        return <Text style={styles.menuItems}>  {foods}</Text>
                    }) }
                </View>
            )
        }
        return stationsTitles;
    }


    return(
        <View key={props.meal} style={styles.container}>
            <TouchableOpacity style={styles.collpaseList, !open && {height:27}} onPress={() => collpaseList()}>
                <Text style={styles.mealTitle}>{props.meal}</Text>
                {open && (
                    [stations()]
                )}
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlignVertical: 'center'
    },
    stationTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#7a80e8',
    },
    menuItems: {
        fontSize: 13,
    },
    container: {
        padding: 20
    },
    collpaseList: {
        width: '100%',
        borderWidth: 1,
        paddingHorizontal: 20,
    }

})

export default MealCard;