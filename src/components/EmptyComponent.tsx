import { t } from "i18next";
import React from "react";
import { Image, Text, View } from "react-native";
import colors from "../constants/colors";
import { WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";

const EmptyComponent = () => {
	return (
		<View>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={require("../../assets/Search.png")}
					style={{
						height: WIDTH * 0.6,
						width: WIDTH * 0.6,
						resizeMode: "contain",
					}}
				/>
			</View>

			<View
				style={{
					marginBottom: 10,
					marginHorizontal: 30,
				}}
			>
				<Text
					style={{
						fontSize: 22,
						color: colors.textDark,
						textAlign: "center",
						marginTop: 10,
						fontFamily: fonts.bold,
						textTransform: "capitalize",
					}}
				>
					{t("noStatsYet")}
				</Text>
				<Text
					style={{
						color: colors.textGrey,
						marginTop: 10,
						textAlign: "center",
						fontFamily: fonts.medium,
					}}
				>
					{t("noStatsYetText")}
				</Text>
			</View>
		</View>
	);
};

export default EmptyComponent;
