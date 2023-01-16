import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	TextInput,
	StyleSheet,
} from "react-native";
import { StatusBarHeight, WIDTH, HEIGHT } from "../constants/constants";
import { FrequentlyAskedQuestions, supportmessages } from "../constants/utils";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import fonts from "../constants/fonts";
import AppScreen from "../components/AppScreen";

function Support({ navigation }) {
	const [FAQ, setFAQ] = useState(FrequentlyAskedQuestions);
	const [supportMessages, setSupportMessages] = useState(supportmessages);
	const [userMessage, setuserMessage] = useState("");
	const [user, setUser] = useState({ id: 1 });
	const [showChatter, setShowChatter] = useState(false);
	const [activeQuestion, setActiveQuestion] = useState("");

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
						fontFamily: fonts.bold,
						fontSize: 20,
						marginTop: 20,
						marginBottom: 20,
						marginHorizontal: 5,
					}}
				>
					Support
				</Text>

				<TouchableOpacity
					onPress={() => navigation.navigate("ChatSupport")}
					style={{
						backgroundColor: colors.primary,
						position: "absolute",
						right: 15,
						bottom: 50,
						zIndex: 1,
						justifyContent: "center",
						alignItems: "center",
						height: 63,
						width: 63,
						borderRadius: 50,
					}}
				>
					<Image
						source={require("../../assets/Chat.png")}
						style={{
							height: 30,
							width: 30,
							tintColor: colors.lightColor,
							resizeMode: "contain",
						}}
					/>
				</TouchableOpacity>

				<FlatList
					data={FAQ}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }: any) => {
						return (
							<TouchableOpacity
								onPress={() => setActiveQuestion(item)}
								style={{
									marginHorizontal: 5,
									borderBottomColor: "#ebebeb",
									borderBottomWidth: 1,
								}}
							>
								<View
									style={{
										height: 63,
										justifyContent: "space-between",
										alignItems: "center",
										flexDirection: "row",
									}}
								>
									<Text
										style={{ fontFamily: fonts.bold, color: colors.textDark }}
									>
										{item.question}
									</Text>
									<MaterialCommunityIcons
										name={
											activeQuestion == item ? "chevron-up" : "chevron-down"
										}
										size={24}
										color="#777"
									/>
								</View>
								{activeQuestion == item && (
									<Text
										style={{
											paddingBottom: 20,
											fontFamily: fonts.medium,
											color: colors.textGrey,
										}}
									>
										{item.answer}
									</Text>
								)}

								<View
									style={{
										height: item.id == FAQ.length ? HEIGHT * 0.2 : 0,
									}}
								/>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		</AppScreen>
	);
}

export default Support;

const styles = StyleSheet.create({
	item: {
		height: 63,
		justifyContent: "space-between",
		marginHorizontal: 5,
		alignItems: "center",
		flexDirection: "row",
		borderBottomColor: "#ebebeb",
		borderBottomWidth: 1,
	},
	itemR: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	itemFont: {
		marginRight: 20,
		color: "#444",
	},
});
