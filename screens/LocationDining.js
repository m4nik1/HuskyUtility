import React, { useEffect, useState } from "react"
import { Image, View, StyleSheet, Dimensions, SafeAreaView, Text, Button, TouchableOpacity } from "react-native"
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import dining from "../assets/dining_icon.png"
import ModalDining from "../components/diningHallModal";
import { HallStatus } from "../data/UConnDining/HallStatus";
import DiningModal from "../components/newDiningModal";
import South_dining from "../assets/South_dining.jpg"
import Putnam_dining from "../assets/Putnam_dining.jpg"
import Mcmahon_dining from "../assets/Mcmahon_dining.jpg"
import Nortwest_dining from "../assets/Northwest_dining.jpg"
import Whitney_dining from "../assets/Whitney_dining.jpg"
import Buckley_dining from "../assets/Buckley_Dining.jpg"
import { meals } from "../data/UConnDining/DiningParsing";
import { Ionicons } from '@expo/vector-icons'; 


const LocationDining = (props, { navigation }) => {

    // const { location } = route.params

    const currentRegion = {
        latitude: 41.803514290987316, 
        longitude: -72.25226181074956,
        latitudeDelta: .01,
        longitudeDelta: .01
    }

    const [mapRegion, setMapRegion] = useState(currentRegion);
    const [diningModalTitle, setTitle] = useState();
    const [modal, setModal] = useState(false)
    const [image, setImage] = useState();
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

    const BuckleyCoords = {
        latitude: 41.80581989249787, 
        longitude: -72.24375360780738,
        latitudeDelta: .01,
        longitudeDelta: .01 
    }

    // async function getCurrentLocation() {
    //     const { status } = await Location.requestForegroundPermissionsAsync()
    //     if(status !== 'granted') {
    //         setErrorMsg("Permission to access location is denied");
    //         return;
    //     }
    
        
    //     let location = await Location.getCurrentPositionAsync({})
    //     const lat = location["coords"]["latitude"]; // these are current location values
    //     const long = location["coords"]["longitude"]
        // const currentRegion = {
        //     latitude: lat, 
        //     longitude: long,
        //     latitudeDelta: .01,
        //     longitudeDelta: .01
        // }
    
    //     setMapRegion(currentRegion)
    //     console.log("Centered on current location")
    // }
    

    function handleBack() {
        navigation.back()
    }

    function setMapUtility(state, name, region, image) {
        setModal(state)
        setTitle(name)
        setMapRegion(region)
        setImage(image)
    }

    async function saveMealData() {
        setData(await props.mealsData)
    }

    function modalSet(state) {
        setModal(state)
    }

    useEffect(() => {
        // getCurrentLocation();
        saveMealData()
        meals()
    }, [])

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
                    <MapView.Marker onPress={() => setMapUtility(true, "Northwest", NWCoords, Nortwest_dining)} title={"Northwest Dining hall"} coordinate={NWCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                        
                    <MapView.Marker onPress={() => setMapUtility(true, "Putnam", putnamCoords, Putnam_dining)} title={"Putnam Dining Hall"} coordinate={putnamCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "South", southCoords, South_dining)} title={"South Dining Hall"} coordinate={southCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "McMahon", McMahonCoords, Mcmahon_dining)} title={"McMahon Dining Hall"} coordinate={McMahonCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "Whitney", whitneyCoords, Whitney_dining)} title={"Whitney Dining Hall"} coordinate={whitneyCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                    <MapView.Marker onPress={() => setMapUtility(true, "Buckley", BuckleyCoords, Buckley_dining)} title={"Buckley Dining Hall"} coordinate={BuckleyCoords} description={"Dining hall"}>
                        {markerImage}
                    </MapView.Marker>

                </MapView>
                <View style={{ position: 'absolute', marginTop: 60, backgroundColor: 'black', borderRadius: 50, marginLeft: 20, width: 40, height: 40, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={handleBack}><Ionicons style={{ marginLeft: 5 }} name="arrow-back" size={30} color="white" /></TouchableOpacity>
                </View>
                <ModalDining image={image} menuData={data} title={diningModalTitle} isVisible={modal} modalCancel={() => modalSet(false)} />
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