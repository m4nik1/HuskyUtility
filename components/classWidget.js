import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";
import Card from "../components/Card";
import { classItems } from "../data/classData";

const ClassHomeWidget = props => {

    return (
        <View>
            <Card style={styles.classCard}>
                <View style={styles.nameView}>
                    <Text style={styles.classTitle}>Today's Classes: </Text>
                </View>
                <FlatList
                    style={styles.listView}
                    keyExtractor={item => item.id}
                    data={classItems}
                    renderItem={itemData => (
                        <ClassCard
                            hour={itemData.item.hour}
                            minute={itemData.item.minute}
                            ClassName={itemData.item.className}
                            Time={itemData.item.time}
                            prof={itemData.item.profName}
                            location={itemData.item.location}
                        />
                    )}
                />
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