import React, { useEffect, useState } from "react"

import {View, StyleSheet, Dimensions} from "react-native"
import * as Location from "expo-location";
import MapView from "react-native-maps";



const LocationDining = () => {
    
    const[Location, setLocation] = useState(null);
    const[errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            let regionLocation = {latitude: location["coords"]["latitude"], longitude: location["coords"]["longitude"],
                                  latitudeDelta:0.0922, longitudeDelta:0.0421}

            setLocation(location);
            setMapRegion(regionLocation);
        })();
    }, [])
    
    return (
        <View>
            <MapView style={styles.map} region={mapRegion} />
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