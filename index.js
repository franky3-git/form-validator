//"use strict"

import Validator from './validator/formvalidator.js';

const formValidator = new Validator('.form-validation');

const lessThanFourChars = (inputValue, input) => {
	if(inputValue.length < 4) {
		return {
			passValidation: false,
			errorMessage: 'The length cannot be less than 4 characters'
		}	
	}
	return {
		passValidation: true
	}
}

formValidator.validate('#name', lessThanFourChars);






