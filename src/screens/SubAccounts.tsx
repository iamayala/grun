import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	Platform,
	ActivityIndicator,
	TextInput,
} from "react-native";
import { WIDTH, HEIGHT } from "../constants/constants";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";

import PhoneInput from "react-native-phone-number-input";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppButton from "../components/AppButton";
import { allProfiles } from "../constants/utils";
import AppScreen from "../components/AppScreen";

function SubAccounts({ navigation }) {
	const [profiles, setProfiles] = useState(allProfiles);
	const [addSubAccount, setAddSubAccount] = useState(false);
	const [viewController, setViewController] = useState(false);
	const [activeProfile, setActiveProfile] = useState("");
	const [phone, setPhone] = useState("");
	const [addUserLoader, setaddUserLoader] = useState(false);
	const [amount, setAmount] = useState("");

	const removeProfile = (item: any) => {
		// @ts-ignore
		let profiles = profiles.filter((i) => i != item);
		setProfiles(profiles);
		setViewController(false);
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
					Sub Accounts
				</Text>

				<ScrollView>
					{profiles?.length == 0 ? (
						<View>
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Image
									source={require("../../assets/CoinHand.png")}
									style={{
										height: HEIGHT * 0.4,
										width: WIDTH * 0.8,
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
									No Sub Accounts Yet
								</Text>
								<Text
									style={{
										color: colors.textGrey,
										fontSize: 16,
										marginTop: 10,
										textAlign: "center",
										fontFamily: fonts.medium,
									}}
								>
									You can Share your balance with your friends
								</Text>
							</View>

							<View style={{ marginHorizontal: 20, marginTop: 25 }}>
								<AppButton
									label="add sub account"
									onPress={() => setAddSubAccount(true)}
								/>
							</View>
						</View>
					) : (
						<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
							{profiles?.map((item: any, index) => {
								return (
									<TouchableOpacity
										onLongPress={() =>
											this.setState({
												activeProfile: item,
												viewController: true,
											})
										}
										key={index}
										style={{
											marginHorizontal: item == activeProfile ? 0 : 5,
											marginVertical: item == activeProfile ? 0 : 5,
											borderWidth: item == activeProfile ? 5 : 0,
											borderColor:
												item == activeProfile ? colors.primary : "transparent",
										}}
									>
										<Image
											source={{ uri: item.image }}
											style={{
												height: WIDTH / 3 - 20,
												width: WIDTH / 3 - 20,
												resizeMode: "cover",
											}}
										/>
										<View
											style={{
												position: "absolute",
												bottom: 0,
												right: 0,
												left: 0,
												height: 30,
												backgroundColor: colors.lightColor,
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Text
												style={{
													color: colors.textDark,
													fontFamily: fonts.medium,
													textTransform: "capitalize",
												}}
												numberOfLines={1}
											>
												{item.name}
											</Text>
										</View>
									</TouchableOpacity>
								);
							})}

							<TouchableOpacity
								onPress={() => setAddSubAccount(true)}
								style={{
									height: WIDTH / 3 - 20,
									width: WIDTH / 3 - 20,
									backgroundColor: colors.lightColor,
									margin: 5,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<MaterialIcons name="add" size={60} color="#757575" />
							</TouchableOpacity>
						</View>
					)}
				</ScrollView>

				<Modal
					onBackdropPress={() => setAddSubAccount(false)}
					isVisible={addSubAccount}
				>
					<View
						style={{
							backgroundColor: "#fff",
							borderRadius: 15,
							paddingHorizontal: 15,
							paddingVertical: 10,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontFamily: fonts.bold,
								color: colors.textDark,
								paddingVertical: 10,
								textAlign: "center",
							}}
						>
							Provide Phone Of The user
						</Text>

						<PhoneInput
							// ref={this.phone}
							defaultValue={phone}
							defaultCode="RW"
							layout="first"
							flagButtonStyle={{
								padding: 0,
								height: 40,
								margin: 0,
								marginHorizontal: 0,
							}}
							containerStyle={{
								height: 63,
								marginTop: 15,
								backgroundColor: colors.lightColor,
								borderRadius: 15,
								paddingHorizontal: 5,
								alignItems: "center",
								padding: 0,
								width: "100%",
								marginBottom: 0,
							}}
							textContainerStyle={{
								paddingVertical: 0,
								backgroundColor: "transparent",
								paddingHorizontal: 0,
							}}
							textInputStyle={{
								flex: 1,
								paddingVertical: 0,
								marginVertical: 0,
								paddingHorizontal: 0,
								backgroundColor: "transparent",
								fontFamily: fonts.medium,
							}}
							codeTextStyle={{ paddingHorizontal: 0 }}
							onChangeFormattedText={(phone) => setPhone(phone)}
							// placeholdertextDark={colors.greyColor}
						/>

						<View
							style={{
								marginVertical: 10,
								height: 63,
								borderRadius: 15,
								paddingHorizontal: 20,
								backgroundColor: colors.lightColor,
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Text style={{ marginHorizontal: 10, fontFamily: fonts.medium }}>
								RWF
							</Text>
							<TextInput
								placeholder="0000"
								value={amount}
								keyboardType="numeric"
								onChangeText={(e) => setAmount(e)}
								// placeholdertextDark={colors.greyColor}
								style={{
									flex: 1,
									fontFamily: fonts.medium,
									fontSize: 16,
								}}
							/>
						</View>

						<AppButton
							label="Add User"
							loading={addUserLoader}
							onPress={() => setAddSubAccount(false)}
						/>
					</View>
				</Modal>

				{viewController && (
					<View
						style={{
							height: Platform.OS == "ios" ? 90 : 80,
							backgroundColor: colors.primary,
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							paddingHorizontal: 15,
							alignItems: "center",
							flexDirection: "row",
						}}
					>
						<TouchableOpacity
							onPress={() => this.removeProfile(activeProfile)}
							style={{
								backgroundColor: "#fff",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 50,
								height: 50,
								width: 50,
								marginHorizontal: 5,
							}}
						>
							<Image
								source={require("../../assets/Delete.png")}
								style={{
									height: 30,
									width: 30,
									tintColor: "red",
									resizeMode: "contain",
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								// hidden
								display: "none",

								backgroundColor: "#fff",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 50,
								height: 50,
								width: 50,
								marginHorizontal: 5,
							}}
						>
							<Image
								source={require("../../assets/Show.png")}
								style={{
									height: 30,
									width: 30,
									tintColor: "#000",
									resizeMode: "contain",
								}}
							/>
						</TouchableOpacity>

						<View style={{ flex: 1 }} />

						<TouchableOpacity
							onPress={() =>
								this.setState({ activeProfile: "", viewController: false })
							}
							style={{
								marginHorizontal: 5,
							}}
						>
							<Image
								source={require("../../assets/close.png")}
								style={{
									height: 50,
									width: 50,
									resizeMode: "contain",
								}}
							/>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</AppScreen>
	);
}

export default SubAccounts;
