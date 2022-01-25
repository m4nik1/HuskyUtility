import React, { useEffect, useState } from 'react'
import * as cheerio from 'cheerio'
import axios from "axios"
import { Image, View, StyleSheet, Dimensions, Text, Alert, Button} from "react-native"

const DiningHallStatus = () => {
    const baseURL = "http://localhost:8081"

    const [status, ChangeStatus] = useState()

    async function fetchHtmlData() {
        axios.get(baseURL)
            .then(res => {
                // console.log(res.data)

                ChangeStatus(res.data)
            })
    }


    function meals() {
        for(i in status[0]) {
            
        }
    }

    useEffect(() => {
        fetchHtmlData()
        console.log(status[0])
    }, [])

    return (
        // <Button title='Press this' onPress={() => fetchHtmlData()} />
        <View>
            <Text>Open</Text>
        </View>


    )
}

export default DiningHallStatus;