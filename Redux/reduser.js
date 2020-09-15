import redux from "redux";
import {
	ADD_NUMBER,
	SUBTRACT_NUMBER,
	MULTIPLY_NUMBER,
	DEVIDE_NUMBER,
	MODULAS_NUMBER,
	CLEAR_ALL,
	NUMBER_INPUT,
	EQUAL_BUTTON,
	NEGET_RESULT,
	DECIMAL_POINT,
} from "./acationType";
const InitialState = {
	number: null,
	inputs: [],
	operator: "",
	time: 1,
	result: null,
	point: false,
};

const reduser = (state = InitialState, action) => {
	switch (action.type) {
		case NUMBER_INPUT: {
			if (state.point === true) {
				return {
					...state,
					number: state.number + action.payload / (10 * state.time),
					time: state.time * 10,
				};
			} else {
				return {
					...state,
					number: state.number * 10 + action.payload,
					time: 1,
				};
			}
		}
		case ADD_NUMBER: {
			let arr = state.inputs;
			arr.push(state.number);
			arr.push("+");
			return {
				...state,
				point: false,
				result: state.result + state.number,
				number: null,
				operator: "+",
				inputs: arr,
				//number: state.number,
			};
		}
		case SUBTRACT_NUMBER: {
			let arr = state.inputs;
			arr.push(state.number);
			arr.push("-");
			return {
				...state,
				point: false,
				result: state.result + state.number,
				number: null,
				operator: "-",
				inputs: arr,
				//number: state.number * -1,
			};
		}
		case MULTIPLY_NUMBER: {
			let arr = state.inputs;
			arr.push(state.number);
			arr.push("x");
			return {
				...state,
				point: false,
				result: state.result + state.number,
				number: null,
				operator: "x",
				inputs: arr,
			};
		}
		case DEVIDE_NUMBER: {
			let arr = state.inputs;
			arr.push(state.number);
			arr.push("/");
			return {
				...state,
				point: false,
				result: state.result + state.number,
				number: null,
				operator: "/",
				inputs: arr,
			};
		}
		case MODULAS_NUMBER: {
			if (state.number != 0 || state.number != null) {
				let arr = state.inputs;
				arr.push(state.number);
				arr.push("%");
				return {
					...state,
					point: false,
					result: state.result + state.number,
					number: null,
					operator: "%",
					inputs: arr,
				};
			} else {
				return {
					...state,
				};
			}
		}
		case NEGET_RESULT: {
			return {
				...state,
				result: state.result * -1,
			};
		}
		case CLEAR_ALL: {
			return {
				...state,
				result: null,
				number: null,
				point: false,
				inputs: [],
			};
		}
		case DECIMAL_POINT: {
			//let arr = state.inputs;
			//arr.push("");
			return {
				...state,
				point: true,
			};
		}

		case EQUAL_BUTTON: {
			if (state.operator === "+") {
				return {
					...state,
					point: false,
					result: state.result + state.number,
				};
			}
			if (state.operator === "-") {
				return {
					...state,
					point: false,
					result: state.result - state.number,
				};
			}
			if (state.operator === "x") {
				return {
					...state,
					point: false,
					result: state.result * state.number,
				};
			}
			if (state.operator === "/") {
				return {
					...state,
					point: false,
					result: state.result / state.number,
				};
			}
			if (state.operator === "%") {
				return {
					...state,
					point: false,
					result: state.result % state.number,
				};
			}
		}
		default:
			return state;
	}
};
export default reduser;
