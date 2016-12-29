$('document').ready(function() {

//Creat first lightbox

var buildLightbox = function(){
	$('body').append('<div id="lightbox">' + '<img src="' + imgUrl + '">' + '</div>');
};

//Disable scroll when lightbox is active
var disableScroll = function() {
	$('body').css('overflow','hidden');
};

var enableScroll = function() {
	$('body').css('overflow','scroll');
}

//Trigger lightbox when you click on an image

$('.trigger > img').on('click', function(){

	// console.log("image clicked");
	// console.log($(this).attr('src'));

	imgUrl = $(this). attr('src');
	disableScroll();

	if($('#lightbox').length > 0) {

		//Replace last image url shown with newer one
		$('#lightbox').find('img').attr('src', imgUrl);

		//Show updated lightbox that was hidden
		$('#lightbox').show();
	} else {
		buildLightbox();
	}

});

//Hide lightbox

$('body').on('click', '#lightbox', function(){
	$('#lightbox').hide();
});



});