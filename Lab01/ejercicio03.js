const CalcularComision = (venta) => {
    var comision;
    if(venta <= 150){
        comision = 0;
    }else if (venta > 150 &&  venta <= 400){
        comision = venta * 0.1;
    }else{
        comision = 50 + (venta * 0.09);
    }
    return comision;
}
let total = Number(prompt("Ingrese el monto vendido: "));
console.log("La comision es : " + CalcularComision(total));