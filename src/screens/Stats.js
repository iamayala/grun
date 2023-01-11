import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import AppScreen from "../components/AppScreen";
import StatCard from "../components/StatCard";
import colors from "../constants/colors";
import { HEIGHT, StatusBarHeight, WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";

function Stats({ navigation }) {
	const [emptyStats, setEmptyStats] = useState(true);
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
					}}
				>
					My Stats
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
								}}
							>
								No Stats Yet
							</Text>
							<Text
								style={{
									color: colors.textGrey,
									marginTop: 10,
									textAlign: "center",
									fontFamily: fonts.medium,
								}}
							>
								You haven't completed your first ride yet
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
							<StatCard title="distance covered" value={257} metric="meters" />
							<StatCard title="amount consumed" value={689} metric="RWF" />
							<StatCard title="time elapsed" value={689} metric="minutes" />
							<StatCard title="battery level" value={62} metric="%" />
							<StatCard title="battery level" value={62} metric="%" />
							<StatCard title="battery level" value={62} metric="%" />
						</View>
					</View>
				)}
			</ScrollView>
		</AppScreen>
	);
}

export default Stats;
