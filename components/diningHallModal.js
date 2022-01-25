import React, {useState, useEffect} from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"
import DiningHallStatus from "../data/UConnDining/DiningHallStatus";
import Card from "./Card";

const ModalDining = props => {

    function cancelModal() {
        props.modalCancel(false)
        console.log("Modal is being canceled")
    }


    

    if(props.isVisible) {
        console.log("modal is true")



        return (
            <Modal transparent={true} presentationStyle="overFullScreen" animationType="slide">
                <Card style={styles.modalView}>
                    <Text>{props.title}</Text>
                    <DiningHallStatus />
                    <Text>Menu</Text>
                    <Button title='Exit' onPress={() => cancelModal()} />
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
        marginTop: 680
    },
})

export default ModalDining;

