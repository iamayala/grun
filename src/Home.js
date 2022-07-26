import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { lightColor, primary, StatusBarHeight, textColor, languages } from './constants'
import WebView from 'react-native-webview';
import Modal from "react-native-modal";

export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       languages: languages,
       activeLanguage: {
          language: "English",
          flag: "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
        },
        languageModal: false
    }
  }

  componentDidMount() {
    this.fetchActiveLanguage()
  }

  fetchActiveLanguage = () => {
    let activeLanguage = this.state.languages[0]
    this.setState({ activeLanguage })
  }


  render() {
    const { activeLanguage, languages } = this.state
    return (
      <View style={{
        flex: 1,
        // paddingTop: StatusBarHeight
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
          <Image source={require('../assets/grunappblack.png')} style={{
                      height: 60,
                      width: 140,
                      resizeMode: 'contain',
                      // backgroundColor: "red"
                  }} />
          </View>
          <TouchableOpacity
          onPress={() => this.setState({ languageModal: true })}>
                <Image source={{ uri: activeLanguage.flag }} style={{
                      height: 30,
                      width: 30,
                      borderRadius: 30,
                      resizeMode: 'cover'
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


          <Modal 
          onBackdropPress={() => this.setState({ languageModal: false })}
          isVisible={this.state.languageModal}>
            <View style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10
            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                color: textColor,
                paddingVertical: 10
              }}>Change Language</Text>
              { languages.map((item, index) => {
                return (
                  <TouchableOpacity
                  key={index}
                  onPress={() => this.setState({ languageModal: false })}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 55,
                    borderBottomColor: index == languages.length - 1 ? "transparent" : lightColor,
                    borderBottomWidth: 1
                  }}>
                    <Text>{item.language}</Text>
                    {/* <Image source={require('../assets/check.png')} style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                      marginRight: 10
                  }} /> */}
                  </TouchableOpacity>
                )
              })}
            </View>

          </Modal>

      </View>
    )
  }
}

export default Home