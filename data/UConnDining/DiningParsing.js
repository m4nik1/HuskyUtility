import React, { useState, useEffect } from 'react'
import axios from "axios"
import { View, StyleSheet} from "react-native"


const DiningParsing = () => {
    let mealHtml;
    let stationName

    const [data, setData] = useState()

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
    
        await axios.get(`http://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=${Halls[diningHall]["url_id"]}&locationName=${Halls[diningHall]["url_name"]}&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&dtdate=1%2f18%2f2022`)
            .then(res => {
                console.log("We are scraping")
                toScrape = res.data
            })
    
            .catch(err => {
                console.log(err)
        })
    
        return meals(String(toScrape))
    
    
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
     Promise.resolve(diningScrape("Northwest")).then(function(value) {
        setData(value)
        console.log(data)
    })

    return null
}

export default DiningParsing;