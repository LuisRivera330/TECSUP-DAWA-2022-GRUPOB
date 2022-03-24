let contador = 1;

while(contador<=50){
    if(contador % 7 == 0 && contador % 2 !== 0 && contador % 3 !== 0 && contador % 5 !== 0) {
        console.log(contador);
    }
    contador = contador + 1;
}