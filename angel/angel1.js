$(document).ready(function(){


	var bandera = 0;
	var cuenta = 0;

	document.getElementById("desencadenador").onmouseover = function(){ mouseOver() };
	document.getElementById("desencadenador").onmouseout = function(){ mouseOut() };


	document.getElementById("desencadenador1").onmouseover = function() { funciona() };


	function funciona(){ 
		document.getElementById("desencadenador1").id = "hello"};


	function mouseOver() {
		bandera = 1;


		if(bandera == 1 && cuenta < 3){
			document.getElementById("activo_1").style.width = "100%";
		}
		else{
			document.getElementById("activo_1").style.width = "60%";
			cuenta = 0;
		}
		cuenta++;

		document.getElementById("text22").id = "hola";
	    
	}

	function mouseOut() {
	    bandera = 0;

	}

	



});
