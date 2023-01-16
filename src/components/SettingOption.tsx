import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import fonts from "../constants/fonts";
import { FixMeLater } from "../constants/common";

type Props = {
	label: string;
	onPress?: () => void;
	icon: FixMeLater;
};

function SettingOption({ label, onPress, icon }: Props) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 60,
				justifyContent: "space-between",
				marginHorizontal: 20,
				alignItems: "center",
				flexDirection: "row",
				borderBottomColor: "#ebebeb",
				borderBottomWidth: 1,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					flex: 1,
				}}
			>
				<Image source={icon} style={{ height: 20, width: 20 }} />
				<Text
					style={{
						fontFamily: fonts.medium,
						color: colors.textDark,
						marginHorizontal: 20,
						textTransform: "capitalize",
						flex: 1,
					}}
				>
					{label}
				</Text>
			</View>
			<MaterialIcons name="chevron-right" size={18} color="#777" />
		</TouchableOpacity>
	);
}

export default SettingOption;
