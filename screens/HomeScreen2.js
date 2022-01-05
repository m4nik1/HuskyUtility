import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import ClassHomeWidget from "../components/classWidget"
import { classItems } from "../data/classData";

const Home2 = () => {

    const [data, changeData] = useState(classItems);

    
    return (
        <ClassHomeWidget data_given={data} />
    )
}

const styles = StyleSheet.create({
})

export default Home2;