import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Buttons from "./Components/buttons";
import Screen from "./Components/screen";
export default function App() {
	return (
		<View style={styles.root}>
			<Screen />
			<Buttons />
			<StatusBar style="auto" />
		</View>
	);
}
const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#1a1c20",
	},
});
