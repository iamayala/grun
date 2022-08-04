import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,FlatList, ScrollView, Platform, ActivityIndicator, TextInput, StyleSheet } from 'react-native'
import { StatusBarHeight, textColor, WIDTH, lightColor, primary, profiles, greyColor, FrequentlyAskedQuestions, supportmessages, HEIGHT } from './constants'
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PhoneInput from 'react-native-phone-number-input';

export class AppSettings extends Component {
  render() {
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
        }}>Settings</Text>
    </View>
    )
  }
}

export default AppSettings