import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-web";
import DiningHallStatus from "../data/UConnDining/DiningHallStatus";
import Card from "./Card";

const ModalDining = props => {

    function cancelModal() {
        props.modalCancel()
        console.log("Modal is being canceled")
    }


    

    if(props.isVisible) {
        return (
            
              <Modal onRequestClose={() => {cancelModal()}} transparent={true} presentationStyle="overFullScreen" animationType="slide">
                <Card style={styles.modalView}>
                    <Text style={styles.diningHall}>{props.title}</Text>
                    <DiningHallStatus name={props.title} />
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

