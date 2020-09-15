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

export const addNumber = () => {
	return {
		type: ADD_NUMBER,
	};
};
export const subtractNumber = () => {
	return {
		type: SUBTRACT_NUMBER,
	};
};
export const multiplyNumber = () => {
	return {
		type: MULTIPLY_NUMBER,
	};
};
export const devideNumber = () => {
	return {
		type: DEVIDE_NUMBER,
	};
};
export const modulasNumber = () => {
	return {
		type: MODULAS_NUMBER,
	};
};
export const negateResult = () => {
	return {
		type: NEGET_RESULT,
	};
};
export const clearAll = () => {
	return {
		type: CLEAR_ALL,
	};
};
export const numberInput = (number) => {
	return {
		type: NUMBER_INPUT,
		payload: number,
	};
};

export const equalButton = () => {
	return {
		type: EQUAL_BUTTON,
	};
};
export const decimalPoint = () => {
	return {
		type: DECIMAL_POINT,
	};
};
