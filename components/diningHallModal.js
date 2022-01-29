import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import MealCard from '../components/mealCard'
import { meals } from "../data/UConnDining/DiningParsing";
import Card from "./Card";

const ModalDining = props => {

    const [component, setComponent] = useState()
    const [mealItems, changeMeal] = useState(props.menuData)
    const [data, changeData] = useState()

    function cancelModal() {
        props.modalCancel()
        console.log("Modal is being canceled")
    }

    async function mealComponent() {
        changeData(await meals())
        console.log(data)
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

    // useEffect(() => {
    //     mealComponent()
    // }, [])
    

    if(props.isVisible) {
        return (
            
              <Modal onShow={() => mealComponent()} onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide" visible={props.isVisible}>
                <Card style={styles.modalView}>
                    <Text style={styles.diningHall}>{props.title}</Text>
                    {/* {mealComponent()} */}
                    {component}
                    <Button title="Back to maps" onPress={() => cancelModal()} />
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
        height: 610,
        marginTop: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    diningHall: {
        fontSize: 30,
        fontWeight: '300',
        alignSelf: 'center'

    },
})

export default ModalDining;

