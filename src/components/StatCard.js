import React from "react";
import { View, Text } from "react-native";
import colors from "../constants/colors";
import { WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";

function StatCard({ title, value, metric }) {
	return (
		<View
			style={{
				backgroundColor: colors.primary,
				// flex: 1,
				borderRadius: 15,
				marginHorizontal: 5,
				alignItems: "center",
				justifyContent: "center",
				marginTop: 5,
				width: WIDTH * 0.5 - 25,
				marginBottom: 5,
				paddingVertical: 20,
			}}
		>
			<Text
				style={{
					color: colors.textWhite,
					fontFamily: fonts.medium,
					textTransform: "capitalize",
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					color: colors.textWhite,
					fontSize: 26,
					fontFamily: fonts.bold,
					marginVertical: 10,
				}}
			>
				{value}
			</Text>
			<Text
				style={{
					color: colors.textWhite,
					fontFamily: fonts.medium,
					textTransform: "capitalize",
					fontSize: 12,
				}}
			>
				{metric}
			</Text>
		</View>
	);
}

export default StatCard;
