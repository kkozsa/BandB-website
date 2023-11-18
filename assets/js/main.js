$(function(){
	var $contactForm = $("#contact-form")
	if ($contactForm.length){
		$contactForm.validate({
			rules:{
				fullname:{
					required:true
				},
				email:{
					required:true
				},
				description:{
					required:true
				}
			},
			messages:{
				fullname:{
					required: "Please enter your full name."
				},
				email:{
					required: "Please enter your email address."
				},
				description:{
					required: "Please enter description."
				}
			}
		})
	}
});

