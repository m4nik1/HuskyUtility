import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Dimensions, Button, Pressable, Image, FlatList } from "react-native"
import MealCard from '../components/mealCard'
import { meals } from "../data/UConnDining/DiningParsing";
import Card from "./Card";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ModalDining = props => {

    const [component, setComponent] = useState()
    const [data, changeData] = useState()
    const [isBreaky, setBreaky] = useState(false);
    const [isLunch, setLunch] = useState(false);
    const [isDinDin, setDinDin] = useState(false);

    function cancelModal() {
        props.modalCancel()
    }

    

    async function mealComponent(mealTime) {
        let mealComponents = [];
        let meal = -1;

        if(mealTime == "Breakfast") {
            meal = 0
        }
        else if(mealTime == "Lunch") {
            meal = 1;
        }

        else {
            meal = 2;
        }

        // console.log(data[props.title][meal][mealTime])

        mealComponents.push(
            <MealCard
                stations={data[props.title][meal][mealTime]}
            />
        )

        setComponent(mealComponents);
    }

    async function fetchMeals() {
        let m = await meals()
        changeData(await m)
    }

    function breakyPressed() {
        if(isBreaky) {
            setBreaky(false)
        }
        else {
            fetchMeals()
            setLunch(false)
            setDinDin(false)
            setBreaky(true)
            mealComponent("Breakfast")
        }
    }

    function lunchPressed() {
        if(isLunch) {
            setLunch(false)

        }
        else {
            setBreaky(false)
            setDinDin(false)
            setLunch(true)
            mealComponent("Lunch")
        }
    }

    function DinDinPressed() {
        if(isDinDin) {
            setDinDin(false)
            
        }
        else {
            setBreaky(false)
            setLunch(false)
            setDinDin(true)
            mealComponent("Dinner")
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [])

    if(props.isVisible) {
        return (
            
              <Modal onShow={() => mealComponent()} onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide" visible={props.isVisible}>
                <Image source={props.image}  style={{ width: Dimensions.get('window').width, height: 140, alignSelf: 'center' }} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Pressable onPress={() => breakyPressed()} style={[styles.iconSelect, { backgroundColor:  isBreaky ? "#add8e6" : "white", borderRadius: 30, width: 35, height: 35 }]}>
                                <Feather name="coffee" size={30} color="black" style={{ alignSelf: 'center' }} />
                            </Pressable>
                            <Text style={{ marginLeft: 5 }}>Breakfast</Text>
                        </View>

                        <View style={{ marginLeft: 70 }}>
                            <Pressable onPress={() => lunchPressed()} style={[styles.iconSelect, { backgroundColor:  isLunch ? "#add8e6" : "white", borderRadius: 30, width: 35, height: 35 }]}>
                                <MaterialCommunityIcons name="food-fork-drink" size={30} color="black" />
                            </Pressable>
                            <Text style={{ marginLeft: 15 }}>Lunch</Text>
                        </View>


                        <View style={{ marginLeft: 70 }}>
                            <Pressable onPress={() => DinDinPressed()} style={[styles.iconSelect, { backgroundColor:  isDinDin ? "#add8e6" : "white", borderRadius: 30, width: 35, height: 35 }]}>
                                <MaterialCommunityIcons name="food-steak" size={30} color="black" />
                            </Pressable>
                            <Text style={{ marginLeft: 15 }}>Dinner</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        {component}
                    </View>
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
    },
    iconSelect: {
        marginTop: 30,
        marginLeft: 20
    },
    backgroundView: {

        
    },
})

export default ModalDining;

