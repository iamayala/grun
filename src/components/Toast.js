import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		position: "absolute",
		zIndex: 2,
		left: 20,
		right: 20,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
});

function Toast({ message, title, onPress, type = "danger" }) {
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: type === "success" ? colors.success : colors.danger,
				},
			]}
		>
			<View style={{ flex: 1, marginHorizontal: 10 }}>
				<Text
					style={{
						fontFamily: fonts.bold,
						fontSize: 16,
						color: colors.textWhite,
					}}
				>
					{title}
				</Text>
				<Text
					style={{
						fontFamily: fonts.medium,
						fontSize: 14,
						color: colors.textWhite,
					}}
				>
					{message}
				</Text>
			</View>
			<TouchableOpacity
				onPress={onPress}
				style={{
					height: 40,
					width: 40,
					borderRadius: 17,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Feather name="x" size={18} color={colors.textWhite} />
			</TouchableOpacity>
		</View>
	);
}

export default Toast;
