var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  console.log(offset);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [-642, 50],
    duration: 2700,
    delay: 0,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}



$(document).ready( function iniciar(){
	

	console.log("inicioo!");

	console.log( window.innerWidth );
	console.log( window.innerHeight );

} );


/*
var triangle = document.getElementById("triangle");
var incColor = 0;

// Get the id of the <path> element and the length of <path>
var length = triangle.getTotalLength() * 1;
console.log(length);
*/




/*
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  console.log(offset);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

*/