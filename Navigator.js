import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import App from "./App";

const Tab = createBottomTabNavigator()

function TabBar() {
    <Tab.Navigator initialRouteName={'home'}>
        <Tab.screen name="home" component={App} />
    </Tab.Navigator>
}
