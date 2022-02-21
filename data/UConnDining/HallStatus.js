import moment, { min } from "moment";
import React from "react";

export function HallStatus(name) {
    function determineStatus() {
        let statusD;
        let hourDiff = moment("7:45 pm", "hm a").fromNow();
        let openHourDiff = moment("7:00 am", "hm a").fromNow();
        let breakHourDiff = moment("2:30 pm", "hm a").fromNow();
        let breakHour = moment("4:00 pm", "hm a").fromNow();
        if((hourDiff.split(' ')[1] == 5 && hourDiff.split(' ')[2] == "minutes") || (openHourDiff.split(' ')[0] == "in" && openHourDiff.split(' ')[1] != "5" && openHourDiff.split(' ')[2] != "minutes")) {
            statusD = "Closed"
        }
        else if((breakHourDiff.split(' ')[1] == "5" && breakHourDiff.split(' ')[1] == "minutes") || (breakHour.split(' ')[0] == "in" && breakHour.split(' ')[1] != "2" && breakHour.split(' ')[2] != "minutes")) {
            console.log("on break")
            statusD = "on break"
        }
        else {
            return "Open"
        }
        return statusD
    }

    let status = determineStatus(name)
    return status
}