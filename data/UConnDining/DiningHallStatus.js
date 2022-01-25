import React, { useEffect } from 'react'
import * as cheerio from 'cheerio'
import axios from "axios"
import { Image, View, StyleSheet, Dimensions, Text, Alert, Button} from "react-native"

const DiningHallStatus = () => {
    const baseURL = ""

    async function fetchHtmlData() {
        axios.get(baseURL)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <Button title='Press this' onPress={() => fetchHtmlData()} />
    )

}

export default DiningHallStatus;

