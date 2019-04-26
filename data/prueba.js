

var texto = document.getElementById("nombre");
var texto_yo = document.getElementById("tipo_yo");

        //my_cliente.innerHTML = "¡Hola " + ipAddress + ", " + "me alegra tenerte aquí!";

/*
var tipo = ["angel", "david", "meloso", "abogado"];
var caracteres = ["a", "n", "g", "e", ""];
var conta = 0;
*/


/*
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



}*/


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



function palabra2(wordy){

    var tamy22 = wordy.length;
    caracteres22 = wordy.split('');
    var inc22 = 0;
    conta22 = 0;
    var letra22 = caracteres22[conta22];
    var aux22 = 1;


    var cuenta22 = setInterval(function incremento2() {
        inc22 = inc22 + 0.2;

        if(aux22 >= tamy22){
            clearInterval(cuenta22);
        }

        texto_yo.innerHTML = letra22;
        letra22 = letra22 + caracteres22[aux22];
        aux22++;
    }, 100);
}

//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
var cadenas = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];
var tipos = ["mecatrónicos", "programadores", "ingenieros", "empresarios", "personajes", "innovadores"];


var contaAux = 0;
function textos(){
    palabra( cadenas[contaAux] );
    //palabra2( tipos[contaAux] );
    contaAux++;
    var tama = cadenas.length;
    if (contaAux >= tama){
        contaAux = 0;
    }

}

function textos33(){
    palabra2( tipos[contaAux] );
}

/*
for(var i = 0; i<10; i++){
    console.log('hola' + i);
    //texto.innerHTML = "Me llamo" + i;
    //set.setTimeout(function() {}, 10);
}
*/

setInterval(textos, 3000);
setInterval(textos33, 4000);
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







/*
var tras2 = 0;
var tras2neg = -100;
*/
function loopy(){
    var tras2 = 0;
    var tras2neg = -100;

    var parrafo = document.getElementById("tepetla");
    var in_1 = document.getElementById("inactivo_1");
    //cuadro.style.visibility = "hidden";

    parrafo.visibility = "visible";
    in_1.visibility = "hidden";

    var cuenta3 = setInterval(function incremento3() {
        //console.log(inc + "inc");
        tras2 = tras2 + 5;

        if(tras2 >= 30){
            clearInterval(cuenta3);
            parrafo.style.visibility = "hidden";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        parrafo.style.transform = "translateY(" + tras2 + "px)";
    }, 30);
    in_1.style.visibility = "visible";


    var cuenta4 = setInterval(function incremento4() {
        //console.log(inc + "inc");
        tras2neg = tras2neg + 25;

        if(tras2neg >= 0){
            clearInterval(cuenta4);
            parrafo.style.visibility = "hidden";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        in_1.style.transform = "translateY(" + tras2neg + "px)";
    }, 40);

    in_1.style.transform = "translateY(0px)";

    in_1.id = "tepetla";
    parrafo.id = "inactivo_1";

};


//var cadenas = ["Meloso", "Ángel", "Gato", "Raspberry", "Ardilla", "abogado"];
var palabras = ["PROGRAMACIÓN", "ROBÓTICA", "TECNOLOGÍA", "ELECTRÓNICA", "INNOVACIÓN", "INGENIERÍA"];
var contaAux2 = 0;

function textos2(){
    /*
    loopy( palabras[contaAux2] );
    contaAux++;
    var tama = cadenas.length;
    if (contaAux >= tama){
        contaAux = 0;
    }*/
    loopy();

}

setInterval(textos2, 4000);
//setInterval(off, )



















/*
var parrafo = document.getElementById("tepetla");
parrafo.onmouseover=
*/



/*
document.getElementById("tepetla").onmouseover = function(){ abajo() };
document.getElementById("tepetla").onmouseout = function(){ arriba() };

var tras2 = 0;
var bandera = 0;
function abajo(){
    var parrafo = document.getElementById("tepetla");
    var cuenta3 = setInterval(function incremento3() {
        //console.log(inc + "inc");
        tras2 = tras2 + 70;

        if(tras2 >= 400){
            clearInterval(cuenta3);
            parrafo.style.visibility = "visible";
        }

        ///cuadro.style.opacity = opa;
        //texto.innerHTML = tipo[conta];
        //letra = letra + tipo[aux];
        parrafo.style.transform = "translateY(" + tras2 + "px)";
    }, 25);
    bandera = 1;
}

//var tras2 = 0;
function arriba(){
    if(bandera == 1) {
        var parrafo = document.getElementById("tepetla");
        var cuenta3 = setInterval(function incremento3() {
            //console.log(inc + "inc");
            tras2 = tras2 - 70;

            if(tras2 <= 0){
                clearInterval(cuenta3);
                parrafo.style.visibility = "visible";
            }

            ///cuadro.style.opacity = opa;
            //texto.innerHTML = tipo[conta];
            //letra = letra + tipo[aux];
            parrafo.style.transform = "translateY(" + tras2 + "px)";
        }, 25);
    }

}
*/
