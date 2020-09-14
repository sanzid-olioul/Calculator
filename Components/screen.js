import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Screen() {
	return (
		<View style={styles.screenRoot}>
			<View style={styles.screenInput}>
				<Text style={styles.screenInputText}></Text>
			</View>

			<View style={styles.screenSum}>
				<Text style={styles.screenSumText}></Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screenRoot: {
		width: "100%",
		height: "35%",
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
