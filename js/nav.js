// Hack to get nav bar to close after clicking link in nav bar
jQuery(document).ready(function($){
	$('#navbarSupportedContent').prepend('<div id="menu-icon">Menu</div>');
	$("#menu-icon").on("click", function(){
		$("#navbarSupportedContent").slideToggle();
		$(this).toggleClass("active");
	});
    $('#navbarSupportedContent li a').on("click", function(){
        $('#navbarSupportedContent').slideUp();
    });
});