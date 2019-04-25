$(document).ready(
	function(){


	ajusta();

	function ajusta(){

		

		contenedor_prin = document.getElementById("photos");
		texto_contenedor = document.getElementById("activo");
		
		//document.getElementById("cont2").style.height = auto;

		var altura = texto_contenedor.offsetHeight;
		var dato = innerWidth;

		if(dato > 970){
			contenedor_prin.style.height = altura + "px";
			document.getElementById("photos2").style.height = altura + "px";
			document.getElementById("photos3").style.height = altura + "px";
			document.getElementById("photos4").style.height = altura + "px";
			document.getElementById("inactivo").style.height = altura + "px";

		}
		else{
			altura = 200;
			contenedor_prin.style.height = altura + "px";
			document.getElementById("photos2").style.height = altura + "px";
			document.getElementById("photos3").style.height = altura + "px";
			document.getElementById("photos4").style.height = altura + "px";
			document.getElementById("inactivo").style.height = altura + "px";
		}
	
	} // ajusta



	}
);
