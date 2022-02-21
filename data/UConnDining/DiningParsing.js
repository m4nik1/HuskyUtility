import React, { useState, useEffect } from 'react'
import axios from "axios"
import moment from 'moment';
import { View, StyleSheet} from "react-native"

export async function meals() {
    let mealHtml;
    let stationName


    async function diningScrape(diningHall) {
        let toScrape;
        let day = moment().format('D');
        let month = moment().format('M');
        let year = moment().format('Y')
        let urlDate = `${month}%2f${day}%2f${year}`
    
        const Halls = {
            "Northwest": {
                "url_name": "Northwest+Marketplace",
                "url_id": "15",
            },
            "Putnam": {
                "url_name": "Putnam+Dining+Hall",
                "url_id": "06"
            },
            "South": {
                "url_name": "South+Campus+Marketplace",
                "url_id": "16"
            },
            "McMahon": {
                "url_name": "McMahon+Dining+Hall",
                "url_id": "05"
            },
            "Whitney": {
                "url_name": "Whitney+Dining+Hall",
                "url_id": "01"
            },
            "Buckley" : {
                "url_name": "Buckley+Dining+Hall",
                "url_id": "03"
            },
        }
        // console.log("THIS IS WHAT IS PICKED" + " " + Halls[diningHall]["url_name"])
    
        await axios.get(`http://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=${Halls[diningHall]["url_id"]}&locationName=${Halls[diningHall]["url_name"]}&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=${urlDate}`)
            .then(res => {
                toScrape = res.data
            })
    
            .catch(err => {
                console.log(err)
        })
    
        const returnState = meals(String(toScrape))
        return returnState
    }
    
    
    function meals(data) {
        const allMeals = data.substring(data.indexOf("<div class=\"shortmenumeals\">"));
    
        let mealData = []
    
        mealHtml = allMeals.split("<div class=\"shortmenumeals\">")
    
        for(var i in mealHtml) {
            let mealName;
            if(i > 0) {
                mealName = mealHtml[i].substring(0, mealHtml[i].indexOf("</div>")) 
    
                mealData.push({ "mealName" : mealName, stations: stations(mealHtml[i]) })
    
            }
        }
        
        return mealData
    
    }
    
    
    function stations(data) {
        const stationHtml = data.split("<div class=\"shortmenucats\"><span style=\"color: #000000\">-- ");
        
        let stationData = []
    
        for(var s in stationHtml) {
            if(s > 0) {
                    stationName = stationHtml[s].substring(0, stationHtml[s].indexOf(" --</span></div>"))
    
                    stationData.push({ "Station_Name" : stationName, "food": food(stationHtml[s]) })
            }
        }
    
        return stationData
    }
    
    function food(data) {
        const foodHtml = data.split("<span style='color: #000000'>")
    
        const foods = []
    
        // ---------------------------------------------------------------- MAKE A FOOD OBJECT LATER ON ---------------------------------------------------------------------------------------------
    
        for(var f in foodHtml) {
            if(f > 0) {
                foods.push(foodHtml[f].substring(0, foodHtml[f].indexOf("&nbsp")))
            }
        }
    
        return foods
    }
    const H = ["Northwest", "Putnam", "South", "McMahon", "Whitney", "Buckley"]
    let dataReturn = {}
    for(var s in H) {
        const func = await diningScrape(H[s])
        dataReturn[H[s]] = func
    }
    // console.log(dataReturn)
    return dataReturn
}


