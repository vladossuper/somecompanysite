let validationForm = (function() {
	const name = document.querySelector('.form__name');
	const phone = document.querySelector('.form__phone');
	const email = document.querySelector('.form__email');
	const textArea = document.querySelector('.form__message')
	const submitButton = document.querySelector('.form__btn');
	const errorWindow = document.querySelector('.error-window');
	const errorWindowText = document.querySelector('.error-window__text');
	const close = document.querySelector('.close');
	const fields = document.querySelectorAll('.field');
	const regularEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	const regularNumber = /^\d[\d\(\)\ -]{4,14}\d$/;
	

	submitButton.addEventListener('click', isValid);

	close.addEventListener('click', function () {
		errorWindow.classList.add('hide');
	});

	const errorArray = ['Enter the data', 'Write a valid email! For example: test@test.com', 'Write a valid phone! For example: 8 999 1234567'];

	function isValid (event) {
		event.preventDefault();

		for (let i = 0; i < fields.length; i++) {
			if (!fields[i].value) {
				fields[i].classList.add('red');
				errorWindow.classList.remove('hide');
				errorWindowText.innerHTML = errorArray[0];
			}

			if (fields[i].value) {
				fields[i].classList.remove('red');
			}

			if (name.value !== '' && phone.value !== '' && email.value !== '' && textArea.value !== '') {
				errorWindow.classList.add('hide');
				if (regularEmail.test(email.value) == false) {
					errorWindow.classList.remove('hide');
					errorWindowText.innerHTML = errorArray[1];
					email.classList.add('red');
				}

				if(regularNumber.test(phone.value) == false) {
					errorWindow.classList.remove('hide');
					errorWindowText.innerHTML = errorArray[2];
					phone.classList.add('red');
				}
			}
		}
	}	
}());

		

	