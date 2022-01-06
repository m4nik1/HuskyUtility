import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import moment from "moment";
import ClassCard from "../components/Class";
import { classItems } from "../data/classData";


const Home = props => {

    const current_day = moment().format('dddd');
    const currentMinutes = moment().format("mm");
    const currentHour = moment().format("hh")

    const [day, changeDay] = useState(current_day);
    const [data, changeData] = useState();

    useEffect(() => {
        changeData(classItems[day])
    }, [currentMinutes])

    if(props.shouldRengar) {
        return (
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
                        />
                    )}
                />
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
        flex:1,
        alignItems:"center",
        alignContent:"center",
    },
    title: {
        alignItems:"center",
        marginTop:50,
        fontSize: 40,
        paddingTop: 20
    },
    scrollView: {
        width: "100%"
    }
})



export default Home;