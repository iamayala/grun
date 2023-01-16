import React from "react";
import {
	useFonts,
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import MainNavigation from "./src/navigation";

import { Provider } from "react-redux";
import { RootSiblingParent } from "react-native-root-siblings";
import { PersistGate } from "redux-persist/lib/integration/react";
import { getPersistor } from "@rematch/persist";
import store from "./src/store";

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
		<Provider store={store}>
			<PersistGate persistor={getPersistor()} loading={null}>
				<RootSiblingParent>
					<MainNavigation />
				</RootSiblingParent>
			</PersistGate>
		</Provider>
	);
}
