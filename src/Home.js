import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { StatusBarHeight } from './constants'
import WebView from 'react-native-webview';

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

        {/* <WebView
          scalesPageToFit={false}
          javaScriptEnabled={true}
          javaScriptEnabledAndroid={true}
          originWhitelist={['*']}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccessFromFileURLs={true}
          source={{ uri: 'https://www.google.com/maps/@-1.949591,30.1011723,15z' }}
          domStorageEnabled={true}
          style={{ flex: 1 }}></WebView> */}

      </View>
    )
  }
}

export default Home