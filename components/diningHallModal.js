import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native"

const ModalDining = props => {
    return (
        <View>
            <Modal>
                <View>
                    <Text>Dining Hall Title</Text>
                    <Text>Menu</Text>
                </View>
            </Modal>
        </View>
    );
}

export default ModalDining;