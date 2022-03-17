import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, Button, FlatList } from "react-native";


function MealCard(props) {
    let stationData = props.stations

    function stations() {
        let stationsObj = []

        // console.log(stationData)
        if(stationData != null) {
            for(var j in stationData[0]["stations"]) {
                // console.log(stationData[0]["stations"][j])
                stationsObj.push(
                    <View>
                        <Text style={styles.stationTitle}>{stationData[0]["stations"][j]["Station_Name"]}</Text>
                        { stationData[0]["stations"][j]["food"].map((foods) => {
                            return <Text style={styles.menuItems}>     {foods}</Text>
                        }) }
                    </View>
                )
            }
        }

        return stationsObj;
        // console.log(stationData[0]["stations"])
    }

    // useEffect(() => {
        // stations()
    // }, [])

    return (
        <View>
            <Button title="Press Here" onPress={() => stations()} />
            {stations()}
        </View> 
    )
}




const styles = StyleSheet.create({
    mealTitle: {
        fontSize: 25,
        color: 'white',
        textAlignVertical: 'center'
    },
    stationTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    menuItems: {
        fontSize: 13,
    },
    container: {
        padding: 10,
        overflow: 'scroll'
    },
    collpaseList: {
        width: '100%',
        borderWidth: 1,
        overflow: 'scroll'
    },
    mealTitleA: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: 'white'
    }

})

export default MealCard;