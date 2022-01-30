import moment, { min } from "moment";
import React from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"

const hallsTime = {
    "Northwest": {
        "break": {
            "Hour": 2,
            "minute": 30,
            "dayTime": "pm",
        },
        "close": {
            "Hour": 7, 
            "minute": 45,
            "dayTime": "pm"
        }
    },
    "Putnam": {
        "break": {
            "Hour": 2,
            "minute": 30,
            "dayTime": "pm",
        },
        "close": {
            "Hour": 7, 
            "minute": 45,
            "dayTime": "pm"
        }
    },
    "South": {
        "break": {
            "Hour": 2,
            "minute": 0,
            "dayTime": "pm",
        },
        "close": {
            "Hour": 7, 
            "minute": 45,
            "dayTime": "pm"
        }
    },
    "McMahon": {
        "break": {
            "Hour": 2,
            "minute": 15,
            "dayTime": "pm",
        },
        "close": {
            "Hour": 7, 
            "minute": 45,
            "dayTime": "pm"
        }
    },
    "Whitney": {
        "break": {
            "Hour": 3,
            "minute": 0,
            "dayTime": "pm",
        },
        "close": {
            "Hour": 7, 
            "minute": 45,
            "dayTime": "pm"
        }
    }
}

export function HallStatus(name) {

    let hour = moment().format('h');
    let minute = moment().format('m');

    function determineStatus(name) {
        if (hour == hallsTime[name]["break"]["Hour"] && minute ==  hallsTime[name]["break"]["minute"]) {
            console.log("ON BREAK")
            return "On break"
        }
        else if(hour == hallsTime[name]["close"]["Hour"] && minute ==  hallsTime[name]["close"]["minute"]) {
            console.log("CLOSED")
            return "Closed"
        }
        else {
            console.log("OPEN")
            return "Open"
        }
    }

    return determineStatus(name)
}