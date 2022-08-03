import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { WIDTH } from './constants'

export class Splash extends Component {
    constructor(props) {
      super(props)
    
      this.state = {}
      
    }

    componentDidMount() {
        this.checkLoggedIn()
    }

    checkLoggedIn = () => {
        setTimeout(() => {
            this.props.navigation.navigate("Login") 
        }, 2000);
    }

    render() {
        return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <Image source={require('../assets/grunappblack.png')} style={{
                height: 100,
                width: WIDTH * .7,
                resizeMode: 'contain'
            }} />
        </View>
        )
    }
}

export default Splash