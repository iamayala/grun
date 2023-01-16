import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { WIDTH } from "../constants/constants";

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

function MessageSent({ item }) {
	return (
		<View style={{ flexDirection: "row" }}>
			<TouchableOpacity style={styles.messageRcvd}>
				<Text style={{ fontFamily: fonts.medium }}>
					Hello Serge, how can I help you today? Hello Serge, how can I help you
					Hello Serge, how can I help you today? Hello Serge, how can I help you
					Hello Serge, how can I help you today? today? today?
				</Text>
				<Text
					style={{
						fontFamily: fonts.bold,
						fontSize: 10,
						textAlign: "right",
						marginTop: 5,
					}}
				>
					12:00
				</Text>
			</TouchableOpacity>
			<View style={{ flex: 1 }} />
		</View>
	);
}

export default MessageSent;
