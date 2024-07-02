import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	Platform,
	TextInput,
} from "react-native";
import { WIDTH, HEIGHT } from "../constants/constants";
import Modal from "react-native-modal";

import PhoneInput from "react-native-phone-number-input";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppButton from "../components/AppButton";
import { allProfiles } from "../constants/utils";
import AppScreen from "../components/AppScreen";
import ScreenHeader from "../components/ScreenHeader";
import ConfirmationModal from "../components/ConfirmationModal";

function SubAccounts({ navigation }) {
	const [profiles, setProfiles] = useState(allProfiles);
	const [addSubAccount, setAddSubAccount] = useState(false);
	const [showProfileControllers, setShowProfileControllers] = useState(false);
	const [activeProfile, setActiveProfile] = useState("");
	const [phone, setPhone] = useState("");
	const [addUserLoader, setaddUserLoader] = useState(false);
	const [amount, setAmount] = useState("");
	const [showAlert, setShowAlert] = useState<"DELETE" | "CREATE">(null);

	const handleRemoveProfile = (item: any) => {
		let updatedList = profiles.filter((i: any) => i != item);
		setProfiles(updatedList);
		setShowProfileControllers(false);
		setShowAlert(null);
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
				<ScreenHeader
					header="Sub Accounts"
					onPress={() => navigation.goBack()}
				/>
				<FlatList
					data={profiles}
					numColumns={3}
					keyExtractor={(item, index) => item + index}
					renderItem={({ item }: { item: any }) => {
						const isActive = item == activeProfile;
						return (
							<TouchableOpacity
								onLongPress={() => {
									setActiveProfile(item);
									setShowProfileControllers(true);
								}}
								style={{
									marginHorizontal: 5,
									marginVertical: 5,
									borderWidth: 2,
									borderColor: isActive ? colors.primary : "transparent",
									borderRadius: 17,
								}}
							>
								<Image
									source={{ uri: item.image }}
									style={{
										height: WIDTH / 3 - 23,
										width: WIDTH / 3 - 23,
										resizeMode: "cover",
										borderRadius: 15,
									}}
								/>
								<View
									style={{
										position: "absolute",
										bottom: 0,
										right: 0,
										left: 0,
										height: 40,
										borderBottomLeftRadius: 14,
										borderBottomRightRadius: 14,
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
					}}
					ListEmptyComponent={() => {
						return (
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
						);
					}}
				/>

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
						display: showProfileControllers ? "flex" : "none",
					}}
				>
					<TouchableOpacity
						onPress={() => setShowAlert("DELETE")}
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
						onPress={() => {
							setActiveProfile(null);
							setShowProfileControllers(false);
						}}
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

				<ConfirmationModal
					open={showAlert === "DELETE"}
					title="Deleting"
					body="Are you sure you want to delete this profile?"
					handleConfirmation={() => handleRemoveProfile(activeProfile)}
					onClose={() => {
						setShowAlert(null);
						setActiveProfile(null);
						setShowProfileControllers(false);
					}}
					loading={false}
				/>
			</View>
		</AppScreen>
	);
}

export default SubAccounts;
