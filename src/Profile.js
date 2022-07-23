import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons,  MaterialIcons } from '@expo/vector-icons';
import { StatusBarHeight, textColor, primary, lightColor } from './constants';

export class Profile extends Component {
  render() {
    return (
      <ScrollView style={{
        flex: 1,
        paddingTop: StatusBarHeight
      }}>
        <View style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 40,
          alignItems: "center"
        }}>
        <Image
            source={require('../assets/icon.png')}
            style={{ height: 100, width: 100, borderRadius: 50 }}
        />
        <View style={{
          flex: 1,
          marginHorizontal: 15
        }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: textColor }}>(+250) 780 000 000</Text>
          <TouchableOpacity>
            <Text style={{  color: textColor, marginTop: 10 }}>Update Profile</Text>
          </TouchableOpacity>

        </View>
        </View>


        <View style={{
          backgroundColor: primary,
          marginHorizontal: 15,
          borderRadius: 15,
          padding: 15,
          marginTop: 20
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Text>Wallet</Text>
            <TouchableOpacity style={{
              height: 35,
              paddingHorizontal: 25,
              backgroundColor: lightColor,
              justifyContent: "center",
              alignItems: 'center',
              borderRadius: 38,
            }}>
              <Text>Recharge +</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15
          }}>
            <Text style={{ color: lightColor, fontSize: 16 }}>Your Balance</Text>
            <Text style={{ color: lightColor,  fontSize: 17, fontWeight: "bold" }}>RWF 2900</Text>
          </View>

          {/* <Text style={{ color: lightColor, marginTop: 15 }}>Shared</Text> */}
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15
          }}>
            <Text style={{ color: lightColor, fontSize: 16 }}>Junior</Text>
            <Text style={{ color: lightColor,  fontSize: 17, fontWeight: "bold" }}>RWF 13,780</Text>
          </View>
        </View>

<TouchableOpacity 
style={[styles.item, { marginTop: 30 }]}>
    <View style={styles.itemR}>
    <Image
        source={require('../assets/arrow-left.png')}
        style={{ height: 18, width: 18 }}
    />
    <Text style={styles.itemFont}>Your Stats</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/arrow-left.png')}
        style={{ height: 18, width: 18 }}
    />
    <Text style={styles.itemFont}>Sub Accounts</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/arrow-left.png')}
        style={{ height: 18, width: 18 }}
    />
    <Text style={styles.itemFont}>Settings</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/arrow-left.png')}
        style={{ height: 18, width: 18 }}
    />
    <Text style={styles.itemFont}>Support</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Profile

const styles = StyleSheet.create({
  item: {
      height: 63,
      justifyContent: "space-between",
      marginHorizontal: 15,
      alignItems : "center",
      flexDirection: "row", 
      borderBottomColor: "#ebebeb",
      borderBottomWidth: 1
  },
  itemR: {
      flexDirection: "row",
      alignItems:"center",
      flex: 1
  },
  itemFont: {
      marginLeft: 15,
      color: "#444"
  }
})