import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	Image,
} from "react-native";
import { HEIGHT } from "../constants/constants";
import Modal from "react-native-modal";
import colors from "../constants/colors";
import AppButton from "../components/AppButton";
import fonts from "../constants/fonts";

function RideScreen({ navigation }) {
	const [YouAreStoppingModal, setYouAreStoppingModal] = useState(false);
	const [ConfirmPaymentModal, setConfirmPaymentModal] = useState(false);
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<ImageBackground
				source={{
					uri: "https://img.freepik.com/premium-vector/city-map-navigate-route_23-2148309838.jpg?w=2000",
				}}
				style={{
					flex: 1,
					resizeMode: "cover",
				}}
			>
				<View
					style={{
						position: "absolute",
						bottom: 0,
						right: 0,
						left: 0,
						paddingHorizontal: 15,
						paddingBottom: 15,
					}}
				>
					<View
						style={{
							flexDirection: "row",
						}}
					>
						<View
							style={{
								backgroundColor: colors.primary,
								flex: 1,
								borderRadius: 15,
								marginHorizontal: 5,
								height: HEIGHT * 0.35,
							}}
						>
							<View
								style={{
									flex: 1,
									borderBottomWidth: 1,
									borderBottomColor: "#A0A3B1",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									Time Elapsed
								</Text>
								<Text
									style={{
										color: colors.textWhite,
										fontSize: 26,
										fontFamily: fonts.bold,
										marginVertical: 15,
									}}
								>
									7
								</Text>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									minutes
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									Battery Level
								</Text>
								<Text
									style={{
										color: colors.textWhite,
										fontSize: 26,
										fontFamily: fonts.bold,
										marginVertical: 15,
									}}
								>
									62
								</Text>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									%
								</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
								marginHorizontal: 5,
							}}
						>
							<View
								style={{
									backgroundColor: colors.primary,
									flex: 1,
									borderRadius: 15,
									marginHorizontal: 5,
									alignItems: "center",
									justifyContent: "center",
									marginBottom: 5,
								}}
							>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									Distance Covered
								</Text>
								<Text
									style={{
										color: colors.textWhite,
										fontSize: 26,
										fontFamily: fonts.bold,
										marginVertical: 15,
									}}
								>
									257
								</Text>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									meters
								</Text>
							</View>
							<View
								style={{
									backgroundColor: colors.primary,
									flex: 1,
									borderRadius: 15,
									marginHorizontal: 5,
									alignItems: "center",
									justifyContent: "center",
									marginTop: 5,
								}}
							>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									Amount Consumed
								</Text>
								<Text
									style={{
										color: colors.textWhite,
										fontSize: 26,
										fontFamily: fonts.bold,
										marginVertical: 15,
									}}
								>
									689
								</Text>
								<Text
									style={{ color: colors.textWhite, fontFamily: fonts.medium }}
								>
									RWF
								</Text>
							</View>
						</View>
					</View>
					<View>
						<AppButton
							label="STOP RIDE"
							onPress={() => navigation.navigate("Home")}
						/>
					</View>
				</View>
			</ImageBackground>

			{/* MODALS */}
			<Modal
				onBackdropPress={() => setYouAreStoppingModal(false)}
				isVisible={YouAreStoppingModal}
			>
				<View
					style={{
						backgroundColor: colors.textWhite,
						borderRadius: 15,
						paddingHorizontal: 15,
						paddingVertical: 15,
					}}
				>
					<View
						style={{
							alignItems: "center",
						}}
					>
						<Image
							source={require("../../assets/TapAndDrag.png")}
							style={{ height: 120, width: 120 }}
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
								fontSize: 20,
								color: colors.textDark,
								textAlign: "center",
								marginTop: 10,
								fontFamily: fonts.bold,
							}}
						>
							Before You Go
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
							In case you don't read Twitter, the news, or just can't get enough
							of The Apprentice host's legendary oration, try this Trump lorem
							ipsum generator on for size.
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							onPress={() => setYouAreStoppingModal(false)}
							style={{
								height: 63,
								flex: 1,
								marginRight: 5,
								backgroundColor: colors.primary,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 38,
							}}
						>
							<Text
								style={{
									color: colors.textWhite,
									fontFamily: fonts.medium,
								}}
							>
								No, I don't agree
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setYouAreStoppingModal(false)}
							style={{
								height: 63,
								flex: 1,
								marginLeft: 5,
								backgroundColor: colors.primary,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 38,
							}}
						>
							<Text
								style={{
									color: colors.textWhite,
									fontFamily: fonts.medium,
								}}
							>
								Yes, I agree
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			{/* Payment Modal */}
			<Modal
				onBackdropPress={() => setConfirmPaymentModal(false)}
				isVisible={ConfirmPaymentModal}
			>
				<View
					style={{
						backgroundColor: colors.textWhite,
						borderRadius: 15,
						paddingHorizontal: 15,
						paddingVertical: 15,
					}}
				>
					<View
						style={{
							alignItems: "center",
						}}
					>
						<Image
							source={require("../../assets/CardUse.png")}
							style={{ height: 120, width: 120 }}
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
								fontSize: 20,
								color: colors.textDark,
								textAlign: "center",
								marginTop: 10,
								fontFamily: fonts.bold,
							}}
						>
							Payment
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
							In case you don't read Twitter, the news, or just can't get enough
							of The Apprentice host's legendary oration, try this Trump lorem
							ipsum generator on for size.
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							onPress={() => this.setState({ ConfirmPaymentModal: false })}
							style={{
								height: 63,
								flex: 1,
								marginRight: 5,
								backgroundColor: colors.primary,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 38,
							}}
						>
							<Text
								style={{
									color: colors.textWhite,
									fontFamily: fonts.medium,
								}}
							>
								Yes, I agree
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}

export default RideScreen;
