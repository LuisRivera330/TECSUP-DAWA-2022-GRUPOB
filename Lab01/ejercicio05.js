function ModificacionArreglo(){

let cantidad = +prompt("Ingrese la cantidad de datos para el Array");

let arreglo = [];

for(let i = 0; i < cantidad; i++){
    arreglo.push(+prompt("Numero " + (i+1)));
}

let desplazamiento = +prompt("Cantidad de desplazamientos: ");

for (var i = 0; i < desplazamiento; i++){
    var ultimo = arreglo.shift();
    arreglo.push(ultimo)
}
console.log(arreglo);

}

console.log(ModificacionArreglo());