import React, { useState, useEffect, useContext } from "react";
import {
	Text,
	TouchableOpacity,
	View,
	Image,
	ImageBackground,
} from "react-native";
import { StatusBarHeight } from "../constants/constants";
import Modal from "react-native-modal";
import { allLanguages } from "../constants/utils";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FixMeLater } from "../constants/common";
import LocalizationContext from "../utils/LocalizationContext";

function Home() {
	const [languages, setLanguages] = useState(allLanguages);
	const [activeLanguage, setActiveLanguage] = useState(null);
	const [languageModal, setLanguageModal] = useState(false);

	const { setLocale, t } = useContext<FixMeLater>(LocalizationContext);

	const account = useSelector((state: RootState) => state.account);

	const setAppLanguage = (number: number) => {
		switch (number) {
			case 1:
				setLocale("en");
				break;
			case 2:
				setLocale("fr");
				break;
			case 3:
				setLocale("rw");
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		fetchActiveLanguage();
	}, []);

	const fetchActiveLanguage = () => {
		setActiveLanguage(languages[0]);
	};

	return (
		<View
			style={{
				flex: 1,
				// paddingTop: StatusBarHeight
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					position: "absolute",
					top: StatusBarHeight + 15,
					left: 15,
					right: 15,
					zIndex: 1,
					justifyContent: "space-between",
				}}
			>
				<View>
					<Image
						source={require("../../assets/grunappblack.png")}
						style={{
							height: 70,
							width: 160,
							resizeMode: "contain",
						}}
					/>
					<Text style={{ fontFamily: fonts.medium }}>{t("Home")}</Text>
				</View>
				<TouchableOpacity onPress={() => setLanguageModal(true)}>
					<Image
						source={{ uri: activeLanguage?.flag }}
						style={{
							height: 30,
							width: 30,
							borderRadius: 30,
							resizeMode: "cover",
						}}
					/>
				</TouchableOpacity>
			</View>
			<ImageBackground
				source={{
					uri: "https://img.freepik.com/premium-vector/city-map-navigate-route_23-2148309838.jpg?w=2000",
				}}
				style={{
					flex: 1,
				}}
			/>

			{/* <WebView
          scalesPageToFit={false}
          javaScriptEnabled={true}
          javaScriptEnabledAndroid={true}
          originWhitelist={['*']}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccessFromFileURLs={true}
          source={{ uri: 'https://www.google.com/maps/@-1.949591,30.1011723,15z' }}
          domStorageEnabled={true}
          style={{ flex: 1 }}></WebView> */}

			<Modal
				onBackdropPress={() => setLanguageModal(false)}
				isVisible={languageModal}
			>
				<View
					style={{
						backgroundColor: "#fff",
						borderRadius: 15,
						paddingHorizontal: 20,
						paddingVertical: 10,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontFamily: fonts.bold,
							color: colors.textDark,
							paddingVertical: 10,
						}}
					>
						Change Language
					</Text>
					{languages.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								onPress={() => {
									setAppLanguage(item.number);
									setActiveLanguage(item);
									setLanguageModal(false);
								}}
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									height: 45,
									borderBottomColor:
										index == languages.length - 1
											? "transparent"
											: colors.lightColor,
									borderBottomWidth: 1,
								}}
							>
								<Text style={{ fontFamily: fonts.medium }}>
									{item.language}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</Modal>
		</View>
	);
}

export default Home;
