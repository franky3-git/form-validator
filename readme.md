# a sample frontend validation form

1. import the validation file inside your main js file

2. you must put every input inside a div with class **form-control** and every input must be have an **input** class

3. copy the css and paste it inside your css file. // you can change the css

4. create an instance of a formvalidator by putting the selector as a parameter
`new Validator('#selector)`

5. create validator's function
* the function need to parameter the input value and the input itself for convenience
* if your validation failed, return an object with passValidation with the value false and errorMessage with value the error message you want to display
* if your validation pass return an object with passValidation as true
```javascript
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

````
6. we will improve the project with some backend validation to and some response when the form is submitted

7. please excuse my english i will improve it.(hahahaha).
