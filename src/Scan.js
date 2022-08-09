import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image , StyleSheet} from 'react-native'
import { lightColor, primary, StatusBarHeight, textColor, WIDTH, HEIGHT  } from './constants'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialCommunityIcons,  MaterialIcons, Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";


export class Scan extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasPermission: null,
       scanned: false,
       ConfirmStartRide: false,
       onFailedQRCode: false
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
    this.verifyQRCode(data)
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  verifyQRCode = (data) => {
    data == "IAGA-M8CA" ? this.setState({ ConfirmStartRide: true, scanned: false }) : this.setState({ onFailedQRCode: true, scanned: false })
  }


  render() {

    const { ConfirmStartRide, onFailedQRCode } = this.state

    return (
      <View style={{
        flex: 1,
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

        </View>

        </View>

        {/* <BarCodeScanner
        barCodeTypes={Platform.OS === 'ios' ? undefined : ['qr']}
        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
        style={{ flex: 1 }}>
        
        <Image source={require("../assets/scannerbg.png")}
        style={{ width: WIDTH, height: HEIGHT, resizeMode: "cover" }} /> 

        </BarCodeScanner> */}

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


      {/* WHEN QR CODE SUCCEED */}
      <Modal 
          onBackdropPress={() => this.setState({ ConfirmStartRide: false })}
          isVisible={ConfirmStartRide}>
            <View style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 15
            }}>

                <View style={{
                    alignItems :"center"
                }}>
                    <Image 
                        source={require('../assets/Choose.png')} 
                        style={{ height: 120, width: 120 }}
                    />
                </View>

                <View style={{
                    marginBottom: 10,
                    marginHorizontal: 30
                }}>


                    <Text style={{
                        fontSize: 20,
                            color: textColor,
                            textAlign: 'center',
                            marginTop: 10,
                            fontWeight: 'bold'
                    }}>There You Go</Text>
                    <Text style={{
                            color: textColor,
                            fontSize: 16,
                            marginTop: 10,
                            textAlign: 'center'
                    }}>In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's.</Text>
                </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10
              }}>
                <TouchableOpacity
                    onPress={() => this.setState({ ConfirmStartRide: false })}
                    style={{
                        height: 63,
                        flex: 1,
                        marginRight: 5,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                    }}>
                    <Text style={{
                        color: '#F6F1FB',
                    }}>Yes, I agree</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                      this.setState({ ConfirmStartRide: false });
                      this.props.navigation.navigate("RideScreen")
                    }}
                    style={{
                        height: 63,
                        flex: 1,
                        marginLeft: 5,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                    }}>
                    <Text style={{
                        color: '#F6F1FB',
                    }}>Yes, I agree</Text>
                </TouchableOpacity>

              </View>

              
            </View>

          </Modal>


          {/* WHEN IT FAILS */}
          <Modal 
          onBackdropPress={() => this.setState({ onFailedQRCode: false })}
          isVisible={onFailedQRCode}>
            <View style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 15
            }}>

                <View style={{
                    alignItems :"center"
                }}>
                    <Image 
                        source={require('../assets/Search.png')} 
                        style={{ height: 120, width: 120 }}
                    />
                </View>

                <View style={{
                    marginBottom: 10,
                    marginHorizontal: 30
                }}>


                    <Text style={{
                        fontSize: 20,
                            color: textColor,
                            textAlign: 'center',
                            marginTop: 10,
                            fontWeight: 'bold'
                    }}>Wrong QR Code</Text>
                    <Text style={{
                            color: textColor,
                            fontSize: 16,
                            marginTop: 10,
                            textAlign: 'center'
                    }}>In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.</Text>
                </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10
              }}>

                <TouchableOpacity
                    onPress={() => {
                      this.setState({ onFailedQRCode: false });
                      this.props.navigation.navigate("Home")
                    }}
                    style={{
                        height: 63,
                        flex: 1,
                        marginLeft: 5,
                        backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: 'center',
                        borderRadius: 38,
                    }}>
                    <Text style={{
                        color: '#F6F1FB',
                    }}>Try again</Text>
                </TouchableOpacity>

              </View>

              
            </View>

          </Modal>


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