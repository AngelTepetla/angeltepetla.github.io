$(document).ready(
	function(){

	document.getElementById("botonG").onclick = function() { reproduce(); ajusta();};

	document.getElementById("botonAdd").onclick = function() { adder(); };


	var lockers = ['Jorge Alberto', 'José Manuel', 'Diana Margarita', 'Flor Ivón', 'José Armando', 'Javier', 'Edilberto', 'Gustavo', 'José Luis', 'Juan Carlos', 'Juan Pablo', 'Aarón', 'Donovan Totomoch', 'Bryan', 'Orlando Uriel', 'Andrés', 'José Mauricio', 'José Antonio', 'David Israel'];
	//var lockers = ['A', 'B', 'C', 'D', 'E'];
	var fijo = 'Ángel Tepetla', fijo2 = 'Marilú';


	var longitud = lockers.length;
	var min = 0, max = longitud;
	var aleatorio = 0, generado = 0;
	var i = 0, j = 0;
	var datos = [];
	var bandera = 0;
	var km = 0;

				var titulo = '¿Iniciar?';
				var completar = 'Chocolate Sin:';

    var hiddenElement = document.createElement('a');

    var extra;
    var logger = "Recibe;" + "entregaMatricula;" + "entregaNombre;" + "\n";
    datos[0] = " ;" + "Recibe;" + "entregaMatricula;" + "entregaNombre;" + "\n";;
    j++;
/*
	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	  alert("here");
	}

*/

	function reproduce() {
		var audio1 = document.getElementById("audio_02");
		audio1.play();
		//console.log("Hola");
	}

	function adder() {
		var people = prompt("Ingresa alguna info", "Info");
		var newLength = lockers.push(people);
	}


	//ajusta();
	function ajusta(){
		//alert("hola");

		(async function getIpAddress() {


			var {value: respu} = await swal({
			  title: titulo,
			  type: 'question',
			  confirmButtonColor: 'pink',
			  showCancelButton: true,
			  cancelButtonText: `No, bye!`,
			  confirmButtonText: 'Si'
			})
			//console.log(respu)
			if (respu)
			{
				//swal('I did not get your favorite color because "${result.dismiss}".')
				reproduce();
				
			}
			else
			{
				swal({
					text: `Bye!...`,
					confirmButtonColor: 'pink'
				})
				var audio1 = document.getElementById("audio_04");
				audio1.play();
				setTimeout(function() {
					window.location.href = "https://www.google.com.mx";
				}, 1500);
				return
			}

			var {value: ipAddress} = await swal({
			  title: 'Just...',
			  input: 'text',
			  text: completar,
			  inputPlaceholder: 'Complete the phrase',
			  showCancelButton: false,
			  confirmButtonColor: 'pink',
			  confirmButtonText: 'Aceptar',
			  inputValidator: (value) => {
			  	if (!value)
			  	{
			  		var audio1 = document.getElementById("audio_04");
				audio1.play();
			  	}
			    return !value && '¡Intentalo de nuevo!'
			  }
			})

			var email_holder;
			var text_holder;
			var activo = 0;


			text_holder = 'Tepetla';
			email_holder = 'mb'
			nombre = ipAddress;

			activo = 0;
			matricula = 0;

/*

			const {value: matricula} = await swal({
			  title: ipAddress + ', ingresa tú matricula:',
			  input: 'number',
			  text: 'Número de 10 digitos...',
			  inputPlaceholder: '1631110970',
			  showCancelButton: false
/*
			  inputAttributes: {
			    maxlength: 10,
			    autocapitalize: 'off',
			    autocorrect: 'off'
			  }

			})
*/

			if(nombre.toLowerCase() == 'nutella'){
				ipAddress = 'Ángel';
				nombre = 'Developer';
				activo = 2;

				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++;
				
				completar = 'Estudiaste:';

			}
			else if(nombre.toLowerCase() == 'biotecnologia' || nombre.toLowerCase() == 'biotecnología'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++; 

				completar = 'C_w:';

			}
			else if(nombre.toLowerCase() == 'caw'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++; 

				completar = 'Helado o nieve?:';

			}
			else if(nombre.toLowerCase() == 'nieve'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++; 

				completar = 'Me odias?:';

			}
			else if(nombre.toLowerCase() == 'no' || nombre.toLowerCase() == 'si'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++; 

				completar = 'O__t__:';

			}
			else if(nombre.toLowerCase() == 'ojitos'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(x.length);
				
				x[km].style.opacity = "1";
				km++; 

				completar = 'C_l___z_:';

			}
			else if(nombre.toLowerCase() == 'calabaza'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden_last");
				console.log(km);
				
				x[0].style.opacity = "1";
				km=0; 

				titulo = 'Thank U';
				completar = 'Pensaba que..., pero me pusieron la:';

			}
			else if(nombre.toLowerCase() == 'cancion' || nombre.toLowerCase() == 'canción'){
				var audio1 = document.getElementById("audio_05");
				audio1.play();

				titulo = '¿Continuar?';
				var x = document.getElementsByClassName("op_hidden");
				console.log(km);
				
				for(km = 0; km<x.length; km++){
					x[km].style.opacity = "1";
				}
				var x = document.getElementsByClassName("op_hidden_last");
				x[0].style.opacity = "1";

				titulo = 'Si llegaste hasta aqui, thank U...';
												completar = '...';


			}
			else{
				ipAddress = '';
				nombre = '';
				activo = 2;

				var audio1 = document.getElementById("audio_04");
				audio1.play();
			}







			var color = ['#43A047', 'orange', '#D32F2F', '#D81B60', 'pink', '#eb3593'];
			var nombre;

			if(activo == 2){


				var pos = lockers.indexOf(fijo2);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo2;
				aleatorio = fijo2;

				//color[i] = '#43A047';

			}

			else if(activo == 3){

				var pos = lockers.indexOf(fijo);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo;
				aleatorio = fijo;

				//color[i] = '#D81B60';

			}


			//else if(activo == 0 || activo == 1){
			else{
				nombre = ipAddress;


				max = lockers.length;
				aleatorio = Math.random() * (max - min) + min;
				aleatorio = Math.floor(aleatorio);

				var pos = lockers.indexOf(fijo);
				var pos1 = lockers.indexOf(fijo2);
				var tamy = lockers.length;

				if(tamy > 2){
					while(aleatorio == pos || aleatorio == pos1){
						aleatorio = Math.random() * (max - min) + min;
						aleatorio = Math.floor(aleatorio);
					}
				}

				var indexado = lockers[aleatorio];
				var eliminado = lockers.splice(aleatorio, 1);
			}



			if(ipAddress == 'developer'){
				indexado = 0;

				hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(datos);
			    hiddenElement.target = '_blank';
			    hiddenElement.download = 'lockers.csv';
			    hiddenElement.click();

			}


	 		// alert("here");

	 		var contenedor = document.getElementById("contenedor_principal");
	 		contenedor.style.backgroundColor = color[i];
	 		console.log(i);
	 		var longy = color.length;

	 		var cadena = "#" + indexado + " recibira de  " + ipAddress;

	 		//logger = logger + indexado + " ;" + matricula + " ;" + apellido + " ;" + materno + " ;" + ipAddress + " ;" + correo + " ;" + celular + " ;" + respuesta + "\n";
			loggery = " ;" + indexado + " ;" + matricula  + ";" + ipAddress + "\n";
	 		extra = cadena + "\n";
	 		datos[j] = loggery;
	 		j++;
	 		i++;

	 		if(i==longy){
	 			i = 0;


	 		}


/*

		    setTimeout(function() {
				swal({
					title: '¡' + nombre + '!' + ' Tú regalo será \n para:\n\n' + indexado,
					width: 600,
					type: 'success',
					padding: '3em',
					background: '#fff',
					backdrop: `
						rgba(0,0,123,0.4)
						url("./angel/nyan-cat.gif")
						center left
						no-repeat
						`
				})

		    }, 2500);
*/







	 		var restantes = lockers.length;

			if(ipAddress){}

			else{
				ipAddress = "entusiasta";
			}
			//alert("hola" + " " + ipAddress);
				var my_cliente = document.getElementById("cliente");
				var my_cnt = document.getElementById("clie");
				my_cnt.style.textAlign = "center";

				setTimeout(function() {
					//my_cliente.innerHTML = "¡Hola " + ipAddress + "! " + "Tú regalo es para: <br> " + indexado + "<br><br>";
					document.getElementById("botonG").innerHTML = "Continuar";



					//var audio1 = document.getElementById("audio_02");
					//audio1.play();
				}, 2500);




		})()




	} // ajusta







	} // funcion
); // document





/*

(async function getIpAddress () {


const {value: ipAddress} = await swal({
  title: 'Ingresa tu nombre:',
  input: 'text',
  showCancelButton: true,
  inputValidator: (value) => {
    return !value && '¡Intentalo de nuevo!'
  }
})







	if(ipAddress){}

	else{
		ipAddress = "entusiasta";
	}
//alert("hola" + " " + ipAddress);
		var my_cliente = document.getElementById("cliente");
		var mouse1 = document.getElementById("mouse_1");
		var mouse2 = document.getElementById("mouse_2");

		my_cliente.innerHTML = "¡Hola " + ipAddress + ", " + "me alegra tenerte aquí!";

		mouse1.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";
		mouse2.innerHTML = "¡" + ipAddress + " mueve el mouse sobre la imagen y el texto!";




})()



*/
