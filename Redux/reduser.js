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
} from "./acationType";
const InitialState = {
	number: null,
	result: null,
	mainResult: null,
};

const reduser = (state = InitialState, action) => {
	switch (action.type) {
		case NUMBER_INPUT: {
			return {
				...state,
				number: state.number * 10 + action.payload,
			};
		}
		case ADD_NUMBER: {
			return {
				...state,
				result: state.result + state.number,
				number: null,
				//number: state.number,
			};
		}
		case SUBTRACT_NUMBER: {
			return {
				...state,
				result: state.result - state.number,
				number: null,
				//number: state.number * -1,
			};
		}
		case MULTIPLY_NUMBER: {
			return {
				...state,
				result: state.result * state.number,
				number: null,
			};
		}
		case DEVIDE_NUMBER: {
			if (state.number != 0 || state.number != null) {
				return {
					...state,
					result: state.result / state.number,
					number: null,
				};
			} else {
				return {
					...state,
				};
			}
		}
		case MODULAS_NUMBER: {
			if (state.number != 0 || state.number != null) {
				return {
					...state,
					result: state.result % state.number,
					number: null,
				};
			} else {
				return {
					...state,
				};
			}
		}
		case CLEAR_ALL: {
			return {
				...state,
				result: null,
				number: null,
			};
		}
		case EQUAL_BUTTON: {
			return {
				...state,
			};
		}
		default:
			return state;
	}
};
export default reduser;
