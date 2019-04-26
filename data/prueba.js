

var texto = document.getElementById("nombre");

        //my_cliente.innerHTML = "¡Hola " + ipAddress + ", " + "me alegra tenerte aquí!";

var tipo = ["angel", "david", "meloso", "abogado"];
var caracteres = ["a", "n", "g", "e", ""];
var conta = 0;

function cambia(){

    var inc = 0;

    var cuenta = setInterval(function incremento() {
        //console.log(inc + "inc");
        inc = inc + 0.2;

        if(inc >= 1){
            clearInterval(cuenta);
        }


        texto.style.opacity = inc;
        texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
    }, 100);



    //texto.style.opacity = 0.1;
    //texto.innerHTML = tipo[conta];
    console.log('conta' + conta);
    conta++;

    if(conta >= 4){
        conta = 0;
    }



}

/*
function palabra(){

    var inc = 0;
    conta = 0;
    var letra = caracteres[conta];
    var aux = 1;


    var cuenta = setInterval(function incremento() {
        //console.log(inc + "inc");
        inc = inc + 0.2;

        if(inc >= 1){
            clearInterval(cuenta);
        }


        //texto.style.opacity = inc;
        texto.innerHTML = letra;
        letra = letra + caracteres[aux];
        aux++;
    }, 500);



    //texto.style.opacity = 0.1;
    //texto.innerHTML = tipo[conta];
    console.log('conta' + conta);
    conta++;

    if(conta >= 4){
        conta = 0;
    }



}
*/

function palabra(word){

    var tamy = word.length;
    //word = word + "";
    caracteres = word.split('');
    var inc = 0;
    conta = 0;
    var letra = caracteres[conta];
    var aux = 1;

    ////console.log(tamy);

    var cuenta = setInterval(function incremento() {
        //console.log(inc + "inc");
        inc = inc + 0.2;

        if(aux >= tamy){
            clearInterval(cuenta);
        }


        //texto.style.opacity = inc;
        texto.innerHTML = letra;
        //console.log(aux);
        letra = letra + caracteres[aux];
        aux++;
    }, 100);



    //texto.style.opacity = 0.1;
    //texto.innerHTML = tipo[conta];
    ////console.log('conta' + conta);


}

//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
var cadenas = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];

var contaAux = 0;

function textos(){
    palabra( cadenas[contaAux] );
    contaAux++;
    var tama = cadenas.length;
    if (contaAux >= tama){
        contaAux = 0;
    }

}

for(var i = 0; i<10; i++){
    console.log('hola' + i);
    //texto.innerHTML = "Me llamo" + i;
    //set.setTimeout(function() {}, 10);
}

setInterval(textos, 3000);
//setInterval(off, )


var tras = 0;
setTimeout(function firma(){
    var cuadro = document.getElementById("firma_yo");
    //cuadro.style.visibility = "hidden";


    var cuenta2 = setInterval(function incremento2() {
        //console.log(inc + "inc");
        tras = tras + 70;

        if(tras >= 1000){
            clearInterval(cuenta2);
            cuadro.style.visibility = "hidden";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        cuadro.style.transform = "translateY(" + tras + "px)";
    }, 25);


}, 500);

/*

setTimeout(function firma(){
    var cuadro = document.getElementById("firma_yo");
    //cuadro.style.visibility = "hidden";

    cuadro.style.transform = "translateY(900px)";
    var cuenta2 = setInterval(function incremento() {
        //console.log(inc + "inc");
        opa = opa - 0.05;

        if(opa <= 0){
            clearInterval(cuenta2);
        }

        cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
    }, 25);


}, 2000);
*/
