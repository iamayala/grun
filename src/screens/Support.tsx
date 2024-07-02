import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	StyleSheet,
} from "react-native";
import { HEIGHT } from "../constants/constants";
import { FrequentlyAskedQuestions } from "../constants/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppScreen from "../components/AppScreen";
import ScreenHeader from "../components/ScreenHeader";

function Support({ navigation }) {
	const [activeQuestion, setActiveQuestion] = useState({
		question: "",
		open: true,
	});

	const handleChevronDisplaying = (item) => {
		let open = true;

		if (item.question === activeQuestion.question) {
			open = !activeQuestion.open;
		}

		setActiveQuestion({ question: item.question, open });
	};

	return (
		<AppScreen>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 15,
					paddingTop: 10,
				}}
			>
				<ScreenHeader header="Support" onPress={() => navigation.goBack()} />

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
					data={FrequentlyAskedQuestions}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }: any) => {
						return (
							<TouchableOpacity
								onPress={() => handleChevronDisplaying(item)}
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
											activeQuestion.question == item.question &&
											activeQuestion.open
												? "chevron-up"
												: "chevron-down"
										}
										size={24}
										color="#777"
									/>
								</View>
								{activeQuestion.question == item.question &&
									activeQuestion.open && (
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
										height:
											item.id == FrequentlyAskedQuestions.length
												? HEIGHT * 0.2
												: 0,
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
