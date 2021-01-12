(function ($) {
 "use strict";

  /*----------------------------
 TOP Menu Stick
------------------------------ */
$(window).on('scroll',function() {
if ($(this).scrollTop() > 120){  
    $('#header-sticky').addClass("sticky");
  }
  else{
    $('#header-sticky').removeClass("sticky");
  }
}); 

  /*----------------------------
 TOP Menu Stick
------------------------------ */
$(window).on('scroll',function() {
if ($(this).scrollTop() > 40){  
    $('#header-sticky-2').addClass("sticky");
  }
  else{
    $('#header-sticky-2').removeClass("sticky");
  }
}); 


/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('#mobile-menu-active').meanmenu();	
	
 
/*-------------------------
  showlogin toggle function
--------------------------*/
	 $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
	
/*-------------------------
  showcoupon toggle function
--------------------------*/
	 $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });
	
/*-------------------------
  Create an account toggle function
--------------------------*/
	$( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
		 
	 	 	
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( '#side-show' ).on('click', function() {
        $( '#side-hide' ).slideToggle(1000);
     });

/*-------------------------
  showlogin toggle function
--------------------------*/
	 $( '#showcat' ).on('click', function() {
        $( '#hidecat' ).slideToggle(900);
     }); 
	
	
 /*--------------------------
   Countdown
---------------------------- */	
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting counting-2">%-D</span>days</div><div class="cdown hours"><span class="counting counting-2">%-H</span>hrs</div><div class="cdown minutes"><span class="counting counting-2">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
        });
    });
 
  
  	   
 
})(jQuery); 