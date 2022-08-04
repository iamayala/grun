import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,FlatList, ScrollView, Platform, ActivityIndicator, TextInput, StyleSheet } from 'react-native'
import { StatusBarHeight, textColor, WIDTH, lightColor, primary, profiles, greyColor, FrequentlyAskedQuestions, supportmessages, HEIGHT } from './constants'
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PhoneInput from 'react-native-phone-number-input';

export class Recharge extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         amount: "",
         tab: "mobilepay",
         showCardPayment: false,
         Loading: false
      }
    }


  render() {

    const { tab, showCardPayment, Loading } = this.state
    
    return (
    <View style={{
        paddingTop: StatusBarHeight + 15,
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
      }}>
        <View>
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
            marginHorizontal: 5
        }}>Recharge</Text>


        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
                // backgroundColor: primary
            }}>
                <TouchableOpacity 
                onPress={() => this.setState({ tab: "mobilepay" })}
                style={{
                    height: 63,
                    backgroundColor: tab == "mobilepay" ? primary : lightColor,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 30,
                    marginBottom: 20,
                    paddingHorizontal: 35,
                    marginRight: 5,
                    flex: 1,
                }}>
                    <Text style={{
                        color: tab == "mobilepay" ? "#fff" : textColor
                    }}>MTN/Airtel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.setState({ showCardPayment: true })}
                style={{
                    height: 63,
                    flex: 1,
                    marginLeft: 5,
                    backgroundColor: tab == "cardpay" ? primary : lightColor,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 30,
                    marginBottom: 20,
                    paddingHorizontal: 35
                }}>
                    <Text style={{
                        color: tab == "cardpay" ? "#fff" : textColor
                    }}>Debit/Credit Card</Text>
                </TouchableOpacity>
            </View>
          </View>


        <PhoneInput
        // ref={this.phone}
        defaultValue={this.state.phone}
        defaultCode="RW"
        layout="first"
        flagButtonStyle={{ 
            padding: 0, height: 40, 
            margin: 0, marginHorizontal: 0 }}
        containerStyle={{
            height: 63,  marginTop: 15, 
            backgroundColor: lightColor, 
            borderRadius: 15, 
            paddingHorizontal: 5, 
            alignItems: 'center', 
            padding: 0,
            width: "100%", 
            marginBottom: 0
        }}
        textContainerStyle={{ 
            paddingVertical: 0, 
            backgroundColor: 'transparent', 
            paddingHorizontal: 0 }}
        textInputStyle={{ 
            flex: 1, paddingVertical: 0, 
            marginVertical: 0, paddingHorizontal: 0 , 
            backgroundColor: 'transparent' }}
        codeTextStyle={{ paddingHorizontal: 0 }}
        onChangeFormattedText={phone => this.setState({ phone })}
        placeholderTextColor={greyColor}
        />

        <View style={{
            marginTop: 20,
            // marginBottom: 
            height: 63,
            borderRadius: 15,
            paddingHorizontal: 20,
            backgroundColor: lightColor,
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Text style={{ marginHorizontal: 10, fontWeight: "500" }}>RWF</Text>
            <TextInput
            placeholder='0000'
            value={this.state.amount}
            keyboardType="numeric"
            onChangeText={e => this.setState({ amount: e })}
            placeholderTextColor={greyColor}
            style={{
                flex: 1
            }} />
        </View>

        <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TabNavigation")}
            style={{
                height: 63,
                backgroundColor: primary,
                justifyContent: "center",
                alignItems: 'center',
                borderRadius: 38,
                marginTop: 20,
                marginBottom: 20
            }}>
            <Text style={{
                color: '#F6F1FB',
            }}>Pay</Text>
        </TouchableOpacity>


        {/* CARD PAYMENT MODAL */}

        <Modal 
        isVisible={showCardPayment}
        style={{ 
            flex: 1,
            backgroundColor: "#fff",
            margin: 0,
            justifyContent: "flex-start",
        }}>
            <View style={{
            height: 70 + StatusBarHeight,
            paddingTop: StatusBarHeight,
            backgroundColor: primary,
            width: "100%",
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center"
          }}>

              <Text style={{
                color: "#fff",
                flex: 1,
                fontWeight: "500",
                fontSize: 16,
                marginLeft: 15 
              }}>Recharge</Text>

              <TouchableOpacity 
              onPress={() => this.setState({ showCardPayment: false })}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 40,
                height: 40,
                width: 40,
                marginHorizontal: 5
              }}>
                <MaterialIcons name="close" size={24} color="#fff" />
              </TouchableOpacity>

              

          </View>

          {/* ----------- ADD THE WEB VIEW HERE ------------------- */}
          <View style={{
            backgroundColor: lightColor,
            flex: 1
          }}></View>

        </Modal>



        {/* LOADING */}

        <Modal 
        isVisible={Loading}
        style={{ 
            flex: 1,
            margin: 0,
        }}>
            <ActivityIndicator size="small" color={lightColor} />
        </Modal>

    </View>

    )
  }
}

export default Recharge