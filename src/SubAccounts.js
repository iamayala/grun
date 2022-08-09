import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,FlatList, ScrollView, Platform, ActivityIndicator, TextInput } from 'react-native'
import { StatusBarHeight, textColor, WIDTH, lightColor, primary, profiles, greyColor, HEIGHT } from './constants'
import Modal from "react-native-modal";
import { MaterialIcons } from '@expo/vector-icons';

import PhoneInput from 'react-native-phone-number-input';

export class SubAccounts extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       profiles: profiles,
       addSubAccount: false,
       viewController: false,
       activeProfile: "",
       phone: "",
       addUserLoader: false,
       amount: ""
    }
  }

  removeProfile = item => {
    let arr = this.state.profiles
    let profiles = arr.filter(i => i != item)
    this.setState({ profiles, viewController: false })
  }


  render() {

    const { profiles, addSubAccount, viewController, activeProfile, addUserLoader } = this.state

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
            marginBottom: 20,
            marginHorizontal: 5
        }}>Sub Accounts</Text>

        <ScrollView>

          { profiles.length == 0 ?
          <View>

            <View style={{
              alignItems: "center",justifyContent: "center"
            }}>
              <Image source={require("../assets/CoinHand.png")} style={{
                  height: HEIGHT * .40,
                  width: WIDTH * .8,
                  resizeMode: 'contain',
              }} />

            </View>



            <View style={{
                marginBottom: 10,
                marginHorizontal: 30
            }}>
                <Text style={{
                    fontSize: 30,
                        color: textColor,
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: 'bold'
                }}>No Sub Accounts Yet</Text>
                <Text style={{
                        color: textColor,
                        fontSize: 16,
                        marginTop: 10,
                        textAlign: 'center'
                }}>You can Share your balance with your friends</Text>
            </View>

            <TouchableOpacity
                onPress={() => this.setState({ addSubAccount: true })}
                style={{
                    marginTop: 25,
                    height: 63,
                    marginHorizontal: 20,
                    backgroundColor: primary,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginBottom: 20
                }}>
                <Text style={{
                    color: lightColor,
                }}>Add Sub Account</Text>
            </TouchableOpacity>

            
          </View> :

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            { profiles.map((item, index) => {
              return(
                <TouchableOpacity 
                onLongPress={() => this.setState({ activeProfile: item, viewController: true })}
                key={index}
                style={{
                  marginHorizontal: item == activeProfile ? 0 : 5,
                  marginVertical: item == activeProfile ? 0 : 5,
                  borderWidth: item == activeProfile ? 5 : 0,
                  borderColor: item == activeProfile ? primary : "transparent"
                }}>
                  <Image source={{ uri: item.image }} style={{
                    height: (WIDTH / 3) - 20,
                    width: (WIDTH / 3) - 20,
                    resizeMode: "cover"
                  }} />
                  <View style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: 30,
                    backgroundColor: lightColor,
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Text style={{
                      color: textColor,
                      fontWeight: "500"
                    }} numberOfLines={1}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}) }
          
          <TouchableOpacity 
          onPress={() => this.setState({ addSubAccount: true })}
          style={{
            height: (WIDTH / 3) - 20,
            width: (WIDTH / 3) - 20,
            backgroundColor: lightColor,
            margin: 5,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <MaterialIcons name="add" size={60} color="#757575" />
          </TouchableOpacity>

          </View>  }



        </ScrollView>

        <Modal 
          onBackdropPress={() => this.setState({ addSubAccount: false })}
          isVisible={this.state.addSubAccount}>
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
                paddingVertical: 10,
                textAlign: 'center'
              }}>Provide Phone Of The user</Text>

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

                {/* <Text style={{
                    marginVertical: 10,
                    textAlign: 'center',
                    fontWeight: '600',
                    color: textColor
                }}>No User Found</Text> */}

                <View style={{
                  marginVertical: 10,
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
                    onChangeText={e => this.setState({ amount: e })}
                    placeholderTextColor={greyColor}
                    style={{
                      flex: 1
                    }} />
                </View>



                <TouchableOpacity
                onPress={() => this.setState({ addSubAccount: false })}
                style={{
                    height: 63,
                    backgroundColor: primary,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 10,
                    marginBottom: 10
                }}>
                  { addUserLoader ?
                    <ActivityIndicator size="small" color="#fff" /> :
                  <Text style={{
                      color: '#F6F1FB',
                  }}>Add User</Text> }
            </TouchableOpacity>


            </View>

          </Modal>



          { viewController &&
          <View style={{
            height: Platform.OS == "ios" ? 90 : 80,
            backgroundColor: primary,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            alignItems: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity 
            onPress={() => this.removeProfile(activeProfile)}
            style={{
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              height: 50,
              width: 50,
              marginHorizontal: 5
            }}>
              <Image 
                  source={require('../assets/Delete.png')} 
                  style={{
                      height: 30,
                      width: 30,
                      tintColor: "red",
                      resizeMode: 'contain'
                  }} />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{
              // hidden
              display: "none",

              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              height: 50,
              width: 50,
              marginHorizontal: 5
            }}>
              <Image 
                  source={require('../assets/Show.png')} 
                  style={{
                      height: 30,
                      width: 30,
                      tintColor: "#000",
                      resizeMode: 'contain'
                  }} />
            </TouchableOpacity>

            <View style={{ flex: 1 }} />

            <TouchableOpacity 
            onPress={() => this.setState({ activeProfile: "", viewController: false })}
            style={{
              marginHorizontal: 5
            }}>
              <Image 
                  source={require('../assets/close.png')} 
                  style={{
                      height: 50,
                      width: 50,
                      resizeMode: 'contain'
                  }} />
            </TouchableOpacity>
          </View>  }




      </View>
    )
  }
}

export default SubAccounts