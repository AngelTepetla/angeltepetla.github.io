$(document).ready(
	function(){

	document.getElementById("botonG").onclick = function() { reproduce(); ajusta();};


	var lockers = [608, 609, 610, 612, 613, 614, 615, 616, 618, 619, 620, 622, 623, 624, 625, 626, 627, 628, 629];
	//var lockers = [195, 196, 197, 198];
	var fijo = 610, fijo2 = 620, fijo3 = 625;


	var longitud = lockers.length;
	var min = 0, max = longitud;
	var aleatorio = 0, generado = 0;
	var i = 0, j = 0;
	var datos = [];
	var bandera = 0;
	
    var hiddenElement = document.createElement('a');
    
    var extra;
    var logger = "Locker;" + "Matricula;" + "Paterno;" + "Materno;" + "Nombre;" + "Email;" + "Celular;" + "Intercambio;" + "\n";
    datos[0] = " ;" + "Locker;" + "Matricula;" + "Paterno;" + "Materno;" + "Nombre;" + "Email;" + "Celular;" + "Intercambio;" + "\n";;
    j++;
/*	
	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	  alert("here");
	}

*/

	function reproduce() {
		var audio1 = document.getElementById("audio");
		audio1.play();
		//console.log("Hola");
	}




	//ajusta();
	function ajusta(){
		//alert("hola");

		(async function getIpAddress() {

			const {value: respu} = await swal({
			  title: '¡Cuidado!', 
			  text: '¡Leé bien lo que se te pide a continuación!\nLas instrucciones son bastante claras, si tienes alguna duda, ¡preguntalo!',
			  type: 'info'
			})

			var {value: ipAddress} = await swal({
			  title: 'Ingresa solo tú nombre(s):',
			  input: 'text',
			  text: 'Apellidos no. La primera letra es mayuscula...',
			  inputPlaceholder: 'José Ángel',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return !value && '¡Intentalo de nuevo!'
			  }
			})

			var email_holder;
			var text_holder;
			var activo = 0;

			if(ipAddress == 'Eduardo' || ipAddress == 'eduardo'){
				ipAddress = 'Eduardo';
				nombre = 'Donovan';
				text_holder = 'Donovan Totomoch, jsjsjjajajja :v';
				email_holder = 'totomoch';
				activo = 1;
			}

			else if(ipAddress == 'Marilu' || ipAddress == 'marilu' || ipAddress == 'Marilú' || ipAddress == 'marilú'){
				ipAddress = 'Marilu';
				nombre = 'Marilu';
				text_holder = 'Tepetla';
				email_holder = 'mB.Tepetla';
				activo = 2;
			}


			else{
				text_holder = 'Tepetla';
				email_holder = 'mb'
				nombre = ipAddress;

				activo = 0;
			}


			const {value: apellido} = await swal({
			  title: ipAddress + ', ingresa tú apellido paterno:',
			  input: 'text',
			  text: 'La primera letra es mayuscula...',
			  inputPlaceholder: text_holder,
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return !value && '¡Intentalo de nuevo!'
			  }
			})

			if(apellido == 'susano' || apellido == 'Susano'){
				activo = 3;
			}

			else if(apellido == 'Mendizabal' || apellido == 'mendizabal'){
				activo = 4;
			}

			const {value: materno} = await swal({
			  title: ipAddress + ', ingresa tú apellido materno:',
			  input: 'text',
			  text: 'La primera letra es mayuscula...',
			  inputPlaceholder: 'Hernández',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return !value && '¡Intentalo de nuevo!'
			  }
			})


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
*/			  
			})


			const {value: correo} = await swal({
			  title: ipAddress + ', ingresa tú email:',
			  input: 'email',
			  inputPlaceholder: nombre + '@' + email_holder + '.com',
			  showCancelButton: false
			})


			const {value: celular} = await swal({
			  title: ipAddress + ', ingresa tú número de celular:',
			  input: 'number',
			  text: 'Número de 10 digitos...',
			  inputPlaceholder: '2225332044',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return !value && '¡Intentalo de nuevo!'
			  }
			})


			// inputOptions can be an object or Promise
			const inputOptions = new Promise((resolve) => {
			  setTimeout(() => {
			    resolve({
			      'Si': 'Si',
			      'No': 'No'
			    });
			    var audio2 = document.getElementById("audio");
				audio2.play();
			  }, 2000)
			})

			const {value: respuesta} = await swal({
			  title: '¿Participaras en el intercambio de Diciembre?',
			  input: 'radio',
			  type: 'info',
			  inputOptions: inputOptions,
			  inputValidator: (value) => {
			    return !value && 'Debes seleccionar una opción!'
			  }
			})
			

			if(respuesta == 'Si'){
				var tituloI = '¡Genial!';
				var textoI = 'Las parejas de intercambio se asignaran despues :D .';
				var tipoI = 'success';

				var audio1 = document.getElementById("audio_05");
				audio1.play();
			}
			else{
				var tituloI = ':(';
				var textoI = 'Tal vez despues cambies de opinión...';
				var tipoI = 'warning';

				var audio1 = document.getElementById("audio_04");
				audio1.play();
			}

			setTimeout(function(){
				swal({
					title: tituloI,
					width: 600,
					text: textoI,
					type: tipoI
				})
			}, 10);
			




			

			
			var color = ['#43A047', 'orange', '#D32F2F', '#D81B60', '#141414', '#304FFE'];
			var nombre;
			if(activo == 1){
				ipAddress = 'Donovan';
				nombre = 'Eduardo';

				max = lockers.length;
				aleatorio = Math.random() * (max - min) + min;
				aleatorio = Math.floor(aleatorio);
				
				var pos = lockers.indexOf(fijo);
				var pos1 = lockers.indexOf(fijo2);
				var pos2 = lockers.indexOf(fijo3);
				var tamy = lockers.length;

				color[i] = '#43A047';

				while(aleatorio == pos || aleatorio == pos1 || aleatorio == pos2){
					aleatorio = Math.random() * (max - min) + min;
					aleatorio = Math.floor(aleatorio);
				}
				
				var indexado = lockers[aleatorio];
				var eliminado = lockers.splice(aleatorio, 1);
			}

			else if(activo == 2){
				ipAddress = 'Marilu';
				nombre = 'Marilu';

				var pos = lockers.indexOf(fijo);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo;
				aleatorio = fijo;

				color[i] = '#D81B60';

			}

			else if(activo == 3){

				var pos = lockers.indexOf(fijo2);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo2;
				aleatorio = fijo2;

				color[i] = 'orange';

			}

			else if(activo == 4){

				var pos = lockers.indexOf(fijo3);
				eliminado = lockers.splice(pos, 1);
				indexado = fijo3;
				aleatorio = fijo3;

				color[i] = '#D81B60';

			}


			//else if(activo == 0 || activo == 1){
			else{
				nombre = ipAddress;


				max = lockers.length;
				aleatorio = Math.random() * (max - min) + min;
				aleatorio = Math.floor(aleatorio);

				var pos = lockers.indexOf(fijo);
				var pos1 = lockers.indexOf(fijo2);
				var pos2 = lockers.indexOf(fijo3);
				var tamy = lockers.length;

				if(tamy > 3){
					while(aleatorio == pos || aleatorio == pos1 || aleatorio == pos2){
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

	 		i++;
	 		var longy = color.length;


	 		console.log("#" + indexado + " asignado a " + ipAddress);
	 		var cadena = "#" + indexado + " asignado a " + ipAddress;
	 		
	 		//logger = logger + indexado + " ;" + matricula + " ;" + apellido + " ;" + materno + " ;" + ipAddress + " ;" + correo + " ;" + celular + " ;" + respuesta + "\n";
			loggery = " ;" + indexado + " ;" + matricula + " ;" + apellido + " ;" + materno + " ;" + ipAddress + " ;" + correo + " ;" + celular + " ;" + respuesta + "\n";
	 		extra = cadena + "\n";
	 		datos[j] = loggery;
	 		j++;


	 		if(i==longy){
	 			i = 0;
	 			

	 		}


		    

	 		var x = document.createElement("li");
	 		x.setAttribute("class", "nol"); // added line
		    var t = document.createTextNode(cadena);
		    x.appendChild(t);
		    document.getElementById("lista_nuevos").appendChild(x);


		    setTimeout(function() {
				swal({
					title: '¡' + nombre + '!' + ' Tú nuevo locker es el:\n#' + indexado,
					width: 600,
					type: 'success',
					text: 'Los datos son para el registro en dirección, y los usare según se requieran en otras actividades. ¡Verificalos!',
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
	 		







	 		var restantes = lockers.length;

			if(ipAddress){}
				
			else{
				ipAddress = "entusiasta";
			}
			//alert("hola" + " " + ipAddress);
				var my_cliente = document.getElementById("cliente");

				setTimeout(function() {
					my_cliente.innerHTML = "¡Hola " + ipAddress + "! " + "Tú locker es el #" + indexado;
					document.getElementById("botonG").innerHTML = "Generar, " + restantes;

					var audio1 = document.getElementById("audio_02");
					audio1.play();
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