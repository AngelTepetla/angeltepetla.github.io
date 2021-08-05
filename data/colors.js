/*
new fullpage('#fullpage', {
  sectionsColor: ['#1d88dc'],
  
});
*/
new fullpage('#fullpage', {
	sectionsColor: ['#1bbc9b', '#4BBFC3', '#1c1c1c']
});



var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  console.log(offset);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [-1239, 1239],
    duration: 3700,
    delay: 0,
    loop: true,
    direction: 'reverse',
    easing: 'easeInOutSine',
    autoplay: true
  });
}



$(document).ready( function iniciar(){
	

	console.log("inicioo!");

	console.log( window.innerWidth );
	console.log( window.innerHeight );

} );


//#C0C0C0
//new fullpage('#fullpage', {
 // sectionsColor: ['#1d88dc', 'white', '#C0C0C0', 'orange'],
//});
