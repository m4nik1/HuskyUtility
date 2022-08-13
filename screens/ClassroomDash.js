import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClassroomDash = ({props, navigation}) => {
    return (
        <View>
            <Text>
                Welcome to classroom space!
            </Text>
            <View style={{ position: 'absolute', marginTop: 60, backgroundColor: 'black', borderRadius: 50, marginLeft: 20, width: 40, height: 40, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons style={{ marginLeft: 5 }} name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignContent: 'center'
    }
})

export default ClassroomDash;