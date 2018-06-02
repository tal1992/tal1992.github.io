var recaptcha1;
var recaptcha2;
var captchaElements = document.getElementsByClassName('g-recaptcha');
if( captchaElements.length > 0 ){
	var siteKey = captchaElements[0].dataset.sitekey;
	var theme = captchaElements[0].dataset.theme;
	var PxRecaptchaCallback = function() {
		//Render the recaptcha1 on the element with ID "recaptcha1"
		recaptcha1 = grecaptcha.render('recaptcha1', {
		  'sitekey' : siteKey, //Replace this with your Site key
		  'theme' : theme
		});
		 
		//Render the recaptcha2 on the element with ID "recaptcha2"
		recaptcha2 = grecaptcha.render('recaptcha2', {
		  'sitekey' : siteKey, //Replace this with your Site key
		  'theme' : theme
		});
	};
}
(function ($) {
    "use strict";
	
	function ripple(element, pageX, pageY){
		var $rippleElement = $('<span class="ripple-effect" />');                
		var xPos = parseInt( pageX, 10 ) - parseInt( element.offset().left, 10 );
		var yPos = parseInt( pageY, 10 ) - parseInt( element.offset().top, 10 );
		var size = Math.floor( Math.min(element.height(), element.width()) * 0.5 );
		var animateSize = Math.floor( Math.max(element.width(), element.height()) * Math.PI );
							
		$rippleElement
			.css({
				top: yPos,
				left: xPos,
				width: size,
				height: size                   
			})
			.appendTo(element)
			.animate({
				width: animateSize,
				height: animateSize,
				opacity: 0
			}, 500, function () {
				$(this).remove();
			});
	}
	
	function isValidEmail(emailAddress){
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};
	
		/** Contact Form */			
	$('.contact-submit').on('click', function(e){
		ripple( $(this).parent(), e.pageX, e.pageY );			
		var errors;
		var contact_form = $(this).closest('.contactForm');
		var contact_form_items = contact_form.find('.input-field');		
		var name = contact_form.find('.contact-name');
		var email = contact_form.find('.contact-email');
		var message = contact_form.find('.contact-message');
		var contact_form_response = contact_form.find('.contact-response');	
		var subject = contact_form.find('.contact-subject');
		var g_recaptcha_response = contact_form.find('#g-recaptcha-response');
		var email_to = '';
		if(contact_form.find('.email_to').length > 0){
			email_to = contact_form.find('.email_to').val();
		}
		contact_form_response.empty();
		// Reset errors
		contact_form_items.removeClass('error');
		errors = false;
		
		if (name.val()  === '') {
			errors = true;
			name.parent().addClass('error');
		}		
		if (email.val() === '' || !isValidEmail(email.val())) {
			errors = true;
			email.parent().addClass('error');
		}		
		if (message.val() === '') {
			errors = true;
			message.parent().addClass('error');
		}
		if( !errors ) {
			contact_form.serialize(),
			jQuery.post(
				ajax_var.url,
				{
					action : 'rs_card_contact_form',
					name: name.val(),
					email: email.val(),
					message: message.val(),
					subject: subject.val(),
					email_to: email_to,
					g_recaptcha_response: g_recaptcha_response.val()
				},
				function(data){
					contact_form_response.html(data);
					contact_form.each(function(){
						this.reset();
					});
				},
				"html"
			);
		}
		
		return false;
	});
	
})(jQuery);