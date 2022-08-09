import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import { greyColor, lightColor, StatusBarHeight, primary, textColor, WIDTH } from './constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import serverConfig from '../server.json';
import PhoneInput from 'react-native-phone-number-input';
import Modal from "react-native-modal";


export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        tab: "login",
         phone: "",
         password: "",
         loading: false,
         phone_err: false,
         pwd_err: false,
         hidePwd: true,
         loading: false,
         ErrorModal: false,
         ErrorMessage: "",
         ErrorTitle: ""
      }

      this.PasswordField = React.createRef();
    }

    componentDidMount() {}


    // THIS HANDLES THE LOGIN FUNCTION

    handleLogin = async () => {
        try {
            this.setState({ loading: true })
            var data = {
                phone: this.state.phone,
                password: this.state.password,
            };

            const value = await fetch(`${serverConfig.restServer}/login`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const response = await value.json();

            if (response.message == "no-user") {
                this.setState({ 
                    loading: false, 
                    phone: "", 
                    password: "",
                    ErrorModal: true, 
                    ErrorMessage: "Sorry, this user is not registered, please create account.", 
                    ErrorTitle: "User Not Registered" });
            } else if (response.message == "success") {
                this.setState({ 
                    phone: "", 
                    password: "",
                    loading: false 
                });
                this.props.navigation.navigate("TabNavigation");
            }

        } catch (error) {
            console.log(error);
        }
    }


    // THIS CHECK THE SIGN UP FUNCTION
    handleSignup = async () => {
        try {
            this.setState({ loading: true })
            var data = {
                phone: this.state.phone,
                password: this.state.password,
            };

            const value = await fetch(`${serverConfig.restServer}/signup`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const response = await value.json();

            if (response.message == "user-exists") {
                this.setState({ 
                    loading: false, 
                    phone: "", 
                    password: "",
                    ErrorModal: true, 
                    ErrorMessage: "Sorry, this user is already registered, please log into your account.", 
                    ErrorTitle: "User Already Exists" });
            } else if (response.message == "success") {
                this.setState({ 
                    phone: "", 
                    password: "",
                    loading: false 
                });
                this.props.navigation.navigate("TabNavigation");
            }

        } catch (error) {
            console.log(error);
        }
    }

    // validate phone
    ValidatePhone = (text) => {
        let reg = text.split("")
        if (reg.length != 9 || reg[0] != 7) {
            this.setState({ 
                ErrorModal: true, 
                phone: "", 
                password: "",
                ErrorMessage: "Please provide the right phone number format. \nExample: 780000000", 
                ErrorTitle: "Wrong Phone Number" })
        } else {
            this.state.tab == "login" ? this.handleLogin() : this.handleSignup()
        }
    }


  render() {


    const { 
        tab, phone_err, pwd_err, 
        hidePwd, loading, 
        ErrorModal, ErrorMessage, 
        ErrorTitle } = this.state
    const err__color = "#ff0033"


    return (
      <View style={{
          paddingTop: StatusBarHeight + 15,
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#fff'
      }}>

        <Modal 
            onBackdropPress={() => this.setState({ ErrorModal: false })}
            isVisible={ErrorModal}
            backdropOpacity={.6}>
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
                        source={require('../assets/Error.png')} 
                        style={{ height: 120, width: 120, borderRadius: 60 }}
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
                    }}>{ErrorTitle}</Text>
                    <Text style={{
                            color: textColor,
                            fontSize: 16,
                            marginTop: 10,
                            textAlign: 'center'
                    }}>{ErrorMessage}</Text>
                </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10
              }}>
                <TouchableOpacity
                    onPress={() => this.setState({ ErrorModal: false })}
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
                    }}>Try Again</Text>
                </TouchableOpacity>

                

              </View>

              
            </View>

          </Modal>

          <View>
              <TouchableOpacity>
                  <Image source={require('../assets/arrow-left.png')} style={{
                      height: 55,
                      width: 55,
                      resizeMode: 'contain'
                  }} />
              </TouchableOpacity>
          </View>

          <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
                // backgroundColor: primary
            }}>
                <TouchableOpacity 
                onPress={() => this.setState({ tab: "login" })}
                style={{
                    height: 63,
                    backgroundColor: tab == "login" ? primary : lightColor,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 30,
                    marginBottom: 20,
                    paddingHorizontal: 35,
                    marginRight: 5,
                    flex: 1,
                }}>
                    <Text style={{
                        color: tab == "login" ? "#fff" : textColor
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.setState({ tab: "signup" })}
                style={{
                    height: 63,
                    flex: 1,
                    marginLeft: 5,
                    backgroundColor: tab == "signup" ? primary : lightColor,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 30,
                    marginBottom: 20,
                    paddingHorizontal: 35
                }}>
                    <Text style={{
                        color: tab == "signup" ? "#fff" : textColor
                    }}>Signup</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={{
            marginTop: 20
          }}>

                <PhoneInput
                ref={this.phone__input}
                defaultValue={this.state.phone}
                defaultCode="RW"
                layout="first"
                flagButtonStyle={{ 
                    padding: 0, height: 40, 
                    margin: 0, marginHorizontal: 0 }}
                containerStyle={{
                    height: 63,  marginTop: 15, 
                    backgroundColor:  lightColor, 
                    borderRadius: 15, 
                    paddingHorizontal: 5,
                    alignItems: 'center', 
                    padding: 0,width: WIDTH - 40, 
                    marginBottom: 0,
                    borderColor: phone_err ? err__color : "transparent",
                    borderWidth: 1.5
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
                onChangeFormattedText={phone => this.setState({ phone, phone_err: false, pwd_err: false })}
                placeholderTextColor={greyColor}
                />

                <View style={{
                    marginTop: 25,
                    height: 63,
                    borderRadius: 15,
                    paddingLeft: 20,
                    paddingRight: 5,
                    flexDirection: 'row',
                    alignItems: "center",
                    backgroundColor: lightColor,
                    borderColor: pwd_err ? err__color : "transparent",
                    borderWidth: 1.5
                }}>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={hidePwd}
                        value={this.state.password}
                        onChangeText={e => this.setState({ password: e, phone_err: false, pwd_err: false })}
                        placeholderTextColor={greyColor}
                        style={{
                            flex: 1,
                        }} />
                    <TouchableOpacity 
                    onPress={() => this.setState({ hidePwd: !hidePwd })}
                    style={{
                        padding: 10
                    }}>
                        { hidePwd ?
                        <Image 
                        source={require("../assets/Show.png")} 
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: primary,
                            resizeMode: 'contain'
                        }} /> : 
                        <Image 
                        source={require("../assets/Hide.png")} 
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: primary,
                            resizeMode: 'contain'
                        }} /> }
                    </TouchableOpacity>

                </View>

          </View>

            <TouchableOpacity
                // onPress={() => {
                //     this.state.phone == "" ?
                //     this.setState({phone_err: true}) :
                //     this.state.password == "" ?
                //     this.setState({pwd_err: true}) :
                //     this.ValidatePhone(this.state.phone)}}

                onPress={() => this.props.navigation.navigate("TabNavigation")}
                style={{
                    height: 63,
                    backgroundColor: primary,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: 38,
                    marginTop: 30,
                    marginBottom: 20
                }}>
                <Text style={{
                    color: '#F6F1FB',
                }}>{ tab == "login" ? 'LOG IN' : 'SIGN UP' }</Text>
            </TouchableOpacity>

            { tab == "login" &&
            <TouchableOpacity>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    color: textColor
                }}>Forgot Password?</Text>
            </TouchableOpacity> }

            <Modal
            isVisible={loading}
            style={{
                margin: 0,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    height: 63,
                    width: 63,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: lightColor
                }}>
                    <ActivityIndicator color={primary} size="small" />
                </View>
            </Modal>


            

      </View>
    )
  }
}

export default Login