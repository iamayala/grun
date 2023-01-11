import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

function AppButton({ label, onPress, loading }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 63,
				backgroundColor: colors.primary,
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 38,
				marginTop: 30,
				marginBottom: 20,
			}}
		>
			{loading ? (
				<ActivityIndicator />
			) : (
				<Text
					style={{
						color: colors.textWhite,
						fontFamily: fonts.medium,
						textTransform: "capitalize",
						fontSize: 16,
					}}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	);
}

export default AppButton;
