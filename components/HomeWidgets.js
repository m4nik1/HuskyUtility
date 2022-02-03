import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, Pressable } from "react-native";
import Card from "./Card";
import moment from "moment";
import { classItems } from "../data/classData";
import DateSwitch from "./ClassDateSwitch";

const HomeWidgets = props => {

    const [day, changeDay] = useState(props.day);

    return (
        <Pressable onPress={() => props.screenRequest(props.screen)}>
            <Card style={styles.classCard}>
                <View style={styles.nameView}>
                    <Text style={styles.classTitle}>{props.title}</Text>
                </View>
                <FlatList
                    keyExtractor={item => item.profName}
                    style={styles.listView}
                    data={classItems[day]}
                    renderItem={itemData => (
                        <View style={styles.classListView}>
                            <Text>{itemData.item.className}</Text>
                            <Text style={styles.classTime}>{itemData.item.time}</Text>
                        </View>
                    )}
                />
            </Card>

            {/* <TouchableWithoutFeedback onPress={props.screenNavi}>
                <Card style={styles.diningCard}>
                    <Text>Dining Menu</Text>
                </Card>
            </TouchableWithoutFeedback> */}
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
    },
    listView: {
        width: "100%"
    }
})

export default HomeWidgets;