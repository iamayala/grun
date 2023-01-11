import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

function TabButton({ onPress, label, active }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 63,
				backgroundColor: active ? colors.primary : colors.lightColor,
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 38,
				marginTop: 30,
				marginBottom: 20,
				paddingHorizontal: 35,
				marginRight: 5,
				flex: 1,
			}}
		>
			<Text
				style={{
					color: active ? "#fff" : colors.textDark,
					fontFamily: fonts.medium,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
}

export default TabButton;
