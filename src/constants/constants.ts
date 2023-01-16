import { Dimensions, StatusBar, Platform } from "react-native";

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get("window");

const isIPhoneX = () =>
	Platform.OS === "ios" && !Platform.isPad
		? (width === X_WIDTH && height === X_HEIGHT) ||
		  (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
		: false;

export const StatusBarHeight = Platform.select({
	ios: isIPhoneX() ? 33 : 20,
	android: StatusBar.currentHeight,
	default: 0,
});

export const WIDTH = Dimensions.get("screen").width;
export const HEIGHT = Dimensions.get("screen").height;
