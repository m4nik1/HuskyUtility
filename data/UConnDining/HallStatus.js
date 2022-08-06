import moment, { min } from "moment";
import React from "react";

export function HallStatus(name) {
    function determineStatus() {
        let statusD = "Open"
        const openTimeTill = moment("2:27:10", "H:mm:ss").fromNow()
        console.log(openTimeTill)
        


        return statusD
    }

    let status = determineStatus(name)
    return status
}