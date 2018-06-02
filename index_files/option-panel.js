(function($) {
    "use strict";

    var $optionPanel = '';
    var $optionPanelBtn = '';
    var $optionPanelTop = 100;
    var $optionPanelBottom = 20;
    var $optionPanelWidth = 250;
    var $optionPanelLeft = $optionPanelWidth + 2; // shadow width
	var $themeColor = '33d685';

	$(function() {

		createOptionPanel();		
		setOptionPanelHeight();
		$(window).resize(function(){
			setOptionPanelHeight();
		});
		
		$optionPanelBtn.click(function(){
			if($(this).hasClass('opened')){
				$(this).parent().animate({left: '-'+$optionPanelLeft+'px'}, 500);
				$(this).removeClass('opened');
			}else{
				$(this).parent().animate({left: '0px'}, 500);
				$(this).addClass('opened');
			}
		});

		$('.op-theme-colors button').click(function () {
			$('.op-theme-colors button').removeClass('active');
			$(this).addClass('active');
			replaceClassName('theme-color', 'theme-color-'+$(this).data('color'));
		});
						
		$('.op-theme-skin button').click(function () {
			changeBtnActive($(this));			
			replaceClassName('theme-skin', 'theme-skin-'+$(this).data('value'));
		});

		if($('body').hasClass('header-has-img')){
			$('.op-btn-check').addClass('active');
		} else {
			$('.op-btn-check').removeClass('active');
		}

		$('.op-theme-headimg button').click(function () {
			if($('body').hasClass('header-has-img')){
				$(this).removeClass('active');
				$('body').removeClass('header-has-img');
			} else {
				$(this).addClass('active');
				$('body').addClass('header-has-img');
			}
		});
	});
	 
	function replaceClassName(pattern, value){
		var element = $('html');
		var classes = element.attr('class').split(/\s+/);
		var pattern = new RegExp("^" + pattern + "-");

		for(var i = 0; i < classes.length; i++){
			var className = classes[i];
			if(className.match(pattern)){
				element.removeClass(className);
			}
		}	
			
		element.addClass(value);	
	}
	 
	function changeBtnActive(btn){
		var btnGroup = btn.closest('.op-btn-group');
		var btnLeft = btn.position().left;
		var btnWidth = btn.outerWidth();
		var btnBarLine = btnGroup.find('.op-btn-bar-line');

		btnGroup.find('button').removeClass('active');
		btn.addClass('active');
		btnBarLine.css({"left": btnLeft + "px", "width": btnWidth});
	}
	
	// function createOptionPanel(){
	// 	var $html = '<div id="op-panel">'+
	// 		'<div id="op-panel-btn"><i class="rsicon rsicon-settings"></i></div>'+
	// 		'<div class="op-content">'+
    //             '<div class="op-section">'+
    //                 '<div class="op-theme-skin op-btn-group">'+
    //                     '<button class="op-btn active" data-value="light">Light</button>'+
    //                     '<button class="op-btn" data-value="dark">Dark</button>' +
	// 					'<div class="op-btn-bar"><span class="op-btn-bar-line"></span></div>'+
    //                 '</div>'+
    //             '</div>'+
	// 			'<div class="op-section">'+
	// 				'<div class="op-theme-colors">'+
	// 					'<button class="ripple-centered" data-color="e83b35"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="e8676b"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="ec407a"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="8e45ae"><i class="rsicon rsicon-check"></i></button>'+

	// 					'<button class="ripple-centered" data-color="673bb7"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="3f51b5"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="5d6cc1"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="1a77d4"><i class="rsicon rsicon-check"></i></button>'+

	// 					'<button class="ripple-centered" data-color="07aaf5"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="56c8d2"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="27a79a"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="07cb79"><i class="rsicon rsicon-check"></i></button>'+

	// 					'<button class="ripple-centered" data-color="8dc24c"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="ffde03"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="fec107"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="ff9801"><i class="rsicon rsicon-check"></i></button><br/><br/><hr/>'+

	// 					'<button class="ripple-centered" data-color="d1a3a6"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="ffcfd3"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="fbbdd4"><i class="rsicon rsicon-check"></i></button>'+
	// 					'<button class="ripple-centered" data-color="e2bfe7"><i class="rsicon rsicon-check"></i></button>'+

    //                     '<button class="ripple-centered" data-color="c7ccea"><i class="rsicon rsicon-check"></i></button>'+
    //                     '<button class="ripple-centered" data-color="83d5fb"><i class="rsicon rsicon-check"></i></button>'+
    //                     '<button class="ripple-centered" data-color="b4e1dc"><i class="rsicon rsicon-check"></i></button>'+
    //                     '<button class="ripple-centered" data-color="a7d9a8"><i class="rsicon rsicon-check"></i></button>'+

	// 				'</div>'+
	// 			'</div>'+
	// 			'<div class="op-section">'+
	// 				'<div class="op-theme-headimg">'+
	// 					'<button class="op-btn-check">' +
	// 						'<span class="op-check"><i class="rsicon rsicon-check"></i></span> Show Header Background Image' +
	// 					'</button>'+
	// 				'</div>'+
	// 			'</div>'+
	// 		'</div>'+
	// 	'</div>';		
	// 	$('body').append($html);
		
	// 	$optionPanel = $('#op-panel');
	// 	$optionPanelBtn = $('#op-panel-btn');

	// 	$optionPanel.css({
    //         'left' : '-'+$optionPanelLeft+'px',
    //         'top' : $optionPanelTop+'px',
    //         'width' : $optionPanelWidth+'px'
    //     });

	// 	$('.op-theme-colors [data-color = "'+$themeColor+'"]').addClass('active');
	// }
	
	function setOptionPanelHeight(){
        $optionPanel.css('height', 'auto');

		var windowHeight = $(window).height();
		var panelHeight = $optionPanel.height();
		var freeSpace = windowHeight-panelHeight-$optionPanelTop-$optionPanelBottom;
		
		if(freeSpace > 0){
			$optionPanel.css('height', 'auto');
		} else {
			var height = windowHeight-$optionPanelTop-$optionPanelBottom;
			$optionPanel.css('height', height+'px');
		}		
	}
	 
})(jQuery);