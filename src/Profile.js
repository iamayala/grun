import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialCommunityIcons,  MaterialIcons } from '@expo/vector-icons';
import { StatusBarHeight, textColor, primary, lightColor, HEIGHT } from './constants';

export class Profile extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: StatusBarHeight,
        backgroundColor: "#f7f7f7"
      }}>
        <ScrollView>

        <View style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 40,
          alignItems: "center"
        }}>
        <Image
            source={require('../assets/grunprofile.png')}
            style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: lightColor }}
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
          marginTop: 20,
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 15,
          borderBottomColor: "#7c7c7c",
          borderBottomWidth: 1
          }}>
            <Image
                source={require('../assets/logopay.png')}
                style={{ height: 30, width: 100, resizeMode: "contain" }}
            />
            <TouchableOpacity style={{
              height: 30,
              paddingHorizontal: 20,
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
onPress={() => this.props.navigation.navigate("Stats")}
style={[styles.item, { marginTop: 30 }]}>
    <View style={styles.itemR}>
    <Image
        source={require('../assets/Chart.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>Your Stats</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
onPress={() => this.props.navigation.navigate("SubAccounts")}
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/SubUser.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>Sub Accounts</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
onPress={() => this.props.navigation.navigate("HowTo")}
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/Document.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>How it works</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/Setting.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>Settings</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<TouchableOpacity 
onPress={() => this.props.navigation.navigate("Support")}
style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/Chat.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>Support</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>



<TouchableOpacity style={styles.item}>
<View style={styles.itemR}>
    <Image
        source={require('../assets/Logout.png')}
        style={{ height: 23, width: 23 }}
    />
    <Text style={styles.itemFont}>Logout</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#777" />
</TouchableOpacity>

<View style={{
  height: HEIGHT * .2
}} />
      </ScrollView>
        </View>

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
      marginLeft: 20,
      color: "#444"
  }
})