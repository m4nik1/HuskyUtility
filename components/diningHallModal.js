import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Dimensions, Button, Pressable, Image } from "react-native"
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import MealCard from '../components/mealCard'
import { meals } from "../data/UConnDining/DiningParsing";
import { HallStatus } from "../data/UConnDining/HallStatus";
import Card from "./Card";
import { AntDesign } from '@expo/vector-icons';
import { gettingDirections } from '../data/directions'
import South_dining from "../assets/South_dining.jpg"
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ModalDining = props => {

    const [component, setComponent] = useState()
    const [data, changeData] = useState()

    function cancelModal() {
        props.modalCancel()
    }

    

    async function mealComponent() {
        console.log(props.status)
        let mealComponents = [];

            for(var i in data[props.title]) {
                mealComponents.push(
                    <MealCard
                        key={data[props.title][i]["mealName"]} 
                        meal = {data[props.title][i]["mealName"]}
                        stationTitle = {data[props.title][i]["stations"]}
                    />
                )
            }
            setComponent(mealComponents);
    }

    async function fetchMeals() {
        let m = await meals()
        changeData(await m)
    }

    useEffect(() => {
        fetchMeals()
        mealComponent()
    }, [])
    

    if(props.isVisible) {
        return (
            
              <Modal onShow={() => mealComponent()} onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide" visible={props.isVisible}>
                <Image source={South_dining}  style={{ width: Dimensions.get('window').width, height: 140, alignSelf: 'center' }} />
                <View style={styles.backBtn}>
                    <Pressable onPress={() => cancelModal()}>
                        <AntDesign  name="leftcircle" size={30} color="black" />
                    </Pressable>
                </View>
                

                <Card style={styles.modalView}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.diningHall}>{props.title}</Text>
                        {/* <Text style={styles.icons}>  {(HallStatus() === "Open") ? "✅" : "❌"} </Text> */}
                        {/* <Pressable onPress={() => gettingDirections()} style={{ justifyContent:'center', alignSelf:'center', marginTop: 30}}>
                            <FontAwesome5 name="directions" size={30} color="Black" />
                        </Pressable> */}
                    </View>
                    <Text style={{ marginTop:20, fontSize: 25, color: 'navy' }}>Menu</Text>
                    
                    {/* <View style={{ marginTop: 20 }}>
                        {component}
                    </View> */}
                </Card>
            </Modal>
        );
    }
    
    else {
        return (
            null
        )
    }
}

const styles= StyleSheet.create({
    modalView: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        borderRadius: 0
    },
    icons: {
        fontSize: 30,
        marginTop: 30,
    },
    diningHall: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'left'
    },
    backBtn: {
        position: 'absolute', 
        marginTop: 40, 
        marginLeft: 20,
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'white'
    }
})

export default ModalDining;

