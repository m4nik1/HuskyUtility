import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'galio-framework';
import Card from '../components/Card';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const HomeDashboard = ({navigation}) => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={{ fontWeight: 'bold' }} h4>Dashboard</Text>
                <Card style={styles.diningCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dining-Maps')}>
                        <MaterialIcons name="local-dining" size={60} color="black" />
                        <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 20 }}>Dining</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.classroomCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('Classroom-Space')}>
                            <MaterialCommunityIcons name="desk" size={60} color="navy" />
                            <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 15 }}>Classroom Space</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    titleContainer: {
        marginTop: 60,
        marginLeft: 15
    },
    diningCard: {
        margin: 20,
        marginTop: 50,
        height: 130,
        width: 120,
        alignItems: 'center'
    },
    classroomCard: {
        height: 130,
        width: 120,
        marginLeft: 20,
        marginTop: 50,
        alignItems: 'center'

    }
})

export default HomeDashboard;