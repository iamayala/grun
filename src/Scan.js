import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { lightColor, primary, StatusBarHeight, textColor, WIDTH } from './constants'

export class Scan extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        // paddingTop: StatusBarHeight,
      }}>
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
          // flex: 1
        }}>
        <Text style={{
            fontSize: 24,
            fontWeight: "bold",
            color: lightColor,
            textAlign: "center"
        }}>Scan QR code to unlock</Text>

        <View style={{
          height: WIDTH * .70,
          width: WIDTH * .70,
          borderRadius: 15,
          backgroundColor: "white",
          marginVertical: 30
        }}/>

        <View style={{
          width: WIDTH *.7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}>

              <TouchableOpacity>
                <Image source={require('../assets/arrow-left.png')} style={{
                      height: 70,
                      width: 70,
                      resizeMode: 'contain',
                      tintColor: lightColor
                  }} />
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Image source={require('../assets/arrow-left.png')} style={{
                      height: 70,
                      width: 70,
                      resizeMode: 'contain',
                      tintColor: lightColor

                  }} />
              </TouchableOpacity> */}
        </View>

        </View>
        <View style={{
          flex: 1,
          backgroundColor: primary
        }}></View>
      </View>
    )
  }
}

export default Scan