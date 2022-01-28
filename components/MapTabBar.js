import React, { useEffect, useState } from "react"
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Image, View, StyleSheet, Dimensions, Text, Alert, Pressable} from "react-native"


const MapBar = () => {
    return(
        <View style={styles.Container}>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: "#182028",
        borderRadius: 25,
        height: 66,
        marginTop: 750,
        marginHorizontal: Dimensions.get('window').width * .1,
    },
})

export default MapBar;