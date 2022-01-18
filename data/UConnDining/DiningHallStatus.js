import React, { useEffect } from 'react'

import { Image, View, StyleSheet, Dimensions, Text, Alert, Button} from "react-native"

const DiningHallStatus = () => {
    const baseURL = "http://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=15&locationName=Northwest+Marketplace&naFlag=1"

    async function fetchHtmlData() {
        await fetch(baseURL)
            .then(response => {
                console.log(response.json())
            })
            .then(data => {
                console.log(data)
            })
    }

    return (
        <Button title='Press this' onPress={() => fetchHtmlData()} />
    )

}

export default DiningHallStatus;