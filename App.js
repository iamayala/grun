import React from "react";
import {
	useFonts,
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation";

export default function App() {
	let [fontsLoaded] = useFonts({
		DMSans_400Regular,
		DMSans_500Medium,
		DMSans_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<MainNavigation />
		</NavigationContainer>
	);
}
