var sliders = new Array();
window.onload = function() {
  var options = {
    transitionTime:400,
    touchTransitionTime:200
  };
  var slidersElements = document.querySelectorAll('.slider');

  for(var i = 0 ; i < slidersElements.length ; i++) {
    sliders.push( new simpleCarousel(i,slidersElements[i],options) );
  }
  for(var i = 0; i < sliders.length; i++) {
    sliders[i].initialize();
  }
}