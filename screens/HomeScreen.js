import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList, Button } from "react-native";
import moment from "moment";
import ClassCard from "../components/Class";
import { classItems } from "../data/classData";


const Home = props => {

    const currentMinutes = moment().format("mm");

    const [day, changeDay] = useState(props.current_day);
    const [data, changeData] = useState();

    useEffect(() => {
        changeData(classItems[day])
    }, [currentMinutes])

    if(props.shouldRengar) {
        return (
            <View>
                <View style={styles.backBtn}>
                    <Button title="back" onPress={() => props.changeScreen("home")} />
                </View>
                <View style={styles.classContainer}>
                    <Text style={styles.title}>Classes</Text>
                    <FlatList
                        keyExtractor={item => item.id}
                        style={styles.scrollView}
                        data={data}
                        renderItem={itemData => (
                            <ClassCard
                                hour={itemData.item.hour}
                                minute={itemData.item.minute}
                                ClassName={itemData.item.className}
                                Time={itemData.item.time}
                                prof={itemData.item.profName}
                                location={itemData.item.location}
                                mode={itemData.item.mode}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }
    else {
        return(
          null
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column"
    },
    classContainer:{
        alignContent: "center",
        alignItems: "center",
        height: "100%"
    },
    title: {
        alignItems:"center",
        marginTop:50,
        fontSize: 40,
        paddingTop: 20
    },
    scrollView: {
        width: "100%"
    },
    backBtn: {
        marginTop: 50,
        marginRight: 300
    }
})



export default Home;