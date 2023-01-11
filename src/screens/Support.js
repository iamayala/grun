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
					onPress={() => setShowChatter(true)}
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
					renderItem={({ item }) => {
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

				{showChatter && (
					<View
						style={{
							backgroundColor: "#fff",
							position: "absolute",
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							zIndex: 2,
							flex: 1,
						}}
					>
						<View
							style={{
								height: 70 + StatusBarHeight,
								paddingTop: StatusBarHeight,
								backgroundColor: colors.primary,
								width: "100%",
								paddingHorizontal: 15,
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "#fff",
									flex: 1,
									fontWeight: "500",
									fontSize: 16,
									marginLeft: 15,
								}}
							>
								Customer Support Team
							</Text>

							<TouchableOpacity
								style={{
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 40,
									height: 40,
									width: 40,
									marginHorizontal: 5,
								}}
							>
								<MaterialIcons name="repeat" size={24} color="#fff" />
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => setShowChatter(false)}
								style={{
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 40,
									height: 40,
									width: 40,
									marginHorizontal: 5,
								}}
							>
								<MaterialIcons name="close" size={24} color="#fff" />
							</TouchableOpacity>
						</View>

						<KeyboardAwareScrollView
							resetScrollToCoords={{ x: 0, y: 0 }}
							contentContainerStyle={{ height: "100%" }}
							scrollEnabled={true}
						>
							<FlatList
								data={supportmessages}
								nestedScrollEnabled
								contentContainerStyle={{
									paddingHorizontal: 15,
									paddingTop: 15,
								}}
								keyExtractor={(item) => item.conversationid.toString()}
								renderItem={({ item }) => {
									return (
										<TouchableOpacity
											activeOpacity={0.9}
											style={{
												flexDirection: "row",
											}}
										>
											{item.sender == user.id && <View style={{ flex: 1 }} />}
											<View
												style={{
													marginBottom: 10,
												}}
											>
												<View
													style={{
														maxWidth: WIDTH * 0.75,
														paddingVertical: 10,
														paddingHorizontal: 10,
														borderRadius: 10,
														backgroundColor:
															item.sender == user.id
																? colors.primary
																: colors.lightColor,
													}}
												>
													<Text
														style={{
															fontSize: 15,
															color: item.sender == user.id ? "#fff" : "#000",
														}}
													>
														{item.content}
													</Text>
												</View>

												{item.suggestedReplies.map((x, y) => {
													return (
														<TouchableOpacity
															key={y}
															style={{
																height: 45,
																borderColor: colors.lightColor,
																borderWidth: 1.7,
																marginTop: 10,
																borderRadius: 10,
																paddingHorizontal: 15,
																flexDirection: "row",
																alignItems: "center",
															}}
														>
															<Text>{x.reply}</Text>
														</TouchableOpacity>
													);
												})}
											</View>
										</TouchableOpacity>
									);
								}}
							/>

							<View
								style={{
									marginHorizontal: 15,
									height: 63,
									marginBottom: 25,
									borderRadius: 15,
									paddingHorizontal: 20,
									backgroundColor: colors.lightColor,
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<TextInput
									placeholder="Write message..."
									value={userMessage}
									onChangeText={(e) => userMessage(e)}
									placeholdertextDark={colors.greyColor}
									style={{
										flex: 1,
									}}
								/>
								<TouchableOpacity>
									<Text style={{ marginHorizontal: 10, fontWeight: "500" }}>
										SEND
									</Text>
								</TouchableOpacity>
							</View>
						</KeyboardAwareScrollView>
					</View>
				)}
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
