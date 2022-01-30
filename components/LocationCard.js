import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import Card from "./Card";
import { HallStatus } from "../data/UConnDining/HallStatus";

const LocationCard = props => {

    const screenCallback = (screen) => {
        props.changeScreen(screen)
    }


    const H = ["Northwest", "Putnam", "South", "McMahon", "Whitney"]

    function status() {
        let statusData = []
        for(var d in H) {
            const obj = {}
            obj[H[d]] = HallStatus(H[d])
            statusData.push(obj)
        }

        return (
            <View>
                {/* <Text>{stat}</Text> */}
                <Text style={styles.classTime}>Open</Text>
            </View>
        )

    }

    useEffect(() => {
        status()
    }, [])

    return (
            <Pressable onPress={() => props.screenRequest(props.screen)}>
                <Card style={styles.classCard}>
                    <View style={styles.nameView}>
                        <Text style={styles.title}>Dining Halls</Text>
                    </View>
                    <View style={styles.classListView}>
                        <Text>Northwest</Text>
                        <Text style={styles.classTime}>Open</Text>
                    </View>
                </Card>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    classCard: {
        width:"80%",
        height: 200,
        marginTop: 70,
        marginLeft: 40,
        alignContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        alignItems: "center",
    },
    className: {
        paddingTop: 20,
    }, 

    classListView: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,
        textAlign: 'left'
    },
    classTime: {
        marginLeft: 25
    },
    diningCard: {
        width: 320,
        height: 300,
        marginTop: 30,
        marginLeft: 30
    },
    listView: {
        width: "100%"
    },
    title: {
        fontSize: 20,
    }
})

export default LocationCard;