import { View, Text, Animated, StyleSheet, Dimensions, PanResponder} from 'react-native'
import { useRef, useState} from 'react'

const DiningDrawer = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
              });
            },
            onPanResponderMove: Animated.event(
              [
                null,
                { dx: pan.x, dy: pan.y }
              ]
            ),
            onPanResponderRelease: () => {
              pan.flattenOffset();
            }
          })
        ).current;

    const HorizontalLine = () => {
        return (
            <View style={styles.horizontalLine} />
    
        )
    }


    return (
        <Animated.View style={{transform: [{ translateX: pan.x}, { translateY: pan.y }]}} { ...panResponder.panHandlers }>
            <HorizontalLine />
            {/* <Text style={{ alignSelf: 'center', marginTop: 10 }}>Dining Halls</Text> */}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
      position: 'absolute',
      marginTop: 750,
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
    },
    horizontalLine: {
        marginTop: 5,
        marginBottom: 0,
        marginRight: 0,
        height: 5,
        borderRadius: 20,
        width: '20%',
        alignSelf: 'center',
        backgroundColor: "#D3D3D3",
    },
})


export default DiningDrawer;