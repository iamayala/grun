import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	KeyboardAvoidingView,
} from "react-native";
import color from "../constants/colors";
import AppScreen from "../components/AppScreen";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import MessageSent from "../components/MessageSent";
import MessageReceived from "../components/MessageReceived";

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputview: {
		flexDirection: "row",
		margin: 15,
		backgroundColor: colors.white,
		height: 45,
		borderRadius: 30,
		paddingRight: 3,
		paddingLeft: 15,
		alignItems: "center",
		borderWidth: 1,
		borderColor: color.border,
	},
	textinput: {
		flex: 1,
		marginRight: 5,
		fontFamily: fonts.medium,
		fontSize: 16,
	},
	SendBtn: {
		padding: 10,
		height: 37,
		width: 37,
		borderRadius: 24,
		backgroundColor: color.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	sendicon: {
		height: 16,
		width: 16,
		resizeMode: "contain",
		tintColor: "white",
	},
	HelloProfile: {
		height: 40,
		width: 40,
		borderRadius: 20,
		resizeMode: "cover",
	},
	HeaderView: {
		paddingVertical: 5,
		flexDirection: "row",
		alignItems: "center",
	},
});

function ChatSupport({ navigation, route }) {
	const [message, setMessage] = useState("");
	const [chats, setChats] = useState([
		{
			id: 123,
			content:
				"Please, make sure you have sent the previous emails to all my classmates",
		},
	]);

	return (
		<AppScreen>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}
				keyboardVerticalOffset={50}
			>
				<View style={styles.container}>
					<View style={[styles.HeaderView, { paddingHorizontal: 15 }]}>
						<View>
							<TouchableOpacity onPress={() => navigation.goBack()}>
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
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text
								style={{
									fontFamily: fonts.medium,
									marginHorizontal: 20,
									fontSize: 17,
									color: colors.textDarks,
								}}
							>
								Support Center
							</Text>
							<View
								style={{
									height: 10,
									width: 10,
									borderRadius: 5,
									backgroundColor: colors.success,
								}}
							/>
							<Text
								style={{
									fontFamily: fonts.medium,
									marginHorizontal: 7,
									fontSize: 14,
									color: colors.success,
								}}
							>
								Online
							</Text>
						</View>
					</View>
					<FlatList
						data={chats}
						keyExtractor={(item) => item.id}
						nestedScrollEnabled
						contentContainerStyle={{ marginHorizontal: 15, paddingTop: 15 }}
						renderItem={({ item }) => {
							return <MessageReceived />;
						}}
					/>
					<View style={styles.inputview}>
						<TextInput
							value={message}
							onChangeText={(e) => setMessage(e)}
							style={styles.textinput}
							placeholder="Start typing..."
							placeholderTextColor={colors.iconGrey}
						/>
						<TouchableOpacity
							style={[
								styles.SendBtn,
								message
									? { backgroundColor: "#703bff" }
									: { backgroundColor: "#748c94" },
							]}
						>
							<Image
								style={styles.sendicon}
								source={require("../../assets/send.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</AppScreen>
	);
}

export default ChatSupport;
