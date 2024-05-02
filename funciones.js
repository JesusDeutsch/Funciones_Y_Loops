// /* 1.- Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo.
//  Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3. Puedes usar prompts para los datos (opcional) y
//   la consola del navegador para comprobar el resultado. */

let sideA = parseFloat(prompt("Ingrese la base del rectangulo"));
let sideB = parseFloat(prompt("Ingrese la altura del rectangulo"));
const a = 5;
const b = 3;

  if (isNaN(sideA)) {
    alert ('El caracter ingresado no es un numero')    
  }
  if (isNaN(sideB)) {
    alert ('El caracter ingresado no es un numero')    
  }
  
  function sidesOfRectangle(a,b) {
      const result = a*b;
        return result

  }
   console.log(sidesOfRectangle(sideA,sideB))


// /*2.- Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit. */

let degreesCelsius = parseFloat(prompt("Ingrese los grados en Celsius para convertirlos en grados Fahrenheit"));

  if (isNaN(degreesCelsius)) {
      alert ('El caracter ingresado no es un numero')};

      function conversion(a) {
        const result = ((a*9)/5)+32;
        return result
      }
      console.log(conversion(degreesCelsius, ' Grados Fahrenheit'));

// /*3.- Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números.
// Para ello, tendrás que descubrir cómo funciona el método Math.random(). */

let value1 = parseFloat(prompt("Ingrese el primer numero"))
let value2 = parseFloat(prompt("Ingrese un segundo numero"))

if (isNaN(value1)) {
    alert ('El caracter ingresado no es un numero')  
}

if (isNaN(value2)) {
  alert ('El caracter ingresado no es un numero')  
}

function randomNumber (min,max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(randomNumber(value1,value2));

/*4.- Escribe una función que calcule el área de un círculo si se le proporciona el radio. */

let radio = parseFloat(prompt("Ingrese el radio del circulo"))

function areaCircle(radio) {
  return  Math.PI.toFixed(2) * (radio**2);  
}
console.log(areaCircle(radio));

/*5.- Escribe una función que te adivine el futuro. Recibirá como parámetros:
-Número de hijos.
-Nombre de la pareja.
-Nombre de una ciudad.
-Un trabajo. 
La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>,
y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello. */

let work = ["Desarrollador","Cocinero","Ingeniero","Instalador","Coordinador Logistico"];
let city = ["Madrid","Barcelona","Sevilla","Valencia","Maracaibo"];
let children  = ["1","2","3","4","5"];
let couple = ["Maria","carla","daniela","Elena","Valeria"];



function fortuneTeller(a,b,c,d) {
  
  let workAssigned = Math.floor(Math.random()*work.length)
  let cityLiving = Math.floor(Math.random()*city.length)
  let numberChildren = Math.floor(Math.random()*children.length)
  let nameCouple = Math.floor(Math.random()*couple.length)
      return console.log(`Trabajaras en ${city[cityLiving]}, trabajando como ${work[workAssigned]}, y tendras ${children[numberChildren]} hijo/s con ${couple[nameCouple]}`);
}
console.log(fortuneTeller());