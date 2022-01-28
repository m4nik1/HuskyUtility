import React, { useEffect, useState } from "react"
import { Image, View, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import dining from "../assets/dining_icon.png"
import ModalDining from "../components/diningHallModal";
import MapBar from '../components/MapTabBar'




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
    function modalClose(state) {
        setModal(state)
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
                    // For now its disabled for testing purposes
                    // followsUserLocation={true}
                    // zoomEnabled={true}
                    // showsUserLocation={true}
                >
                    <Marker onPress={() => modalSet(true, "Northwest")} title={"Northwest Dining hall"} coordinate={NWCoords} description={"Dining hall"}>
                        {markerImage}
                    </Marker>

                        
                    <Marker onPress={() => modalSet(true, "Putnam")} title={"Putnam Dining Hall"} coordinate={putnamCoords} description={"Dining hall"}>
                        {markerImage}
                    </Marker>
                    <MapBar />
                </MapView>
                <ModalDining title={diningModalTitle} isVisible={modal} modalCancel={() => modalClose(false)} />
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