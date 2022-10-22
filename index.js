// console.log("Hola Mundo con node js. ")


let pelicula = {
    nombre: "Sonrie"
}


// console.log(pelicula.nombre);

// pelicula.nombre = "Viernes 13";

// console.log(pelicula.nombre);


/*setTimeout(verMensaje, 2000);

function verMensaje(){

    console.log("Soy el mensaje");
}


setTimeout(() => {
    verMensaje();
}, 2000);*/

var controlTiempo = false;

function testPromesa(){
    var promesa = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(pelicula)
        }, 1000)
    });
    console.log("Estoy haciendo mas procesos");
    return promesa

}


testPromesa().then((response)=> {
    controlTiempo =true;
   console.log("La promesa respondio")
    console.log(response);
}).catch((error) => {
    controlTiempo =true;
    console.log("La promesa no respondio")
    console.log(error);
});


imprimirContador();
function imprimirContador(){
    while(!controlTiempo){
        console.log("La promesa aun no se cumple");
    }
}


