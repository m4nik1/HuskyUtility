import React, { useEffect, useState } from "react"
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Image, View, StyleSheet, Dimensions, Text, Alert, Pressable} from "react-native"


const MapBar = () => {
    return(
        <View style={styles.Container}>
            <Pressable>
                <View style={{ marginLeft: 20, marginTop: 15 }}>
                    <Entypo name="list" size={24} color="#c1dddd" />
                </View>
                <View style={{marginLeft: 250, marginBottom: 15 }}>
                    <FontAwesome5 name="location-arrow" size={24} color="#c1dddd" />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: "#182028",
        borderRadius: 25,
        height: 60,
        marginHorizontal: Dimensions.get('window').width * .1,
        marginTop: 220
    },
})

export default MapBar;