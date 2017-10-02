(function(){
	var me = {};

	var form = document.querySelector('.form-container');
	var closeButton = null;


	function onClose(e) {
		e.preventDefault();

		me.close();

		closeButton.removeEventListener('click', onClose);

	};

	me.open = function() {
		form.classList.remove('visually-hidden');

		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);

	};

	me.close = function() {
		form.classList.add('visually-hidden');
	};

	me.isValid = function() {
		var requiredFields = document.querySelectorAll('[data-valid="required"]');
		var emailValue = document.querySelector('[data-email]').value;
		var numberValue = document.querySelector('[data-number]').value;

		if(!me.isAllCompleted(requiredFields)) {
			console.log('Заповніть всі поля ');
			return false;
		} else if(!LT.validation.isEmail(emailValue)) {
			console.log('Не вірний Емейл ');
			return false;
		} else if (!LT.validation.isNumber(numberValue)) {
			console.log('Не вірний Number Curva ');
			return false;
		}

		return true;
	};

	me.isAllCompleted = function(data) {
		var result = true;

		for(var i = 0; i < data.length; i++){
			if(!LT.validation.isNotEmpty(data[i].value)) {
				result = false;
				break;
			}
		}

		return result;
	};

	LT.form = me;
}());