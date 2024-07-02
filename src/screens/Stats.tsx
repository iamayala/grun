import React, { useContext, useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
} from "react-native";
import AppScreen from "../components/AppScreen";
import EmptyComponent from "../components/EmptyComponent";
import ScreenHeader from "../components/ScreenHeader";
import StatCard from "../components/StatCard";
import colors from "../constants/colors";
import { FixMeLater } from "../constants/common";
import { WIDTH } from "../constants/constants";
import fonts from "../constants/fonts";
import LocalizationContext from "../utils/LocalizationContext";

function Stats({ navigation }) {
	const [emptyStats, setEmptyStats] = useState(false);
	const { t } = useContext<FixMeLater>(LocalizationContext);

	const stats = [
		{
			id: 1,
			label: "Distance Coverage",
			value: 257,
			metric: "%",
		},
		{
			id: 2,
			label: "Amount Consumed",
			value: 689,
			metric: "RWF",
		},
		{
			id: 3,
			label: "Time Elapsed",
			value: 432,
			metric: "Minutes",
		},
		{
			id: 4,
			label: "Battery Level",
			value: 32,
			metric: "%",
		},
		{
			id: 5,
			label: "Other stats",
			value: 213,
			metric: "%",
		},
	];

	return (
		<AppScreen>
			<View style={{ paddingHorizontal: 15, flex: 1 }}>
				<ScreenHeader
					header={t("myStat")}
					onPress={() => navigation.goBack()}
				/>

				<FlatList
					data={stats}
					// contentContainerStyle={{ paddingHorizontal: 20 }}
					numColumns={2}
					renderItem={() => {
						return <StatCard title={t("batteryLevel")} value={62} metric="%" />;
					}}
					ListEmptyComponent={() => {
						return <EmptyComponent />;
					}}
				/>
			</View>
		</AppScreen>
	);
}

export default Stats;
