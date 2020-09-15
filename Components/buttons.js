import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {
	addNumber,
	subtractNumber,
	multiplyNumber,
	devideNumber,
	modulasNumber,
	clearAll,
	numberInput,
	equalButton,
} from "../Redux/actionCreator";

function Buttons() {
	const dispatch = useDispatch();
	return (
		<View style={styles.buttonRoot}>
			<View style={styles.buttonRow}>
				<TouchableOpacity
					onPress={() => dispatch(clearAll())}
					style={styles.buttonColorSpecial}
				>
					<Text style={styles.buttonText}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => console.log("jani na")}
					style={styles.buttonColorSpecial}
				>
					<Text style={styles.buttonText}>+/-</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(modulasNumber())}
					style={styles.buttonColorSpecial}
				>
					<Text style={styles.buttonText}>%</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(devideNumber())}
					style={styles.buttonColorArithmatic}
				>
					<Text style={styles.buttonText}>/</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(7))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>7</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(8))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(9))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(multiplyNumber())}
					style={styles.buttonColorArithmatic}
				>
					<Text style={styles.buttonText}>x</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(4))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(5))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(6))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(subtractNumber())}
					style={styles.buttonColorArithmatic}
				>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(1))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(2))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(3))}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(addNumber())}
					style={styles.buttonColorArithmatic}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.buttonRow}>
				<TouchableOpacity
					onPress={() => dispatch(numberInput(0))}
					style={styles.buttonColorNumberZero}
				>
					<Text style={styles.buttonText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch()}
					style={styles.buttonColorNumbers}
				>
					<Text style={styles.buttonText}>.</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => dispatch(equalButton())}
					style={styles.buttonColorArithmatic}
				>
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
