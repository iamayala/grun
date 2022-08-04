import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { HEIGHT, lightColor, primary, StatusBarHeight, textColor } from './constants'

export class Stats extends Component {
  render() {
    return (
        <View style={{
            paddingTop: StatusBarHeight,
            flex: 1,
            backgroundColor: '#fff'
          }}>
            <ScrollView style={{
                paddingHorizontal: 20,
            }}>

                <View style={{
                    paddingTop: 15
                }}>
                <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}>
                    <Image 
                    source={require('../assets/arrow-left.png')} 
                    style={{
                        height: 55,
                        width: 55,
                        resizeMode: 'contain'
                    }} />
                </TouchableOpacity>
            </View>
            <Text style={{
                color: textColor,
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 20,
                marginBottom: 20,
                marginHorizontal: 5
            }}>My Stats</Text>

            <View style={{
                paddingBottom: 15
            }}>

                
                <View style={{
                    flexDirection: "row",
                }}>

                <View style={{
                    flex: 1,
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
                
                </View>

                <View style={{
                    backgroundColor: primary,
                    flex: 1,
                    borderRadius: 15,
                    marginHorizontal: 5,
                    paddingHorizontal: 25,
                    justifyContent: "center",
                    marginBottom: 5,
                    marginTop: 10,
                    height: HEIGHT * .15

                }}>
                    <Text style={{ color: "#fff" }}>Distance Covered</Text>
                    <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 7 }}>257</Text>
                    <Text style={{ color: "#fff" }}>meters</Text>
                </View>

                <View style={{
                    backgroundColor: primary,
                    flex: 1,
                    borderRadius: 15,
                    marginHorizontal: 5,
                    paddingHorizontal: 25,
                    justifyContent: "center",
                    marginBottom: 5,
                    marginTop: 5,
                    height: HEIGHT * .15

                }}>
                    <Text style={{ color: "#fff" }}>Distance Covered</Text>
                    <Text style={{ color: "#fff", fontSize: 26, fontWeight: "600", marginVertical: 7 }}>257</Text>
                    <Text style={{ color: "#fff" }}>meters</Text>
                </View>


                
                <View>
                </View>
            </View>
            </ScrollView>

        </View>
    )
  }
}

export default Stats