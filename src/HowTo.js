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

                        <Image source={{ uri: "https://raw.githubusercontent.com/iamayala/sileeence/master/assets/hellobg.png?token=GHSAT0AAAAAABUJLQS22ZAETNS4EWWZUNKMYXLNKIQ" }} style={{
                            height: HEIGHT * .6,
                            width: WIDTH,
                            resizeMode: 'cover'
                        }} />

                        { item.id == 4 &&

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Profile")}
                            style={{
                                position: 'absolute',
                                bottom: HEIGHT * .15,
                                height: 63,
                                // width: "100%",
                                left: 0,
                                right: 0,
                                marginHorizontal: 20,
                                backgroundColor: '#EBEAEC',
                                justifyContent: "center",
                                alignItems: 'center',
                                borderRadius: 38,
                                marginBottom: 20
                            }}>
                            <Text style={{
                                color: textColor,
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