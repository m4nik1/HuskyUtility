import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import moment from "moment";

const DateSwitch = (props) => {

    let todaysDate = moment().format("dddd MMM Do");

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{ todaysDate }</Text>
            <Button style={styles.TomorrowBtn} title="Tomorrow" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center'
    },
    date: {
        fontSize: 23
    },
    TomorrowBtn: {
    }
})

export default DateSwitch;