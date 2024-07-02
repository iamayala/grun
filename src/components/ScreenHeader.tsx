import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

type Props = {
	onPress: () => void;
	header: string;
};

const ScreenHeader = ({ onPress, header }: Props) => {
	return (
		<React.Fragment>
			<View>
				<TouchableOpacity onPress={onPress}>
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
				{header}
			</Text>
		</React.Fragment>
	);
};

export default ScreenHeader;
