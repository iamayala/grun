import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	TextInput,
} from "react-native";
import { StatusBarHeight } from "../constants/constants";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import PhoneInput from "react-native-phone-number-input";
import colors from "../constants/colors";

function Recharge() {
	const [amount, setAmount] = useState("");
	const [phone, setPhone] = useState("");
	const [tab, setTab] = useState("mobilepay");
	const [showCardPayment, setShowCardPayment] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<View
			style={{
				paddingTop: StatusBarHeight + 15,
				flex: 1,
				paddingHorizontal: 15,
				backgroundColor: "#fff",
			}}
		>
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
					fontWeight: "bold",
					fontSize: 20,
					marginTop: 20,
					marginHorizontal: 5,
				}}
			>
				Recharge
			</Text>

			<View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						// backgroundColor: colors.primary
					}}
				>
					<TouchableOpacity
						onPress={() => setTab("mobilepay")}
						style={{
							height: 63,
							backgroundColor:
								tab == "mobilepay" ? colors.primary : colors.lightColor,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 38,
							marginTop: 30,
							marginBottom: 20,
							paddingHorizontal: 35,
							marginRight: 5,
							flex: 1,
						}}
					>
						<Text
							style={{
								color: tab == "mobilepay" ? "#fff" : colors.textDark,
							}}
						>
							MTN/Airtel
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setShowCardPayment(true)}
						style={{
							height: 63,
							flex: 1,
							marginLeft: 5,
							backgroundColor:
								tab == "cardpay" ? colors.primary : colors.lightColor,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 38,
							marginTop: 30,
							marginBottom: 20,
							paddingHorizontal: 35,
						}}
					>
						<Text
							style={{
								color: tab == "cardpay" ? "#fff" : colors.textDark,
							}}
						>
							Debit/Credit Card
						</Text>
					</TouchableOpacity>
				</View>
			</View>

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
				}}
				codeTextStyle={{ paddingHorizontal: 0 }}
				onChangeFormattedText={(phone) => setPhone(phone)}
				// placeholdertextDark={colors.greyColor}
			/>

			<View
				style={{
					marginTop: 20,
					// marginBottom:
					height: 63,
					borderRadius: 15,
					paddingHorizontal: 20,
					backgroundColor: colors.lightColor,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Text style={{ marginHorizontal: 10, fontWeight: "500" }}>RWF</Text>
				<TextInput
					placeholder="0000"
					value={amount}
					keyboardType="numeric"
					onChangeText={(e) => setAmount(e)}
					// placeholdertextDark={colors.greyColor}
					style={{
						flex: 1,
					}}
				/>
			</View>

			<TouchableOpacity
				onPress={() => this.props.navigation.navigate("TabNavigation")}
				style={{
					height: 63,
					backgroundColor: colors.primary,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 38,
					marginTop: 20,
					marginBottom: 20,
				}}
			>
				<Text
					style={{
						color: "#F6F1FB",
					}}
				>
					Pay
				</Text>
			</TouchableOpacity>

			{/* CARD PAYMENT MODAL */}

			<Modal
				isVisible={showCardPayment}
				style={{
					flex: 1,
					backgroundColor: "#fff",
					margin: 0,
					justifyContent: "flex-start",
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
						Recharge
					</Text>

					<TouchableOpacity
						onPress={() => setShowCardPayment(false)}
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

				{/* ----------- ADD THE WEB VIEW HERE ------------------- */}
				<View
					style={{
						backgroundColor: colors.lightColor,
						flex: 1,
					}}
				></View>
			</Modal>

			{/* loading */}

			<Modal
				isVisible={loading}
				style={{
					flex: 1,
					margin: 0,
				}}
			>
				<ActivityIndicator size="small" color={colors.lightColor} />
			</Modal>
		</View>
	);
}

export default Recharge;
