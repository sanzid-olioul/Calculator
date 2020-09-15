import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";
import store from "../Redux/store";

function Screen() {
	const input = useSelector((state) => state.number);
	const result = useSelector((state) => state.result);
	return (
		<View style={styles.screenRoot}>
			<View style={styles.screenInput}>
				<Text style={styles.screenInputText}>{input}</Text>
			</View>

			<View style={styles.screenSum}>
				<Text style={styles.screenSumText}>{result}</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screenRoot: {
		width: "100%",
		height: "34%",
		backgroundColor: "#4c4c4c",
		marginBottom: "2%",
		borderRadius: 20,
	},
	screenInput: {
		width: "100%",
		height: "65%",
	},
	screenSum: {
		width: "100%",
		height: "35%",
	},
	screenInputText: {
		fontSize: 48,
		color: "#ffffff",
	},
	screenSumText: {
		textAlign: "right",
		fontSize: 64,
		color: "#ffffff",
	},
});

export default Screen;
