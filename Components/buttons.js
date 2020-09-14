import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Buttons() {
	return (
		<View style={styles.buttonRoot}>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.buttonColorSpecial}>
					<Text style={styles.buttonText}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorSpecial}>
					<Text style={styles.buttonText}>+/-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorSpecial}>
					<Text style={styles.buttonText}>%</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorArithmatic}>
					<Text style={styles.buttonText}>/</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>7</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorArithmatic}>
					<Text style={styles.buttonText}>x</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorArithmatic}>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorArithmatic}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity style={styles.buttonColorNumberZero}>
					<Text style={styles.buttonText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorNumbers}>
					<Text style={styles.buttonText}>.</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColorArithmatic}>
					<Text style={styles.buttonText}>=</Text>
				</TouchableOpacity>
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

	buttonColorNumbers: {
		backgroundColor: "#43658b",
		height: "87%",
		width: "23%",
		borderRadius: 50,
		margin: "1%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonColorNumberZero: {
		backgroundColor: "#43658b",
		height: "87%",
		width: "46%",
		borderRadius: 50,
		margin: "1%",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		fontSize: 48,
		color: "#ffff",
	},
	buttonColorArithmatic: {
		backgroundColor: "#fabea7",
		height: "87%",
		width: "23%",
		borderRadius: 50,
		margin: "1%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonColorSpecial: {
		backgroundColor: "#ffcb8e",
		height: "87%",
		width: "23%",
		borderRadius: 50,
		margin: "1%",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Buttons;
