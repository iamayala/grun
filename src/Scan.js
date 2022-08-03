import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image , StyleSheet} from 'react-native'
import { lightColor, primary, StatusBarHeight, textColor, WIDTH, HEIGHT  } from './constants'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons,  MaterialIcons, Entypo } from '@expo/vector-icons';


export class Scan extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasPermission: null,
       scanned: false
    }
  }

  componentDidMount(){
    this.handleHasPermission()
  }

  handleHasPermission= async() => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === "granted") {
      this.setState({ hasPermission: true })
    }
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true })
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };


  render() {
    return (
      <View style={{
        flex: 1,
        // paddingTop: StatusBarHeight,
      }}>
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
          // flex: 1
        }}>
        <Text style={{
            fontSize: 24,
            fontWeight: "bold",
            color: lightColor,
            textAlign: "center",
            marginBottom: -10
        }}>Scan QR code to unlock</Text>

        <View style={{
          height: WIDTH * .70,
          width: WIDTH * .70,
          borderRadius: 15,
          backgroundColor: "transparent",
          // marginVertical: 30
        }}/>

        <View style={{
          width: WIDTH *.7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}>

              <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("RideScreen")}              
              style={{
                      height: 70,
                      width: 70,
                      marginTop: HEIGHT * .1,
                      borderRadius: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: lightColor,
                      borderWidth: 1

                  }}>
            <MaterialCommunityIcons name="flashlight" size={26} color={lightColor} />

              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Image source={require('../assets/arrow-left.png')} style={{
                      height: 70,
                      width: 70,
                      resizeMode: 'contain',
                      tintColor: lightColor

                  }} />
              </TouchableOpacity> */}
        </View>

        </View>
        {/* <View style={{
          flex: 1,
          backgroundColor: primary
        }}></View> */}

        {/* <BarCodeScanner
        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
        style={{ flex: 1 }} */}

        <BarCodeScanner
            barCodeTypes={Platform.OS === 'ios' ? undefined : ['qr']}
            onBarCodeScanned={this.handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, {flex: 1,
            flexDirection: 'column'}]}>
            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom}>

            <View>
            </View>
            
            <View style={{flex:2,flexDirection:'row',alignItems:'center',
            justifyContent:'space-between'}}>

            </View>


            </View>
            </BarCodeScanner>
      {/* /> */}
      </View>
    )
  }
}

export default Scan


const opacity = primary
const styles = StyleSheet.create({
  layerTop: {
    flex: .9,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    height:HEIGHT,
    width:WIDTH*.7,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
})