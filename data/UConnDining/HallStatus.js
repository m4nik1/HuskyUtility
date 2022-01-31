import moment, { min } from "moment";
import React from "react";
import { View, Modal, StyleSheet, Text, Button, Pressable } from "react-native"

export function HallStatus(name) {
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

    let hour =  7//moment().format('h');
    let minute =  45//moment().format('m');
    let timeOfDay =  "pm"//moment().format("a")

    function determineStatus() {
        let statusD;
        let hourDiff = moment("7 pm", "hm a").fromNow();
        if(hourDiff.split(' ')[1] == 0 || hourDiff.split(' ')[2] == "ago") {
            console.log("Closed")
            statusD = "Closed"
        }

        // else if (hour == hallsTime[name]["break"]["Hour"] && minute ==  hallsTime[name]["break"]["minute"]) {
        //     console.log("ON BREAK")
        //     return "On break"
        // }
        else {
            console.log("OPEN")
            return "Open"
        }
        return statusD
    }

    let status = determineStatus(name)
    return status
}