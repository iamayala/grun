import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { StatusBarHeight } from './constants'

export class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: StatusBarHeight
      }}>
        <View style={{
          flexDirection : "row",
          alignItems: "center",
          position: "absolute",
          top: StatusBarHeight + 15,
          left: 15,
          right: 15,
          zIndex: 1,
          justifyContent: "space-between"
        }}>
          <View>
          <Image source={require('../assets/arrow-left.png')} style={{
                      height: 55,
                      width: 55,
                      resizeMode: 'contain'
                  }} />
          </View>
          <TouchableOpacity>
                <Image source={require('../assets/arrow-left.png')} style={{
                      height: 55,
                      width: 55,
                      resizeMode: 'contain'
                  }} />
              </TouchableOpacity>
        </View>
        <ImageBackground 
        source={{ uri: 'https://img.freepik.com/premium-vector/city-map-navigate-route_23-2148309838.jpg?w=2000' }}
        style={{
          flex: 1,
        }}/>

      </View>
    )
  }
}

export default Home