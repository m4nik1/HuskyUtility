import React, { useEffect, useState } from "react"
import { Image, View, StyleSheet, Dimensions, SafeAreaView} from "react-native"
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import dining from "../assets/dining_icon.png"
import ModalDining from "../components/diningHallModal";
import MapBar from '../components/MapTabBar'
import { meals } from "../data/UConnDining/DiningParsing";




const LocationDining = props => {


    const [mapRegion, setMapRegion] = useState();
    const [diningModalTitle, setTitle] = useState();
    const [modal, setModal] = useState(false)
    const [data, setData] = useState()

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

    const southCoords = {
        latitude: 41.803773507878255,
        longitude: -72.2485690604892,
        latitudeDelta: .01,
        longitudeDelta: .01
    }

    const McMahonCoords = {
        latitude: 41.803514290987316, 
        longitude: -72.25226181074956,
        latitudeDelta: .01,
        longitudeDelta: .01
    }

    const whitneyCoords = {
        latitude: 41.80989113269769,
        longitude: -72.24745201204462 ,
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
        console.log("Centering on current location")
    }

    function setMapUtility(state, name, region) {
        setModal(state)
        setTitle(name)
        setMapRegion(region)
        // console.log(meals(name))
    }

    function screenChange(screen) {
        props.changeScreen(screen)
    }

    async function saveMealData() {
        setData(await props.mealsData)
    }

    function modalSet(state) {
        setModal(state)
    }

    useEffect(() => {
        getCurrentLocation();
        console.log("UseEffect is working!")
        saveMealData()
    }, [])


    if(props.shouldRengar) {
        return (
            <View>
                <MapView 
                    style={styles.map}
                    region={mapRegion}
                    showsUserLocation
                    // For now its disabled for testing purposes
                    // followsUserLocation={true}
                    // zoomEnabled={true}
                    // showsUserLocation={true}
                >
                    <MapView.Marker onPress={() => setMapUtility(true, "Northwest", NWCoords)} title={"Northwest Dining hall"} coordinate={NWCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                        
                    <MapView.Marker onPress={() => setMapUtility(true, "Putnam", putnamCoords)} title={"Putnam Dining Hall"} coordinate={putnamCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "South", southCoords)} title={"South Dining Hall"} coordinate={southCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "McMahon", McMahonCoords)} title={"McMahon Dining Hall"} coordinate={McMahonCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "Whitney", whitneyCoords)} title={"Whitney Dining Hall"} coordinate={whitneyCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>
                </MapView>
                <ModalDining menuData={data} title={diningModalTitle} isVisible={modal} modalCancel={() => modalSet(false)} />
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