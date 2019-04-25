$(document).ready(
	function(){

	contenedor_prin = document.getElementById("cont_principal");
	texto_prin = document.getElementById("texto_principal");
	
	var altura = texto_principal.offsetHeight;
	var dato = innerWidth;

	if(dato > 970){
		contenedor_prin.style.height = altura + "px";
	}
	else{
		var extra = document.getElementById("img_yo").offsetHeight;
		contenedor_prin.style.height = altura + extra + 45 +"px";
	}
	



	}
);
