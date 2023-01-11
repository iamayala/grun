import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { WIDTH } from "../constants/constants";
import PhoneInput from "react-native-phone-number-input";
import Modal from "react-native-modal";
import colors from "../constants/colors";
import AppScreen from "../components/AppScreen";
import TabButton from "../components/TabButton";
import fonts from "../constants/fonts";
import AppButton from "../components/AppButton";
import Toast from "../components/Toast";

function Login({ navigation }) {
	const [tab, setTab] = useState("login");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [phone_err, setPhone_err] = useState(false);
	const [pwd_err, setPwd_err] = useState(false);
	const [hidePwd, setHidePwd] = useState(true);
	const [ErrorModal, setErrorModal] = useState(false);
	const [ErrorMessage, setErrorMessage] = useState("");
	const [ErrorTitle, setErrorTitle] = useState("");

	// validate phone
	const ValidatePhone = (text) => {
		let reg = text.split("");
		if (reg.length != 9 || reg[0] != 7) {
			setErrorModal(true);
			setPhone("");
			setPassword("");
			setErrorMessage(
				"Please provide the right phone number format. \nExample: 780000000"
			);
			ErrorTitle("Wrong Phone Number");
		} else {
			tab == "login" ? handleLogin() : handleSignup();
		}
	};

	return (
		<AppScreen>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 20,
					paddingTop: 10,
					backgroundColor: colors.backgroundColor,
				}}
			>
				{ErrorModal && (
					<Toast title={ErrorTitle} message={ErrorMessage} type="danger" />
				)}

				<View>
					<TouchableOpacity>
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

				<View>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<TabButton
							label="Login"
							onPress={() => setTab("login")}
							active={tab == "login" ? true : false}
						/>
						<TabButton
							label="Signup"
							onPress={() => setTab("signup")}
							active={tab == "signup" ? true : false}
						/>
					</View>
				</View>

				<View
					style={{
						marginTop: 20,
					}}
				>
					<PhoneInput
						// ref={this.phone__input}
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
							width: WIDTH - 40,
							marginBottom: 0,
							borderColor: phone_err ? err__color : "transparent",
							borderWidth: 1.5,
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
						codeTextStyle={{ paddingHorizontal: 0, fontFamily: fonts.medium }}
						onChangeFormattedText={(phone) =>
							this.setState({ phone, phone_err: false, pwd_err: false })
						}
						placeholdertextDark={colors.greyColor}
					/>

					<View
						style={{
							marginTop: 25,
							height: 63,
							borderRadius: 15,
							paddingLeft: 20,
							paddingRight: 5,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: colors.lightColor,
							borderColor: pwd_err ? err__color : "transparent",
							borderWidth: 1.5,
						}}
					>
						<TextInput
							placeholder="Password"
							secureTextEntry={hidePwd}
							value={password}
							onChangeText={(e) =>
								this.setState({ password: e, phone_err: false, pwd_err: false })
							}
							placeholdertextDark={colors.greyColor}
							style={{
								flex: 1,
								fontFamily: fonts.medium,
							}}
						/>
						<TouchableOpacity
							onPress={() => this.setState({ hidePwd: !hidePwd })}
							style={{
								padding: 10,
							}}
						>
							{hidePwd ? (
								<Image
									source={require("../../assets/Show.png")}
									style={{
										height: 25,
										width: 25,
										tintColor: colors.primary,
										resizeMode: "contain",
									}}
								/>
							) : (
								<Image
									source={require("../../assets/Hide.png")}
									style={{
										height: 25,
										width: 25,
										tintColor: colors.primary,
										resizeMode: "contain",
									}}
								/>
							)}
						</TouchableOpacity>
					</View>
				</View>

				<AppButton
					label={tab == "login" ? "LOG IN" : "SIGN UP"}
					onPress={() => navigation.navigate("TabNavigation")}
					loading={loading}
				/>

				{tab == "login" && (
					<TouchableOpacity>
						<Text
							style={{
								textAlign: "center",
								color: colors.textDark,
								fontFamily: fonts.medium,
							}}
						>
							Forgot Password?
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</AppScreen>
	);
}

export default Login;
