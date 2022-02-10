import React, { useState, useEffect } from 'react';
import { ButtonStyleSheet, View, StyleSheet } from 'react-native';
import axios from 'axios';


export function gettingDirections(lat, long, dest_lat, dest_long) {
    console.log("this is working")
    const API_key = 

    axios.post(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat}%2C${long}&destinations=${dest_lat}%2c${dest_long}&key=YOUR_API_KEY'`)


}