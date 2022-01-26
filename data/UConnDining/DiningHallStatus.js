import React, { useEffect, useState } from 'react'
import * as cheerio from 'cheerio'
import axios from "axios"
import { Image, View, StyleSheet, Dimensions, Text, Alert, Button} from "react-native"
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import MealCard from '../../components/mealCard'

const DiningHallStatus = () => {
    const baseURL = "http://192.168.1.7:8081/"

    const [data, changeData] = useState()

    function mealParsing() {
        let mealData;
        axios.get(baseURL).then((res) => {
            // console.log(res.data)
            changeData(res.data)
        })

        let mealComponents = [];
        // console.log(data[0]["stations"])

        for(var i in data) {
            // console.log(data[i]["mealName"])
            mealComponents.push(
                <MealCard 
                    meal = {data[i]["mealName"]}
                    stationTitle = {data[i]["stations"]}
                />
            )
        }
        return mealComponents

    }

    // useEffect(() => {
    //     // mealParsing()
    // }, [])

    return (
        // <Button title='Press this' onPress={() => fetchHtmlData()} />
        <View>
            {mealParsing()}
            <Button style={styles.btn} title='Fetch' onPress={() => mealParsing()} />
        </View>
    )
}


const styles = StyleSheet.create({
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

