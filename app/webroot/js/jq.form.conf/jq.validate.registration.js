$(document).ready(function(){
	$('#RegistrationAddForm').validate({ 
		rules: {
			'data[Registration][first_name]': {
				required: true,
				maxlength: 127
			},
			'data[Registration][last_name]': {
	      		required: true,
	      		maxlength: 127
			},
			'data[Registration][role]': {
		    	required: true
	 		},
	 		'data[Registration][email]': {
		    	required: true,
		    	maxlength: 127,
		    	email: true
	 		},
	 		'data[Registration][retype_email]': {
		    	equalTo: "#RegistrationEmail",
		    	email: true
	 		},
	 		'data[Registration][phone]': {
				required: true,
				minlength: 7 
			},
			'data[Registration][c_o]': {
	      		maxlength: 127
			},
			'data[Registration][street_address]': {
		    	required: true,
		    	maxlength: 127
	 		},
	 		'data[Registration][postal_code]': {
		    	required: true,
		    	rangelength: [5,5],
		    	digits: true
	 		},
	 		'data[Registration][city]': {
		    	required: true,
		    	maxlength: 127
	 		}
		},
		messages: {
			'data[Registration][postal_code]': {
				required: "Du måste fylla i en korrekt postkod.",
				rangelength: "Du måste fylla i en korrekt postkod.",
				digits: "Du måste fylla i en korrekt postkod."
			}
		}
	});
	//validator.showErrors({'data[Registration][retype_email]': "Ange samma e-postadress igen."});

})