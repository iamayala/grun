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
	Platform,
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
		backgroundColor: colors.textWhite,
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

export interface Message {
	id: string;
	sender: Sender;
	content: string;
	timestamp: string;
	status: string;
	type: string;
}

export interface Sender {
	id: string;
	name: string;
	avatar: string;
}

const ChatSupport = ({ navigation, route }) => {
	const [message, setMessage] = useState("");
	const [chats, setChats] = useState<Message[]>([
		{
			id: "1",
			sender: {
				id: "user123",
				name: "John Doe",
				avatar: "https://example.com/avatar.png",
			},
			content: "Hello there!",
			timestamp: "2023-11-08T10:30:00Z",
			status: "sent",
			type: "text",
		},
	]);

	const handleSendMessage = () => {
		const newChat: Message = {
			id: (chats.length + 1).toString(),
			content: message.trim(),
			status: "delivered",
			timestamp: new Date().toISOString(),
			type: "text",
			sender: {
				avatar: "",
				id: "007",
				name: "Serge",
			},
		};
		setChats([...chats, newChat]);
		setMessage("");
	};

	// @TODO: Add an auto scroll down when someone add a new message

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
									color: colors.textDark,
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
						keyExtractor={(item): any => item.id}
						nestedScrollEnabled
						contentContainerStyle={{ marginHorizontal: 15, paddingTop: 15 }}
						renderItem={({ item }: { item: Message }) => {
							return item.sender.id === "007" ? (
								<MessageReceived message={item} />
							) : (
								<MessageSent message={item} />
							);
						}}
					/>
					<View style={styles.inputview}>
						<TextInput
							value={message}
							onChangeText={(e) => setMessage(e)}
							style={styles.textinput}
							placeholder="Start typing..."
							placeholderTextColor={colors.textGrey}
						/>
						<TouchableOpacity
							onPress={message.trim() !== "" ? handleSendMessage : null}
							style={[
								styles.SendBtn,
								message.trim() !== ""
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
};

export default ChatSupport;
