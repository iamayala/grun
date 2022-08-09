import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { HEIGHT, primary, StatusBarHeight, WIDTH, textColor, lightColor, howTo } from './constants'

export class HowTo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         slides: howTo
      }
    }
  render() {

    const { slides } = this.state

    return (
      <View style={{
          backgroundColor: lightColor,
          paddingTop: StatusBarHeight,
          flex: 1,
          alignItems: 'center'
      }}>

          <Image source={require('../assets/grunappblack.png')} style={{
              width: WIDTH * .4,
              height: 100,
              resizeMode: 'contain',
            }} />


            <FlatList
            data={slides}
            keyExtractor={item => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={{
                        width: WIDTH
                    }}>

                        <Image source={item.image} style={{
                            height: HEIGHT * .45,
                            width: WIDTH,
                            resizeMode: 'contain'
                        }} />



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
                            }}>{item.title}</Text>
                            <Text style={{
                                    color: textColor,
                                    fontSize: 16,
                                    marginTop: 10,
                                    textAlign: 'center'
                            }}>{item.description}</Text>
                        </View>

                        
                        { item.id == 4 &&

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Profile")}
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
                            }}>Next</Text>
                        </TouchableOpacity> }
                    </View>
                )
            }} />


      </View>
    )
  }
}

export default HowTo