import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { WIDTH } from "../constants/constants";

function Splash({ navigation }) {
	useEffect(() => {
		checkLoggedIn();
	}, []);

	const checkLoggedIn = () => {
		setTimeout(() => {
			navigation.navigate("Login");
		}, 2000);
	};

	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: "#fff",
			}}
		>
			<Image
				source={require("../../assets/grunappblack.png")}
				style={{
					height: 100,
					width: WIDTH * 0.7,
					resizeMode: "contain",
				}}
			/>
		</View>
	);
}

export default Splash;
