import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Buttons() {
	return (
		<View style={styles.buttonRoot}>
			<View style={styles.buttonRow}>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
			</View>

			<View style={styles.buttonRow}>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
			</View>

			<View style={styles.buttonRow}>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
			</View>

			<View style={styles.buttonRow}>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
			</View>

			<View style={styles.buttonRow}>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
				<View>
					<Text>1</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	buttonRoot: {
		width: "100%",
		height: "65%",
	},
	buttonRow: {
		flexDirection: "row",
		width: "100%",
		height: "20%",
	},
});

export default Buttons;
