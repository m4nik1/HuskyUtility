import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Dimensions, Button, Pressable, Image, ScrollView, TouchableOpacity } from "react-native"
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
    const [loaded, setLoaded] = useState()
    let mealComponents = [];

    function cancelModal() {
        setBreaky(false)
        setLunch(false)
        setDinDin(false)
        setComponent(<View><Text></Text></View>)
        props.modalCancel()
    }

    

    async function mealComponent(mealTime) {
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

        // console.log(data)
        mealComponents.push(
            <MealCard
                stations={data[props.title][meal][mealTime]}
            />
        )

        setComponent(mealComponents);
    }

    async function fetchMeals() {
        let m = await meals()
        console.log("meals are done being fetched")
        changeData(await m)
    }

    function breakyPressed() {
        if(isBreaky) {
            setBreaky(false)
        }
        else {
            setLoaded(true)
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
    }, [isBreaky, isDinDin, isLunch])

    if(props.isVisible) {
        return (
            
              <Modal onShow={() => mealComponent()} onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide" visible={props.isVisible}>
                <Image source={props.image}  style={{ width: Dimensions.get('window').width, height: 140, alignSelf: 'center' }} />
                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={() => cancelModal()}>
                        <AntDesign  name="leftcircle" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Card style={styles.modalView}>
                    {/* <ScrollView scrollEnabled={true} style={styles.scrollStyle}> */}
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.diningHall}>{props.title}</Text>
                        </View>
                        <Text style={{ marginTop:20, fontSize: 25, color: 'navy' }}>Menu</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: isBreaky ? "black" : "white", borderRadius: 10, height: 70, width: 80, marginTop: 20 }} >
                                <Pressable onPress={() => breakyPressed()}>
                                    <Feather style={{ marginLeft: 25, marginTop: 15 }} name="coffee" size={30} color={isBreaky ? "white": "black"} />
                                </Pressable>
                                <Text style={{ marginLeft: 7, color: isBreaky ? "white": "black"}}>Breakfast</Text>
                            </View>

                            <View style={{ marginLeft: 50, backgroundColor: isLunch ? "black" : "white", borderRadius: 10, height: 70, width: 80, marginTop: 20 }} >
                                <Pressable onPress={() => lunchPressed()}>
                                    <MaterialCommunityIcons name="food-fork-drink" style={{ marginLeft: 27, marginTop: 15 }}  size={30} color= {isLunch ? "white": "black"} />
                                </Pressable>
                                <Text style={{ marginLeft: 20, color: isLunch ? "white": "black"}}>Lunch</Text>
                            </View>

                            <View style={{marginLeft: 50, backgroundColor: isDinDin ? "black" : "white", borderRadius: 10, height: 70, width: 80, marginTop: 20 }} >
                                <Pressable onPress={() => DinDinPressed()}>
                                    <MaterialCommunityIcons name="food-steak" style={{ marginLeft: 25, marginTop: 15 }} size={30} color= {isDinDin ? "white": "black"} />
                                </Pressable>
                                <Text style={{ marginLeft: 20, color: isDinDin ? "white": "black"}}>Dinner</Text>
                            </View>
                        </View>
                        <ScrollView contentInset={{bottom: 180}}  scrollEnabled={true} style={styles.scrollStyle}>
                            <View>
                                {component}
                            </View>
                        </ScrollView>
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
    scrollStyle: {
        height: "100%",
        width: "100%",
        paddingVertical: 20
    },
})

export default ModalDining;

