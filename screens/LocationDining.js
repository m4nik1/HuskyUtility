import React, { useEffect, useState } from "react"

import { Image, View, StyleSheet, Dimensions, Text, Alert} from "react-native"
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-web";
import dining from "../assets/dining_icon.png"
import ModalDining from "../components/diningHallModal";




const LocationDining = props => {


    const [mapRegion, setMapRegion] = useState();
    const [diningModalTitle, setTitle] = useState();
    const [modal, setModal] = useState(false)

    const NWCoords = {
        latitude: 41.81150,
        longitude: -72.25972
    }

    const markerImage = <Image source={dining} />;

    const putnamCoords = {
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

    function modalSet(state, name) {
        setModal(state)
        setTitle(name)
    }

    useEffect(() => {
        getCurrentLocation();
    }, [])



    if(props.shouldRengar) {
        return (
            <View>
                <MapView 
                    style={styles.map}
                    region={mapRegion}
                    // followsUserLocation={true}
                    // zoomEnabled={true}
                    // showsUserLocation={true}
                            
                >
                <Marker onPress={() => modalSet(true, "Northwest Dining hall")} title={"Northwest Dining hall"} coordinate={NWCoords} description={"Dining hall"}>
                    {markerImage}
                    </Marker>


                    <MapView.Marker
                        coordinate={putnamCoords}
                        title={"Putnam Dining hall"} 
                        description={"Dining Hall"}           
                    >
                        <TouchableWithoutFeedback onPress={() => alert.alert("Awesome")}>
                            <Image source={dining} />
                        </TouchableWithoutFeedback>
                    </MapView.Marker>
                </MapView>
                <ModalDining title={diningModalTitle} isVisible={modal} modalCancel={(bool) => modalSet(bool)} />
            </View>
        )
    }
    else {
        return (
            null
        )
    }
}



const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default LocationDining;