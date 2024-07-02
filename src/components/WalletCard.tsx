import { t } from "i18next";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const WalletCard = ({ navigation }) => {
	return (
		<View
			style={{
				backgroundColor: colors.primary,
				marginHorizontal: 15,
				borderRadius: 15,
				paddingHorizontal: 15,
				paddingVertical: 20,
				marginTop: 20,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingBottom: 15,
					borderBottomColor: "#7c7c7c",
					borderBottomWidth: 1,
				}}
			>
				<Image
					source={require("../../assets/logopay.png")}
					style={{ height: 30, width: 100, resizeMode: "contain" }}
				/>
				<TouchableOpacity
					onPress={() => navigation.navigate("Recharge")}
					style={{
						height: 30,
						paddingHorizontal: 20,
						backgroundColor: colors.lightColor,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 38,
					}}
				>
					<Text style={{ fontFamily: fonts.medium }}>Recharge +</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: 15,
				}}
			>
				<Text
					style={{
						color: colors.lightColor,
						fontSize: 16,
						fontFamily: fonts.medium,
						textTransform: "capitalize",
					}}
				>
					{t("yourBalance")}
				</Text>
				<Text
					style={{
						color: colors.lightColor,
						fontSize: 17,
						fontFamily: fonts.bold,
					}}
				>
					RWF 2900
				</Text>
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: 15,
				}}
			>
				<Text
					style={{
						color: colors.lightColor,
						fontSize: 16,
						fontFamily: fonts.medium,
					}}
				>
					Junior
				</Text>
				<Text
					style={{
						color: colors.lightColor,
						fontSize: 17,
						fontWeight: "bold",
						fontFamily: fonts.bold,
					}}
				>
					RWF 13,780
				</Text>
			</View>
		</View>
	);
};

export default WalletCard;
