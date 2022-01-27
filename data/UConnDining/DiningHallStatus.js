import React, { useState } from 'react'
import axios from "axios"
import { View, StyleSheet} from "react-native"
import MealCard from '../../components/mealCard'

const DiningHallStatus = (props) => {
    const baseURL = "http://localhost:8081/"

    const [data, changeData] = useState()

    let diningHallName = props.name

    function mealParsing() {
        try{
            axios.get(baseURL+diningHallName).then((res) => {
                console.log("GET request is being sent")
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
        catch(e) {
            console.log(e)
        }
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

