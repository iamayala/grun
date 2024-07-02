import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { WIDTH } from "../constants/constants";
import { Message } from "../screens/ChatSupport";

const styles = StyleSheet.create({
	messageRcvd: {
		backgroundColor: colors.success,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderBottomRightRadius: 13,
		borderBottomLeftRadius: 13,
		borderTopRightRadius: 13,
		marginBottom: 7,
		maxWidth: WIDTH * 0.8,
	},
});

type Props = {
	message: Message;
};

const MessageSent = ({ message }: Props) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<TouchableOpacity style={styles.messageRcvd}>
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
			<View style={{ flex: 1 }} />
		</View>
	);
};

export default MessageSent;
