log('form validator file is connected')

class FormValidator {
	constructor(selector) {
		this.form = document.querySelector(selector);
		this.inputsWithError = new Set();
		
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			
			if(!this.hasError) {
				this.form.submit()
			}
			this.inputsWithError.forEach(input => {
				const selectedFormControl = input.closest('.form-control');
				log(selectedFormControl)
				if(selectedFormControl.dataset['error']) {
					log('error exist');
					return selectedFormControl.setAttribute('data-error', selectedFormControl.dataset['error']);
				}
				selectedFormControl.setAttribute('data-error', 'Cannot be empty');
			})
		})
	}
	
	get hasError() {
		return this.inputsWithError.size > 0;
	}
	
	validate(selector, checkFunction) {
		const inputToValidate = this.form.querySelector(selector);
		
		const resolve = (firstExecution) => {
			const { passValidation, errorMessage } = checkFunction(inputToValidate.value, inputToValidate);
			
			if(!firstExecution) {
				const selectedFormControl = inputToValidate.closest('.form-control');
				if(errorMessage) {
					selectedFormControl.setAttribute('data-error', errorMessage)
				} else {
					selectedFormControl.removeAttribute('data-error')
				}
			}
			
			if(!passValidation) {
				this.inputsWithError.add(inputToValidate)
			} else {
				this.inputsWithError.delete(inputToValidate)
			}
			
		}
		
		inputToValidate.addEventListener('change', () => {
			resolve()
			log('change event')
		})
		resolve('first')
		
	}
}

export default FormValidator