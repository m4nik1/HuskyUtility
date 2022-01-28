import React, { useState, useEffect } from 'react'
import axios from "axios"
import { View, StyleSheet} from "react-native"


const DiningParsing = () => {
    async function diningScrape(diningHall, date) {
        let toScrape;
    
        const Halls = {
            "Northwest": {
                "url_name": "Northwest+Marketplace",
                "url_id": "15",
            },
            "Putnam": {
                "url_name": "Putnam+Dining+Hall",
                "url_id": "06"
            },
        }
    
        await axios.get(`http://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=${Halls[diningHall]["url_id"]}&locationName=${Halls[diningHall]["url_name"]}&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=${date}`)
            .then(res => {
                console.log("We are scraping")
                toScrape = res.data
            })
    
            .catch(err => {
                console.log(err)
        })
        // console.log(toScrape)
        const $ = cheerio.load(toScrape)
    
        return meals(String(toScrape))
    
    
    }
    
    
    function meals(data) {
        const allMeals = data.substring(data.indexOf("<div class=\"shortmenumeals\">"));
    
        let mealData = []
    
        mealHtml = allMeals.split("<div class=\"shortmenumeals\">")
        // stations(mealHtml[1])
    
        for(i in mealHtml) {
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
    
        for(s in stationHtml) {
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
    
        for(f in foodHtml) {
            if(f > 0) {
                foods.push(foodHtml[f].substring(0, foodHtml[f].indexOf("&nbsp")))
            }
        }
    
        return foods
    }

    function mealReturn() {
        Promise.resolve(diningScrape("Northwest")).then(function(value) {
            console.log(value)
            return value
        })
    }
}

export default DiningParsing;