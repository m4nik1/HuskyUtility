import React, { useEffect, useState } from "react"
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Image, View, StyleSheet, Dimensions, Text, Alert, Pressable, Modal} from "react-native"

const currentWidth = Dimensions.get('window').width

const TabBar = ({  state, descriptors, navigation  }) => {
    return(
                <View style={styles.Container}>
                     {/* <Pressable onPress={() => console.log("Details")} style={{ marginLeft: 20, alignSelf: 'center' }}>
                        <Entypo name="list" size={26} color="#c1dddd" />
                    </Pressable> */}
                    <Pressable onPress={() => navigation.navigate('Home')} style={{ justifyContent:'center', alignSelf:'center', marginLeft: 135 }}>
                        <AntDesign name="home" size={30} color="#c1dddd" />
                    </Pressable>
                    {/* <Pressable onPress={() => console.log("Current Location")} style={{marginLeft: 85, alignSelf: 'center', textAlignVertical: 'center' }}>
                        <FontAwesome5 name="location-arrow" size={26} color="#c1dddd" />
                    </Pressable> */}
                </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: "#182028",
        borderRadius: 25,
        minHeight: 66,
        marginBottom: 30,
        bottom: 10,
        width: 300,
        marginHorizontal: currentWidth * .1,
        position: 'absolute'
    },
})

export default TabBar;