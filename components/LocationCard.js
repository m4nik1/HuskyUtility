import React, { useEffect, useState } from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import Card from "./Card";
import moment from "moment";
import { HallStatus } from "../data/UConnDining/HallStatus";

function LocationCard(props) {

    const [statusData, changeStatusData] = useState()
    const currentMinutes = moment().format("mm");
    const currentSecond = moment().format("ss")


    const H = ["Northwest", "Putnam", "South", "McMahon", "Whitney"]

    function status() {
        let statusData = []
        for(var d in H) {
            const obj = {}
            const status = HallStatus(H[d])
            obj[H[d]] = status
            statusData.push(obj)
            console.log(statusData)
        }
        changeStatusData(statusData)
    }

    function renderStatus() {
        let statusComponent = []

        for(var s in statusData) {
            statusComponent.push(
                <View style={{flexDirection: 'row', width:'100%', flex:1}}>
                    <Text>{H[s]}:</Text>
                    <Text style={styles.classTime, (statusData[s][H[s]] === "Open" ? {color: 'green'} : {color:'red'})}> {statusData[s][H[s]]}</Text>
                </View>
            )
        }
        return statusComponent
    }

    useEffect(() => {
        status()
    }, [currentMinutes, currentSecond])

    return (
            <Pressable onPress={() => props.navi.navigate('Dining-Maps')}>
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