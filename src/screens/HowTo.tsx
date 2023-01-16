import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, FlatList } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";
import { HEIGHT, StatusBarHeight, WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";
import { howTo } from "../constants/utils";

function HowTo({ navigation }) {
	const [slides, setSlides] = useState(howTo);

	return (
		<View
			style={{
				backgroundColor: colors.lightColor,
				paddingTop: StatusBarHeight,
				flex: 1,
				alignItems: "center",
			}}
		>
			<Image
				source={require("../../assets/grunappblack.png")}
				style={{
					width: WIDTH * 0.4,
					height: 100,
					resizeMode: "contain",
				}}
			/>

			<FlatList
				data={slides}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								width: WIDTH,
							}}
						>
							<Image
								source={item.image}
								style={{
									height: HEIGHT * 0.45,
									width: WIDTH,
									resizeMode: "contain",
								}}
							/>

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
									{item.title}
								</Text>
								<Text
									style={{
										color: colors.textGrey,
										fontSize: 15,
										marginTop: 10,
										textAlign: "center",
										fontFamily: fonts.medium,
									}}
								>
									{item.description}
								</Text>
							</View>

							{item.id == 4 && (
								<View style={{ marginHorizontal: 25 }}>
									<AppButton
										label="Next"
										onPress={() => navigation.navigate("Profile")}
									/>
								</View>
							)}
						</View>
					);
				}}
			/>
		</View>
	);
}

export default HowTo;
