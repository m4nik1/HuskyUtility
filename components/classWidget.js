import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import Card from "../components/Card";

const ClassHomeWidget = props => {



    return (
        <View>
            <Card style={styles.classCard}>
                <View style={styles.nameView}>
                    <Text style={styles.classTitle}>Today's Classes: </Text>
                </View>
                <View style={styles.classListView}>
                    <Text>Class Name</Text>
                    <Text style={styles.classTime}>5:30pm - 2:30pm</Text>
                </View>
            </Card>
            <TouchableWithoutFeedback onPress={props.screenNavi}>
                <Card style={styles.diningCard}>
                    <Text>Dining Menu</Text>
                </Card>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    classCard: {
        width:250,
        height: 200,
        marginTop: 70,
        marginLeft: 20,
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
        paddingTop: 20
    },
    classTime: {
        marginLeft: 25
    },
    diningCard: {
        width: 320,
        height: 300,
        marginTop: 30,
        marginLeft: 30
    }
})

export default ClassHomeWidget;