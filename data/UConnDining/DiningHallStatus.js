import React, { useEffect, useState } from 'react'
import * as cheerio from 'cheerio'
import axios from "axios"
import { Image, View, StyleSheet, Dimensions, Text, Alert, Button} from "react-native"
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import MealCard from '../../components/mealCard'

const DiningHallStatus = (props) => {
    const baseURL = "http://192.168.1.13:8081/"

    const [data, changeData] = useState()

    let diningHallName = props.name


    function testRequest() {
        console.log('Post request is being made')
        console.log(baseURL+diningHallName)
        axios.get(baseURL+diningHallName)
        .then((res) => {
            console.log(res.data)
        })
    }

    function mealParsing() {
        let mealData;
        axios.get(baseURL+diningHallName).then((res) => {
            changeData(res.data)
        })

        let mealComponents = [];

        for(var i in data) {
            mealComponents.push(
                <MealCard
                    key={data[i]["mealName"]} 
                    meal = {data[i]["mealName"]}
                    stationTitle = {data[i]["stations"]}
                />
            )
        }
        return mealComponents
    }

    return (
        <View style={styles.menu}>
            {mealParsing()}
        </View>
    )
}


const styles = StyleSheet.create({
    menu: {
        marginTop: 15,
        overflow: 'scroll'
    },
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    stationTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#7a80e8',
    },
    menuItems: {
        fontSize: 15
    }

})

export default DiningHallStatus;

