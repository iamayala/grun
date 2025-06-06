import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { WIDTH } from "../constants/constants";
import { Message } from "../screens/ChatSupport";

const styles = StyleSheet.create({
	messageSnt: {
		backgroundColor: colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderBottomLeftRadius: 13,
		borderBottomRightRadius: 13,
		borderTopLeftRadius: 13,
		marginBottom: 7,
		maxWidth: WIDTH * 0.8,
	},
});

type Props = {
	message: Message;
};

const MessageReceived = ({ message }: Props) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<View style={{ flex: 1 }} />
			<TouchableOpacity style={styles.messageSnt}>
				<Text style={{ fontFamily: fonts.medium, color: colors.textWhite }}>
					{message.content}
				</Text>
				<Text
					style={{
						fontFamily: fonts.bold,
						fontSize: 10,
						textAlign: "right",
						marginTop: 5,
						color: colors.textWhite,
					}}
				>
					{message.timestamp}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MessageReceived;
