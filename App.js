import 'react-native-gesture-handler';

import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// screens
import Home from './src/Home';
import Profile from './src/Profile';
import Scan from './src/Scan';
import Login from './src/Login';
import { primary } from './src/constants';
import RideScreen from './src/RideScreen';
import SubAccounts from './src/SubAccounts';
import Splash from './src/Splash';

const Tab = createBottomTabNavigator();
const NavigationStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationStack.Navigator
      screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen name="Home" component={Home} />
    </NavigationStack.Navigator>
  )
}


const RideNavigation = () => {
  return (
    <NavigationStack.Navigator
      screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen name="Scan" component={Scan} />
      <NavigationStack.Screen name="RideScreen" component={RideScreen} />
    </NavigationStack.Navigator>
  )
}


const ProfileNavigation = () => {
  return (
    <NavigationStack.Navigator
      screenOptions={{ headerShown: false }}>
      <NavigationStack.Screen name="Profile" component={Profile} />
      <NavigationStack.Screen name="SubAccounts" component={SubAccounts} />
    </NavigationStack.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff', 
    height: Platform.OS == "ios" ? 90 : 80,
    // display: "none",
    // elevation: 0, 
    position: 'absolute', 
    borderTopColor: 'transparent',
    justifyContent: 'center',
    borderWidth: 0,
    elevation: 0,
  }
})

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      initialRouteName="HomeNavigation"
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      headerShown: false
    }}>
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./assets/home.png')} style={{
                  height: 30,
                  width: 30, 
                  resizeMode: 'contain',
                  tintColor: focused ? primary : '#A0A3B1'
                }} />
            </View>
          )
        }}
      />

      <Tab.Screen
        name="RideNavigation"
        component={RideNavigation}
        options={({ route }) => ( {
          // tabbar
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 50,
            backgroundColor: primary, height: 80, width: 80, borderRadius: 40 }}>
              <Image source={require('./assets/Scan.png')} style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: focused ? "#fff" : '#A0A3B1'
                }} />
            </View>
          ),
          tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              console.log(routeName)
              if (routeName == 'RideScreen') {
                return { display: "none" }
              }
              return styles.tabBarStyle
            })(route)
          })
        }
      />

      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={({ route }) =>  ({
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./assets/profile.png')} style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                  tintColor: focused ? primary : '#A0A3B1'
                }} />
            </View>
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            console.log(routeName)
            if (routeName == 'SubAccounts') {
              return { display: "none" }
            }
            return styles.tabBarStyle
          })(route)
        })}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator 
        initialRouteName="Splash"
      screenOptions={{ headerShown: false }}>
        <NavigationStack.Screen name="Splash" component={Splash} />
        <NavigationStack.Screen name="Login" component={Login} />
        <NavigationStack.Screen name="TabNavigation" component={TabNavigation} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
  
}

