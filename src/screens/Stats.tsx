import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import AppScreen from "../components/AppScreen";
import StatCard from "../components/StatCard";
import colors from "../constants/colors";
import { FixMeLater } from "../constants/common";
import { WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";
import LocalizationContext from "../utils/LocalizationContext";

function Stats({ navigation }) {
	const [emptyStats, setEmptyStats] = useState(false);
	const { t } = useContext<FixMeLater>(LocalizationContext);

	return (
		<AppScreen>
			<ScrollView
				style={{
					paddingHorizontal: 15,
				}}
			>
				<View
					style={{
						paddingTop: 10,
					}}
				>
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
						marginBottom: 20,
						marginHorizontal: 5,
						fontFamily: fonts.bold,
						textTransform: "capitalize",
					}}
				>
					{t("myStat")}
				</Text>

				{emptyStats ? (
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
				) : (
					<View
						style={{
							paddingBottom: 15,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
							}}
						>
							<StatCard
								title={t("distanceCovered")}
								value={257}
								metric="meters"
							/>
							<StatCard title={t("amountConsumed")} value={689} metric="RWF" />
							<StatCard
								title={t("timeElapsed")}
								value={689}
								metric={t("minutes")}
							/>
							<StatCard title={t("batteryLevel")} value={62} metric="%" />
							<StatCard title={t("batteryLevel")} value={62} metric="%" />
							<StatCard title={t("batteryLevel")} value={62} metric="%" />
						</View>
					</View>
				)}
			</ScrollView>
		</AppScreen>
	);
}

export default Stats;
