import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import Card from "./Card";
import { HallStatus } from "../data/UConnDining/HallStatus";

const LocationCard = props => {

    const [statusData, changeStatusData] = useState()

    const screenCallback = (screen) => {
        props.changeScreen(screen)
    }


    const H = ["Northwest", "Putnam", "South", "McMahon", "Whitney"]

    function status() {
        let statusData = []
        for(var d in H) {
            console.log(H[d])
            const obj = {}
            const status = HallStatus(H[d])
            obj[H[d]] = status
            statusData.push(obj)
        }
        changeStatusData(statusData)
    }

    function renderStatus() {
        let statusComponent = []

        for(var s in statusData) {
            statusComponent.push(
                <View>
                    <Text>{H[s]}</Text>
                    <Text style={styles.classTime, (statusData[s][H[s]] === "Open" ? {color: 'green'} : {color:'red'})}>{statusData[s][H[s]]}</Text>
                </View>
            )
        }
        return statusComponent
    }

    useEffect(() => {
        status()
    }, [])

    return (
            <Pressable onPress={() => screenCallback(props.screen)}>
                <Card style={styles.diningCard}>
                    <View style={styles.nameView}>
                        <Text style={styles.title}>Dining Halls</Text>
                    </View>
                    <View style={styles.classListView}>
                        { renderStatus() }
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
    },
    nameView: {
        alignItems: "center",
    },
    className: {
        paddingTop: 20,
    }, 

    classListView: {
        flex: 1,
        flexDirection: "column",
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
        alignSelf: 'center'
    }
})

export default LocationCard;