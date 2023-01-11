import "react-native-gesture-handler";

import {
	Text,
	View,
	Image,
	StyleSheet,
	Platform,
	Settings,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Scan from "../screens/Scan";
import Login from "../screens/Login";
import RideScreen from "../screens/RideScreen";
import SubAccounts from "../screens/SubAccounts";
import Splash from "../screens/Splash";
import Stats from "../screens/Stats";
import HowTo from "../screens/HowTo";
import Support from "../screens/Support";
import Recharge from "../screens/Recharge";
import AppSettings from "../screens/Settings";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();
const NavigationStack = createStackNavigator();

const HomeNavigation = () => {
	return (
		<NavigationStack.Navigator screenOptions={{ headerShown: false }}>
			<NavigationStack.Screen name="Home" component={Home} />
		</NavigationStack.Navigator>
	);
};

const RideNavigation = () => {
	return (
		<NavigationStack.Navigator
			initialRouteName="Scan"
			screenOptions={{ headerShown: false }}
		>
			<NavigationStack.Screen name="Scan" component={Scan} />
			<NavigationStack.Screen name="RideScreen" component={RideScreen} />
		</NavigationStack.Navigator>
	);
};

const ProfileNavigation = () => {
	return (
		<NavigationStack.Navigator screenOptions={{ headerShown: false }}>
			<NavigationStack.Screen name="Profile" component={Profile} />
			<NavigationStack.Screen name="SubAccounts" component={SubAccounts} />
			<NavigationStack.Screen name="Stats" component={Stats} />
			<NavigationStack.Screen name="HowTo" component={HowTo} />
			<NavigationStack.Screen name="Support" component={Support} />
			<NavigationStack.Screen name="Recharge" component={Recharge} />
			<NavigationStack.Screen name="AppSettings" component={AppSettings} />
		</NavigationStack.Navigator>
	);
};

const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: colors.backgroundColor,
		height: Platform.OS == "ios" ? 90 : 80,
		// display: "none",
		// elevation: 0,
		position: "absolute",
		borderTopColor: "transparent",
		justifyContent: "center",
		borderWidth: 0,
		elevation: 0,
	},
});

const TabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeNavigation"
			screenOptions={{
				tabBarStyle: styles.tabBarStyle,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="HomeNavigation"
				component={HomeNavigation}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Image
								source={require("../../assets/home.png")}
								style={{
									height: 24,
									width: 24,
									resizeMode: "contain",
									tintColor: focused ? colors.primary : "#A0A3B1",
								}}
							/>
						</View>
					),
				}}
			/>

			<Tab.Screen
				name="RideNavigation"
				component={RideNavigation}
				options={({ route }) => ({
					// tabbar
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 50,
								backgroundColor: colors.primary,
								height: 80,
								width: 80,
								borderRadius: 40,
							}}
						>
							<Image
								source={require("../../assets/Scan.png")}
								style={{
									height: 24,
									width: 24,
									resizeMode: "contain",
									tintColor: focused ? "#fff" : "#A0A3B1",
								}}
							/>
						</View>
					),
					tabBarStyle: ((route) => {
						const routeName = getFocusedRouteNameFromRoute(route) ?? "";
						console.log(routeName);
						if (routeName == "RideScreen") {
							return { display: "none" };
						}
						return styles.tabBarStyle;
					})(route),
				})}
			/>

			<Tab.Screen
				name="ProfileNavigation"
				component={ProfileNavigation}
				options={({ route }) => ({
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<Image
								source={require("../../assets/profile.png")}
								style={{
									height: 24,
									width: 24,
									resizeMode: "contain",
									tintColor: focused ? colors.primary : "#A0A3B1",
								}}
							/>
						</View>
					),
					tabBarStyle: ((route) => {
						const routeName = getFocusedRouteNameFromRoute(route) ?? "";
						// console.log(routeName)
						if (
							routeName == "SubAccounts" ||
							routeName == "Stats" ||
							routeName == "HowTo" ||
							routeName == "Support" ||
							routeName == "Recharge" ||
							routeName == "AppSettings"
						) {
							return { display: "none" };
						}
						return styles.tabBarStyle;
					})(route),
				})}
			/>
		</Tab.Navigator>
	);
};

function MainNavigation() {
	return (
		<NavigationStack.Navigator
			initialRouteName="Splash"
			screenOptions={{ headerShown: false }}
		>
			<NavigationStack.Screen name="Splash" component={Splash} />
			<NavigationStack.Screen name="Login" component={Login} />
			<NavigationStack.Screen name="TabNavigation" component={TabNavigation} />
		</NavigationStack.Navigator>
	);
}

export default MainNavigation;
