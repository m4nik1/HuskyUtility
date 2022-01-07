import React, { useEffect, useState } from "react"

import {View, StyleSheet, Dimensions, Text} from "react-native"
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import moment from "moment";



const LocationDining = () => {
    const[errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState();

    let location2 = {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }

    async function getCurrentLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
            setErrorMsg("Permission to access location is denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({})
        console.log(location)
    }

    useEffect(() => {
        getCurrentLocation();
    }, [])
    
    return (
        <View>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                // region={mapRegion}
                followsUserLocation={true}
                zoomEnabled={true}
                showsUserLocation={true}


            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default LocationDining;