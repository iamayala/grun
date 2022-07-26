import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { StatusBarHeight, textColor } from './constants'

export class SubAccounts extends Component {
  render() {
    return (
      <View style={{
        paddingTop: StatusBarHeight + 15,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
      }}>
        <View>
              <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../assets/arrow-left.png')} style={{
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
            marginBottom: 20
        }}>Sub Accounts</Text>
      </View>
    )
  }
}

export default SubAccounts