import React, { useEffect, useState } from "react"

import { Image, View, StyleSheet, Dimensions, Text, Alert} from "react-native"
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-web";
import dining from "../assets/dining_icon.png"
import ModalDining from "../components/diningHallModal";
import DiningMarker from "../components/diningMarker";



const LocationDining = () => {


    const [mapRegion, setMapRegion] = useState();
    const [modal, setModal] = useState(false)

    const NWCoords = {
        latitude: 41.81150,
        longitude: -72.25972
    }

    const putnameCoords = {
        latitude: 41.80541791743974,
        longitude: -72.2588591845334
    }

    

    async function getCurrentLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted') {
            setErrorMsg("Permission to access location is denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({})
        const lat = location["coords"]["latitude"]; // these are current location values
        const long = location["coords"]["longitude"]
        const currentRegion = {
            latitude: 41.806705735400755, 
            longitude: -72.25275337289247,
            latitudeDelta: .01,
            longitudeDelta: .01
        }
        setMapRegion(currentRegion)
    }

    useEffect(() => {
        getCurrentLocation();
    }, [])
    
    return (
        <View>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                region={mapRegion}
                followsUserLocation={true}
                zoomEnabled={true}
                showsUserLocation={true}
                           
            >
                {/* <MapView.Marker coordinate={NWCoords} title={"Northwest Dining hall"}
                    description={"Dining Hall"}  
                    onPress={() => setModal(true)}          
                >
                    <Image source={dining} />
                    <ModalDining isVisible={modal} modalCancel={() => setModal(false)} />
                </MapView.Marker> */}
                <DiningMarker diningCoords={NWCoords} diningTitle="Northwest Dining hall" >
                    <Image source={dining} />
                    {/* <ModalDining isVisible={modal} modalCancel={() => setModal(false)} /> */}
                </DiningMarker>


                <MapView.Marker
                    coordinate={putnameCoords}
                    title={"Putnam Dining hall"} 
                    description={"Dining Hall"}           
                 >
                    <TouchableWithoutFeedback onPress={() => alert.alert("Awesome")}>
                        <Image source={dining} />
                    </TouchableWithoutFeedback>
                 </MapView.Marker>
            </MapView>
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