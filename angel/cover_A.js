$(document).ready(function(){

	var height = $(window).height();

	ajustesIni();

	function ajustesIni(){
		$("section#scroll").css({"margin-top": height - 80 + "px"});
	}

	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if (scrollTop < height){
			$("section#imagen").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});
		}


	})


	 // Get the id of the <path> element and the length of <path>
      var triangle = document.getElementById("triangle");
      var length = triangle.getTotalLength() * 1;

      // The start position of the drawing
      triangle.style.strokeDasharray = length;

      // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
      triangle.style.strokeDashoffset = length;

      // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
      window.addEventListener("scroll", myFunction);

      function myFunction() {
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        var draw = length * (scrollpercent / 2) + 0;

        // Reverse the drawing (when scrolling upwards)
        triangle.style.strokeDashoffset = length - (draw);
      }


});
