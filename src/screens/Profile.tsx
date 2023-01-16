import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBarHeight, HEIGHT } from "../constants/constants";
import colors from "../constants/colors";
import SettingOption from "../components/SettingOption";
import fonts from "../constants/fonts";
import AppScreen from "../components/AppScreen";
import { FixMeLater } from "../constants/common";
import LocalizationContext from "../utils/LocalizationContext";

function Profile({ navigation }) {
	const { t } = useContext<FixMeLater>(LocalizationContext);

	return (
		<AppScreen>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flexDirection: "row",
						marginHorizontal: 15,
						marginTop: 40,
						alignItems: "center",
					}}
				>
					<Image
						source={require("../../assets/grunprofile.png")}
						style={{
							height: 100,
							width: 100,
							borderRadius: 50,
							backgroundColor: colors.lightColor,
						}}
					/>
					<View
						style={{
							flex: 1,
							marginHorizontal: 15,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontFamily: fonts.bold,
								color: colors.textDark,
							}}
						>
							(+250) 780 000 000
						</Text>
						<TouchableOpacity>
							<Text
								style={{
									color: colors.textGrey,
									marginTop: 10,
									fontFamily: fonts.medium,
								}}
							>
								{t("updateProfile")}
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View
					style={{
						backgroundColor: colors.primary,
						marginHorizontal: 15,
						borderRadius: 15,
						padding: 15,
						marginTop: 20,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							paddingBottom: 15,
							borderBottomColor: "#7c7c7c",
							borderBottomWidth: 1,
						}}
					>
						<Image
							source={require("../../assets/logopay.png")}
							style={{ height: 30, width: 100, resizeMode: "contain" }}
						/>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("Recharge")}
							style={{
								height: 30,
								paddingHorizontal: 20,
								backgroundColor: colors.lightColor,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 38,
							}}
						>
							<Text style={{ fontFamily: fonts.medium }}>Recharge +</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 15,
						}}
					>
						<Text
							style={{
								color: colors.lightColor,
								fontSize: 16,
								fontFamily: fonts.medium,
								textTransform: "capitalize",
							}}
						>
							{t("yourBalance")}
						</Text>
						<Text
							style={{
								color: colors.lightColor,
								fontSize: 17,
								fontFamily: fonts.bold,
							}}
						>
							RWF 2900
						</Text>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 15,
						}}
					>
						<Text
							style={{
								color: colors.lightColor,
								fontSize: 16,
								fontFamily: fonts.medium,
							}}
						>
							Junior
						</Text>
						<Text
							style={{
								color: colors.lightColor,
								fontSize: 17,
								fontWeight: "bold",
								fontFamily: fonts.bold,
							}}
						>
							RWF 13,780
						</Text>
					</View>
				</View>

				<SettingOption
					label={t("myStat")}
					icon={require("../../assets/Chart.png")}
					onPress={() => navigation.navigate("Stats")}
				/>

				<SettingOption
					label={t("subAccounts")}
					icon={require("../../assets/SubUser.png")}
					onPress={() => navigation.navigate("SubAccounts")}
				/>

				<SettingOption
					label={t("howItWorks")}
					icon={require("../../assets/Document.png")}
					onPress={() => navigation.navigate("HowTo")}
				/>

				<SettingOption
					label={t("settings")}
					icon={require("../../assets/Setting.png")}
					onPress={() => navigation.navigate("AppSettings")}
				/>

				<SettingOption
					label={t("support")}
					icon={require("../../assets/Chat.png")}
					onPress={() => navigation.navigate("Support")}
				/>

				<SettingOption
					label={t("logout")}
					icon={require("../../assets/Logout.png")}
					onPress={() => navigation.navigate("Support")}
				/>

				<View
					style={{
						height: HEIGHT * 0.2,
					}}
				/>
			</ScrollView>
		</AppScreen>
	);
}

export default Profile;
