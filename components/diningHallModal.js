import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import MealCard from '../components/mealCard'
import Card from "./Card";

const ModalDining = props => {

    function cancelModal() {
        props.modalCancel()
        console.log("Modal is being canceled")
    }

    async function mealComponent() {
        let data = await props.menuData
        let mealComponents = [];

        // console.log(data)
        
        for(var i in data) {
            mealComponents.push(
                <MealCard
                    key={data[i]["mealName"]} 
                    meal = {data[i]["mealName"]}
                    stationTitle = {data[i]["stations"]}
                />
            )
        }
        return mealComponents
    }

    // useEffect(() => {
    //     mealComponent()
    // }, [])
    

    if(props.isVisible) {
        return (
            
              <Modal onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide">
                <Card style={styles.modalView}>
                    <Text style={styles.diningHall}>{props.title}</Text>
                    {}
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

