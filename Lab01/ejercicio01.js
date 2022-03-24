function numeroMayor(a,b,c){
    
    if(a>b && a>c){
        console.log("El número mayor es: " + a);
    }else if (b>a && b>c){
        console.log("El número mayor es: " + b);
    }else{
        console.log("El número mayor es: " + c);
    }

}

let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));
let numero3 = Number(prompt("Ingrese el tercer número"));

console.log(numeroMayor(numero1,numero2,numero3));
