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
        longitude: -72.25972,
        latitudeDelta: .01,
        longitudeDelta: .01
    }

    const markerImage = <Image source={dining} />;

    const putnamCoords = {
        latitude: 41.80541791743974,
        longitude: -72.2588591845334,
        latitudeDelta: .01,
        longitudeDelta: .01
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

    function setMapUtility(state, name, region) {
        setModal(state)
        setTitle(name)
        setMapRegion(region)
    }
    function modalSet(state) {
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
                    <Marker onPress={() => setMapUtility(true, "Northwest", NWCoords)} title={"Northwest Dining hall"} coordinate={NWCoords} description={"Dining hall"}>
                        {markerImage}
                    </Marker>

                        
                    <Marker onPress={() => setMapUtility(true, "Putnam", putnamCoords)} title={"Putnam Dining Hall"} coordinate={putnamCoords} description={"Dining hall"}>
                        {markerImage}
                    </Marker>
                    <MapBar changeScreen={(screen) => props.changeScreen(screen)} />
                </MapView>
                <ModalDining title={diningModalTitle} isVisible={modal} modalCancel={() => modalSet(false)} />
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