import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import store from "./Redux/store";

import Buttons from "./Components/buttons";
import Screen from "./Components/screen";
import { Provider } from "react-redux";
export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.root}>
				<Screen />
				<Buttons />
				<StatusBar style="auto" />
			</View>
		</Provider>
	);
}
const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#1a1c20",
	},
});
