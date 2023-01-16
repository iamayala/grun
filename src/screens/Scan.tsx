import React, { useState, useEffect } from "react";
import {
	Text,
	TouchableOpacity,
	View,
	Image,
	StyleSheet,
	Platform,
} from "react-native";
import { WIDTH, HEIGHT } from "../constants/constants";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppButton from "../components/AppButton";

function Scan({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [ConfirmStartRide, setConfirmStartRide] = useState(false);
	const [onFailedQRCode, setonFailedQRCode] = useState(false);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		verifyQRCode(data);
	};

	const verifyQRCode = (data) => {
		if (data == "Hello") {
			setConfirmStartRide(true);
			setScanned(false);
		} else {
			setonFailedQRCode(true);
			setScanned(false);
		}
	};

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontFamily: fonts.bold,
						color: colors.lightColor,
						textAlign: "center",
						marginBottom: -10,
					}}
				>
					Scan QR code to unlock
				</Text>

				<View
					style={{
						height: WIDTH * 0.7,
						width: WIDTH * 0.7,
						borderRadius: 15,
						backgroundColor: "transparent",
					}}
				/>

				<View
					style={{
						width: WIDTH * 0.7,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("RideScreen")}
						style={{
							height: 70,
							width: 70,
							marginTop: HEIGHT * 0.1,
							borderRadius: 40,
							alignItems: "center",
							justifyContent: "center",
							borderColor: colors.lightColor,
							borderWidth: 1,
						}}
					>
						<MaterialCommunityIcons
							name="flashlight"
							size={26}
							color={colors.lightColor}
						/>
					</TouchableOpacity>
				</View>
			</View>

			{/* <BarCodeScanner
        barCodeTypes={Platform.OS === 'ios' ? undefined : ['qr']}
        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
        style={{ flex: 1 }}>
        
        <Image source={require("../assets/scannerbg.png")}
        style={{ width: WIDTH, height: HEIGHT, resizeMode: "cover" }} /> 

        </BarCodeScanner> */}

			<BarCodeScanner
				barCodeTypes={Platform.OS === "ios" ? undefined : ["qr"]}
				onBarCodeScanned={handleBarCodeScanned}
				style={[StyleSheet.absoluteFill, { flex: 1, flexDirection: "column" }]}
			>
				<View style={styles.layerTop} />
				<View style={styles.layerCenter}>
					<View style={styles.layerLeft} />
					<View style={styles.focused} />
					<View style={styles.layerRight} />
				</View>
				<View style={styles.layerBottom}>
					<View></View>

					<View
						style={{
							flex: 2,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					></View>
				</View>
			</BarCodeScanner>
			{/* /> */}

			{/* WHEN QR CODE SUCCEED */}
			<Modal
				onBackdropPress={() => setConfirmStartRide(false)}
				isVisible={ConfirmStartRide}
			>
				<View
					style={{
						backgroundColor: "#fff",
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
							source={require("../../assets/Choose.png")}
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
							There You Go
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
							of The Apprentice host's.
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
							onPress={() => {
								setConfirmStartRide(false);
							}}
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
									color: "#F6F1FB",
									fontFamily: fonts.medium,
								}}
							>
								Yes, I agree
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => {
								setConfirmStartRide(false);
								navigation.navigate("RideScreen");
							}}
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
									color: "#F6F1FB",
									fontFamily: fonts.medium,
								}}
							>
								Yes, I agree
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			{/* WHEN IT FAILS */}
			<Modal
				onBackdropPress={() => this.setState({ onFailedQRCode: false })}
				isVisible={onFailedQRCode}
			>
				<View
					style={{
						backgroundColor: "#fff",
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
							source={require("../../assets/Search.png")}
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
							Wrong QR Code
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
					<AppButton
						label="Try Again"
						onPress={() => {
							setonFailedQRCode(false);
							// navigation.navigate("Home");
						}}
					/>
				</View>
			</Modal>
		</View>
	);
}

export default Scan;

const opacity = colors.primary;
const styles = StyleSheet.create({
	layerTop: {
		flex: 0.9,
		backgroundColor: opacity,
	},
	layerCenter: {
		flex: 1,
		flexDirection: "row",
	},
	layerLeft: {
		flex: 1,
		backgroundColor: opacity,
	},
	focused: {
		height: HEIGHT,
		width: WIDTH * 0.7,
	},
	layerRight: {
		flex: 1,
		backgroundColor: opacity,
	},
	layerBottom: {
		flex: 1,
		backgroundColor: opacity,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});
