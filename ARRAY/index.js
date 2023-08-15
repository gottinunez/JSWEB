//actividad 1
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);

/*Respuesta: Imprime 5 numeros 
y en la posicion 0 se remplaza el 1 por el 10 y en la posicion 2 remplaza el 3 por el 30 
[10,2,30,4,5]*/

//actividad 4
let numero = [10, 2, 4, 3, 7];
function sumarPares(numeros) {
  let suma = 0;
  for (let t = 0; t < numero.length; t++) {
    if (numeros[t] % 2 === 0) {
      suma = suma + numeros[t];
    }
    console.log(suma);
    i++;
  }
}
//actividad 3
sumarPares(numero);

let palabras = ["juego", "casa", "mesa"];
function terminanEnA(words) {
  const todosTerminanEnA = words.every((word) => word.endWith("a"));
  console.log(todosTerminanEnA);
}

terminanEnA(palabras);
