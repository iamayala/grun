import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import AppButton from "./AppButton";

type Props = {
	open: boolean;
	title: string;
	body: string;
	onClose: () => void;
	loading?: boolean;
	handleConfirmation: () => void;
};
const ConfirmationModal = ({
	open,
	onClose,
	title,
	body,
	loading = false,
	handleConfirmation,
}: Props) => {
	return (
		<Modal onBackdropPress={onClose} isVisible={open}>
			<View
				style={{
					backgroundColor: "#fff",
					borderRadius: 15,
					padding: 15,
				}}
			>
				<Text
					style={{
						fontSize: 22,
						fontFamily: fonts.bold,
						color: colors.textDark,
						textAlign: "center",
						marginBottom: 10,
					}}
				>
					{title}
				</Text>

				<Text
					style={{
						fontSize: 18,
						fontFamily: fonts.medium,
						color: colors.textGrey,
						textAlign: "center",
					}}
				>
					{body}
				</Text>

				<AppButton
					label="Confirm"
					loading={loading}
					onPress={handleConfirmation}
				/>
			</View>
		</Modal>
	);
};

export default ConfirmationModal;
