/*//actividad 1
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);

/*Respuesta: Imprime 5 numeros 
y en la posicion 0 se remplaza el 1 por el 10 y en la posicion 2 remplaza el 3 por el 30 
[10,2,30,4,5]*/

/*//actividad 4
let numero = [10, 2, 4, 3, 7];
function sumarPares(numeros) {
  let suma = 0;
  for (let t = 0; t < numeros.length; t++) {
    if (numeros[t] % 2 === 0) {
      suma = suma + numeros[t];
    }
    console.log(suma);
    t++;
  }
}*/
/*//actividad 3
sumarPares(numero);

let palabras = ["juego", "casa", "mesa"];
function terminanEnA(words) {
  const todosTerminanEnA = words.every((word) => word.endWith("a"));
  console.log(todosTerminanEnA);
}

terminanEnA(palabras);
*/
//array vacio 1, hacer for con todos los numbers, y dentro del for declarar variable que almacena dato absoluto de la posicion y ese dato se pushea al array vacio creado, en el return final realizar sort().
//actividad 5:
/*let numeros = [-2, 5, -6, 3, -10];
let Numeritos = [];
function sortAbsoluteNumbers(numbers) {
  for (let number of numbers) {
    const numerosEnteros = Math.abs(number);
    Numeritos.push(numerosEnteros);
  }
  return Numeritos.sort(function (a, b) {
    return a - b;
  });
}
console.log(sortAbsoluteNumbers(numeros));*/

//actividad 6:
/*const words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];
const word = "pepito";

function buscaPalabras(words, word) {
  let palabrasLargas = [];
  const posicionPalabrita = words.indexOf(word);
  console.log(posicionPalabrita);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > posicionPalabrita) {
      palabrasLargas.push(words[i]);
    }
  }
  return palabrasLargas;
}
console.log(buscaPalabras(words, word));
*/

//actividad objetos 1:

function createObject(name, subs) {
  const obj = {
    name,
    subs,
    hash: name.length * subs,
    getStatus: function () {
      return `el canal ${name} tiene ${subs}`;
    },
  };
  return obj;
}

const personitas = createObject("rulorolando", 2);
console.log(personitas.hash);
