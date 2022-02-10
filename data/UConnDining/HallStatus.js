import moment, { min } from "moment";
import React from "react";

export function HallStatus(name) {
    function determineStatus() {
        let statusD;
        let hourDiff = moment("7 pm", "hm a").fromNow();
        let breakHourDiff = moment("2:30 pm", "hm a").fromNow();
        if(hourDiff.split(' ')[1] == 0 || hourDiff.split(' ')[2] == "ago") {
            statusD = "Closed"
        }
        else if(breakHourDiff.split(' ') == 0 || breakHourDiff.split(' ')[2] == "ago") {
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