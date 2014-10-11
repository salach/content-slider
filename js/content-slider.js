window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           function(callback) {
            window.setTimeout(callback, 1000 /60);
           };

})();
function selectStep(n) {
	if(n==1) {
		$('.progress-active').animate({marginLeft: '2px';}, 300);
	}
	else if (n==2){
		$('.progress-active').animate({marginLeft: '90px';}, 300);
	}
	else if (n==3){
		$('.progress-active').animate({marginLeft: '180px';}, 300);
	}
	else if (n==4){
		$('.progress-active').animate({marginLeft: '272px';}, 300);
	}

}
jQuery(window).scroll(function() {        
    selectStep();         
});