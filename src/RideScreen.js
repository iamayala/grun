import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { HEIGHT, lightColor, primary, StatusBarHeight, textColor } from './constants'
import Modal from "react-native-modal";

export class RideScreen extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         YouAreStoppingModal: false
      }
    }


  render() {

    const  { YouAreStoppingModal } = this.state

    return (
        <View style={{
            // paddingTop: StatusBarHeight,
            flex: 1
          }}>
            <ImageBackground 
            source={{ uri: 'https://img.freepik.com/premium-vector/city-map-navigate-route_23-2148309838.jpg?w=2000' }}
            style={{
                flex: 1,
                resizeMode: "cover"
            }}>
                <View style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    paddingHorizontal: 15,
                    paddingBottom: 15
                }}>

                   
                    <View style={{
                        flexDirection: "row",
                    }}>
                        
                    <View style={{
                        backgroundColor: primary,
                        flex: 1,
                        borderRadius: 15,
                        marginHorizontal: 5,
                        height: HEIGHT * .35
                    }}>
                        <View style={{
                            flex: 1,
                            borderBottomWidth: 1,
                            borderBottomColor: "#A0A3B1",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{ color: "#fff",  }}>Time Elapsed</Text>
                            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 15 }}>7</Text>
                            <Text style={{ color: "#fff" }}>minutes</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{ color: "#fff" }}>Battery Level</Text>
                            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 15 }}>62</Text>
                            <Text style={{ color: "#fff" }}>%</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginHorizontal: 5
                    }}>
                        <View style={{
                            backgroundColor: primary,
                            flex: 1,
                            borderRadius: 15,
                            marginHorizontal: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 5

                        }}>
                            <Text style={{ color: "#fff" }}>Distance Covered</Text>
                            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 15 }}>257</Text>
                            <Text style={{ color: "#fff" }}>meters</Text>
                        </View>
                        <View style={{
                            backgroundColor: primary,
                            flex: 1,
                            borderRadius: 15,
                            marginHorizontal: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5
                        }}>
                            <Text style={{ color: "#fff" }}>Amount Consumed</Text>
                            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 15 }}>689</Text>
                            <Text style={{ color: "#fff" }}>RWF</Text>
                        </View>
                    </View>
                    </View>
                    <View>

                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("Home")}
                    style={{
                        height: 63,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                        marginTop: 15,
                        marginBottom: 20
                    }}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>STOP RIDE</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>


            {/* MODALS */}
        <Modal 
          onBackdropPress={() => this.setState({ YouAreStoppingModal: false })}
          isVisible={YouAreStoppingModal}>
            <View style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 15
            }}>

                <View style={{
                    alignItems :"center"
                }}>
                    <Image 
                        source={require('../assets/grunprofile.png')} 
                        style={{ height: 120, width: 120, borderRadius: 60, backgroundColor: lightColor }}
                    />
                </View>

                <View style={{
                    marginBottom: 10,
                    marginHorizontal: 30
                }}>


                    <Text style={{
                        fontSize: 20,
                            color: textColor,
                            textAlign: 'center',
                            marginTop: 10,
                            fontWeight: 'bold'
                    }}>Before You Go</Text>
                    <Text style={{
                            color: textColor,
                            fontSize: 16,
                            marginTop: 10,
                            textAlign: 'center'
                    }}>In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.</Text>
                </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10
              }}>
                <TouchableOpacity
                    onPress={() => this.setState({ YouAreStoppingModal: false })}
                    style={{
                        height: 63,
                        flex: 1,
                        marginRight: 5,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                    }}>
                    <Text style={{
                        color: '#F6F1FB',
                    }}>Yes, I agree</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.setState({ YouAreStoppingModal: false })}
                    style={{
                        height: 63,
                        flex: 1,
                        marginLeft: 5,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                    }}>
                    <Text style={{
                        color: '#F6F1FB',
                    }}>Yes, I agree</Text>
                </TouchableOpacity>

              </View>

              
            </View>

          </Modal>
        </View>
    )
  }
}

export default RideScreen