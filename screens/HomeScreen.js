import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import moment from "moment";
import ClassCard from "../components/Class";
import { classItems } from "../data/classData";
import { Ionicons } from '@expo/vector-icons'; 


const Home = ({props, navigation}) => {

    let dayNumber = moment().format("Do")

    const currentMinutes = moment().format("mm");
    const [day, changeDay] = useState(moment().format('dddd'));
    const [data, changeData] = useState();
    const [dayNum, changeNumber] = useState(dayNumber)
    const [dayCounter, changeCounter] = useState(1);

    let todaysDate = moment().format(" MMM");

    function dayChange() {
        if(dayCounter < 5){
            changeCounter(dayCounter+1)
        }
        changeNumber(moment().add(dayCounter, 'days').format('D'));
        changeDay(moment().add(dayCounter, 'days').format('dddd'))
    }

    function backToday() {
        changeNumber(moment().format("Do"));
        changeDay(moment().format('dddd'))
        changeCounter(1)
    }


    useEffect(() => {
        changeData(classItems[day])
    }, [currentMinutes, day])

        return (
            <View>
                <StatusBar  />
                <View style={styles.classContainer}>
                    <Text style={styles.title}>Classes</Text>
                    <View style={styles.dateContainer}>
                        <TouchableOpacity onPress={() => backToday()}>
                            <Text style={styles.date}>{ day + todaysDate + " " + dayNum }</Text>
                        </TouchableOpacity>
                        <Button style={styles.TomorrowBtn} title="Next" onPress={() => dayChange()} />
                    </View>
                    <FlatList
                        keyExtractor={item => item.id}
                        style={styles.scrollView}
                        data={data}
                        renderItem={itemData => (
                            <ClassCard
                                hour={itemData.item.hour}
                                minute={itemData.item.minute}
                                ClassName={itemData.item.className}
                                Time={itemData.item.time}
                                prof={itemData.item.profName}
                                location={itemData.item.location}
                                mode={itemData.item.mode}
                            />
                        )}
                    />
                </View>
                <View style={{ position: 'absolute', marginTop: 60, backgroundColor: 'black', borderRadius: 50, marginLeft: 20, width: 40, height: 40, justifyContent: 'center', zIndex: 2 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{ marginLeft: 5 }} name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column"
    },
    classContainer:{
        alignContent: "center",
        alignItems: "center",
        height: "100%",
    },
    title: {
        alignItems:"center",
        marginTop:50,
        fontSize: 40,
        paddingTop: 20
    },
    scrollView: {
        width: "100%",
        height: "50%"
    },
    backBtn: {
        marginTop: 50,
        marginRight: 300
    },
    dateContainer: {
        flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center'
    },
    date: {
        fontSize: 23
    },
    TomorrowBtn: {
    }
})



export default Home;
