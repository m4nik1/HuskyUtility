import React from "react";
import { View, Modal, StyleSheet, Text, Button } from "react-native"
import Card from "./Card";

const ModalDining = props => {

    function cancelModal() {
        props.modalCancel(false)
    }

    if(props.isVisible) {
        return (
            <View>
                <Modal animationType="slide" visible={props.isVisible} transparent={true}>
                    <Card style={styles.modalView}>
                        <Text>Dining Hall Title</Text>
                        <Text>Menu</Text>
                        <Button title='Exit' onPress={() => cancelModal()} />
                    </Card>
                </Modal>
            </View>
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
        marginTop: 700
    }
})

export default ModalDining;