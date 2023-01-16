import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBarHeight } from "../constants/constants";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppScreen from "../components/AppScreen";

function Settings({ navigation }) {
	return (
		<AppScreen>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 15,
					paddingTop: 10,
				}}
			>
				<View>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							source={require("../../assets/arrow-left.png")}
							style={{
								height: 55,
								width: 55,
								resizeMode: "contain",
							}}
						/>
					</TouchableOpacity>
				</View>
				<Text
					style={{
						color: colors.textDark,
						fontSize: 20,
						marginTop: 20,
						marginHorizontal: 5,
						fontFamily: fonts.bold,
					}}
				>
					Settings
				</Text>
			</View>
		</AppScreen>
	);
}

export default Settings;
