import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Marker } from 'react-native-maps'
import ModalDining from './diningHallModal'


const DiningMarker = props => {

    const [modal, setModal] = useState(false)


    return (
        <TouchableWithoutFeedback onPress={() => setModal(true)}>
            <Marker coordinate={props.diningCoords} description={props.diningTitle}>{props.children}</Marker>
            {/* <ModalDining isVisible={modal} modalCancel={() => setModal(false)} /> */}
        </TouchableWithoutFeedback>
    )
}


export default DiningMarker;