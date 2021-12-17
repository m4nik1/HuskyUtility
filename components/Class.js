import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import moment from 'moment';

const ClassCard = props => {

  const [duration, setDuration] = useState();
  const [date, setDate] = useState(Date.now());
  const [currentMinutes, setMinutes] = useState(moment().format("mm"));
  const [currentHour, setHour] = useState(moment().format("hh"));
  const timeLeft = <Text style={styles.durationText}>in { duration }m</Text>
  const otherTimeLeft = <Text></Text>


  const findDuration = () => {
    if(currentHour == props.hour) {
      let minute = props.minute - currentMinutes;
      if(minute > 0) {
          
          setDuration(minute);
          // add notifications here
      }

    }

    else if(props.minute == 0 && (props.hour-1) == currentHour) {
      let minute = currentMinutes - 0

      if(minute > 0) {
        setDuration(minute)
      }

    }

    else {
      setDuration();
    }

    setMinutes(moment().format("mm"))
    setHour(moment().format("hh"));

  }

    useEffect(() => {
      const interval = setInterval(() => findDuration(), 1000)

      return(() => clearInterval(interval));

    }, [currentMinutes]);

  return(
    <View style={{...styles.card, ...props.style}}>
        {props.children}
        <Text>{props.ClassName}</Text>
        { duration ? timeLeft : otherTimeLeft}
        {/* { timeLeft } */}
        <Text style={styles.timeText}>{props.Time}</Text>
        <Text style={styles.profText}>{props.prof}</Text>
        <View style={styles.locationText}>
            <Text>{props.location}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 15,
    borderRadius: 20,
    width: 330,
    height: 100,
    marginTop: 50,
    alignContent:"center",
    marginLeft: 20
  },
  timeText: {
      marginLeft: 150,
  },
  profText: {
      marginLeft: 160,
  },
  durationText: {
    marginLeft: 190,
    color: "green",
    fontSize: 12
  }
})

export default ClassCard;