(function() {
	

	var openFormButton = document.querySelector('.arrow-down');
	var form = document.querySelector('.form');
	var nav = document.querySelector('.nav');

	if(openFormButton){
		openFormButton.addEventListener('click', function(e) {
		e.preventDefault();
		LT.form.open();
	})
	}


	if(form) {
		form.addEventListener('submit', function(e){
			e.preventDefault();
			if(LT.form.isValid()) {
				console.log('VAlid');
			} else {
				console.log('VAlidN');
			}
		});
	}

	if(nav) {
		nav.addEventListener('click', function(e) {
			var target = e.target;

			if(target.tagName.toLowerCase() !== 'a'){
				return;
			}
			e.preventDefault();
			LT.navigation.toggleToActiveLink(target);
		});
	}

	
}());