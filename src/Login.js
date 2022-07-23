import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import { greyColor, lightColor, StatusBarHeight, primary, textColor } from './constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import serverConfig from '../server.json';

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        tab: "login",
         phone: "",
         password: "",
         loading: false,
      }
    }

    handleLogin = async () => {
        try {
            this.setState({ loading: true })
            var data = {
                phone: this.state.phone,
                password: this.state.password,
            };

            console.log(data);

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
                Alert.alert("Not Registered", "Sorry, this user is not registered, please create account.");
                this.setState({ loading: false, phone: "", password: "" });
            } else if (response.message == "success") {
                this.setState({ loading: false });
                console.log(response.data);
                // this.props.navigation.navigate("Hello");
            }

        } catch (error) {
            console.log(error);
        }
    }

    // validate phone
    ValidatePhone = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            Alert.alert("Invalid Phone", "Please provide a valid phone number.")
        }
        else {
            this.setState({ validphone: true })
            this.handleLogin()
        }
    }


  render() {
    const {tab} = this.state
    return (
      <View style={{
          paddingTop: StatusBarHeight + 15,
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#fff'
      }}>


        { this.state.loading &&
          <View style={{ backgroundColor: primary, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 5, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#fff", marginBottom: 10 }}>loading...</Text>
              <ActivityIndicator size="small" color="#fff" />
          </View>  }

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
              <TextInput
              placeholder='Phone Number'
              keyboardType="phone-pad"
              value={this.state.phone}
              onChangeText={e => this.setState({ phone: e })}
              placeholderTextColor={greyColor}
              style={{
                height: 63,
                borderRadius: 15,
                paddingHorizontal: 20,
                backgroundColor: lightColor
              }}/>

                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={e => this.setState({ password: e })}
                    placeholderTextColor={greyColor}
                    style={{
                        marginTop: 25,
                        height: 63,
                        borderRadius: 15,
                        paddingHorizontal: 20,
                        backgroundColor: lightColor
                    }} />
          </View>

            <TouchableOpacity
                // onPress={() => {
                //     this.state.phone == "" || this.state.password == "" ?
                //     Alert.alert("Empty Fields", "Please fill all the empty fields.") :
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

      </View>
    )
  }
}

export default Login