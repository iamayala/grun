import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,FlatList, ScrollView, Platform, ActivityIndicator, TextInput, StyleSheet } from 'react-native'
import { StatusBarHeight, textColor, WIDTH, lightColor, primary, profiles, greyColor, FrequentlyAskedQuestions, supportmessages, HEIGHT } from './constants'
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export class Support extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       FAQ: FrequentlyAskedQuestions,
       supportmessages: supportmessages,
       GRUN_USER: { id: 1 },
       usermessage: "",
       showChatter: false
    }
  }


  render() {

    const { FAQ, supportmessages, GRUN_USER, showChatter } = this.state

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
        }}>Support</Text>


        <TouchableOpacity 
        onPress={() => this.setState({ showChatter: true })}
        style={{
          backgroundColor: primary,
          position: "absolute",
          right: 15,
          bottom: 50,
          zIndex: 1,
          flexDirection: "row",
          alignItems: "center",
          height: 50,
          borderRadius: 10,
          paddingHorizontal: 20,
          maxWidth: WIDTH * .75 }}>
          <Text style={{
            color: "#fff"
          }}>Hello, Can I Help You With Something Today?</Text>
        </TouchableOpacity>

        <FlatList
        data={FAQ}
        keyExtractor={item => item.id.toString() }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={() => this.setState({ activeQuestion: item })} 
            style={{
              marginHorizontal: 5,              
              borderBottomColor: "#ebebeb",
              borderBottomWidth: 1
            }}>
              <View style={{
                height: 63,
                justifyContent: "space-between",
              alignItems : "center",
              flexDirection: "row", 
              }}>
                <Text>{item.question}</Text>
                <MaterialCommunityIcons name={this.state.activeQuestion ? "chevron-up" : "chevron-down"} size={24} color="#777" />
              </View>
              { this.state.activeQuestion == item &&
              <Text style={{ paddingBottom: 20 }}>{item.answer}</Text> }

              <View
              style={{
                height: item.id == FAQ.length ? HEIGHT * .2 : 0
              }}/>

            </TouchableOpacity>
          )
        }} />

        { showChatter && 

        <View style={{
          backgroundColor: "#fff",
          position: "absolute",
          top: 0,
          left: 0,
          bottom : 0,
          right: 0,
          zIndex: 2,
          flex: 1
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
              }}>Customer Support Team</Text>

              <TouchableOpacity style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 40,
                height: 40,
                width: 40,
                marginHorizontal: 5
              }}>
                <MaterialIcons name="repeat" size={24} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={() => this.setState({ showChatter: false })}
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


          <KeyboardAwareScrollView 
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ height: "100%" }}
          scrollEnabled={true}>

            <FlatList 
            data={supportmessages}
            nestedScrollEnabled
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 15 }}
            keyExtractor={item => item.conversationid.toString()}
            renderItem={({ item }) => {
              return (
                  <TouchableOpacity
                      activeOpacity={.9}
                      style={{
                          flexDirection: 'row',
                      }}>

                      {item.sender == GRUN_USER.id && <View style={{ flex: 1 }} /> }
                      <View style={{
                          marginBottom: 10,
                      }}>

                          <View style={{                                    
                                  maxWidth: WIDTH * 0.75,
                                  paddingVertical: 10,
                                  paddingHorizontal: 10,
                                  borderRadius: 10,
                                  backgroundColor: item.sender == GRUN_USER.id ? primary : lightColor
                              }}>
                              <Text style={{                                    
                                  fontSize: 15,
                                  color: item.sender == GRUN_USER.id ? '#fff' : "#000"
                              }}>
                                  {item.content}
                              </Text>

                          </View>
                          
                          {item.suggestedReplies.map((x,y) => {
                            return (
                              <TouchableOpacity 
                              key={y}
                              style={{
                                height: 45,
                                borderColor: lightColor,
                                borderWidth: 1.7,
                                marginTop: 10,
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                flexDirection: "row",
                                alignItems: "center"
                              }}>
                                <Text>{x.reply}</Text>
                              </TouchableOpacity>
                            )
                          })}



                      </View>
                  </TouchableOpacity>
              )
            }} />


              <View style={{
                marginHorizontal: 15,
                height: 63,
                marginBottom: 25,
                borderRadius: 15,
                paddingHorizontal: 20,
                backgroundColor: lightColor,
                flexDirection: "row",
                alignItems: "center"
              }}>
                <TextInput
                  placeholder='Write message...'
                  value={this.state.usermessage}
                  onChangeText={e => this.setState({ usermessage: e })}
                  placeholderTextColor={greyColor}
                  style={{
                    flex: 1
                  }} />
                  <TouchableOpacity>
                    <Text style={{ marginHorizontal: 10, fontWeight: "500" }}>SEND</Text>
                  </TouchableOpacity>
              </View>

          </KeyboardAwareScrollView>

        </View>  
        
        }

      </View>
    )
  }
}

export default Support

const styles = StyleSheet.create({
  item: {
      height: 63,
      justifyContent: "space-between",
      marginHorizontal: 5,
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
      marginRight: 20,
      color: "#444"
  }
})