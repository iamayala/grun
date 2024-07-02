import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { HEIGHT } from "../constants/constants";
import colors from "../constants/colors";
import SettingOption from "../components/SettingOption";
import fonts from "../constants/fonts";
import AppScreen from "../components/AppScreen";
import { FixMeLater } from "../constants/common";
import LocalizationContext from "../utils/LocalizationContext";
import WalletCard from "../components/WalletCard";

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

				<WalletCard navigation={navigation} />

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
					isLastItem
					hasRightIcon={false}
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
