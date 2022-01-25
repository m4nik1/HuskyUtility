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
                console.log(res.data)
                ChangeStatus(res.data)
            })
    }

    useEffect(() => {
        fetchHtmlData()
    }, [])

    return (
        // <Button title='Press this' onPress={() => fetchHtmlData()} />
        <View>
            <Text style={ (status === 'Closed') ? {color: 'red'} : {color: 'green'} }>{status}</Text>
        </View>
    )

}

export default DiningHallStatus;

