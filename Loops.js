/*1.- 
        1.1.- Itera del 0 al 10 usando un bucle "for" e imprime cada número por consola.
        1.2.-  Haz lo mismo con un bucle "while".
        1.3.- Haz lo mismo del 83 al 24 (bucle "for" y bocle "while"). */

let start = 0;

for (start = 0; start <= 10; start++) {
    console.log(start);
};

let countDown =  83

for (countDown = 83; countDown >= 24; countDown--) {
    console.log(countDown);        
};

let start2 = 0;

while (start2 <= 10) {
    console.log(start2);
    start2 += 1
}

let countDown2 = 83;

while (countDown2 >= 24) {
    console.log( countDown2);
    countDown2 -= 1
}

/* 2.- Crea la variable "num" y haz que un bucle "for" imprima la tabla 
de multiplicar de ese número (del 0 al 10) en la consola */

let num = parseInt(prompt("Ingrese un numero"));

if (isNaN(num)) {
    alert('El caracter ingresado no es un numero')
};

for (i = 1; i <=10; i++) {    
 console.log(`${num} X ${i} = ${num * i} `);
};

/* 3.- Imprime por consola el siguiente patrón: 
i    i**2   i**3 */

console.log (" i    i**2   i**3");
console.log("-----------------");

for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

/*4.- Imprime por consola, , la suma de todos los números del 0 al 10. */

let add = 0 

for ( i = 0; i <= 10; i++) {
    add += i;
}
console.log(`La suma total de los numeros del 0 al 10 seria igual a ${add}`)

/* 5.-
5.1.- Imprime por consola los números del 0 hasta el 100, pero sólo los que estén comprendidos entre el 10 y 23, entre el 56 y 62.   
 */


for (let i = 0; i <= 100; i++) {
    if ((i >= 10 && i <= 23) || (i >= 56 && i <= 62)) {
        console.log(i);
    }
}

/* 5.2.- Luego haz otro log que muestre solo los números divisibles entre 5 o 7.*/

for ( i = 0; i <= 100; i++) {
    if (i%5 === 0 || i%7 === 0) {
        console.log(i);
    }

}

/*6.- Pídele al usuario que introduzca un número e imprime por consola: 
"La suma de todos los números pares del 0 al <<num>> es <<result>>, y la suma de todos los 
números impares del 0 al <<num>> es <<result>>." */

let userNumber = parseFloat(prompt('Introduzca un numero'))

let numberEven = 0;
let numberOdd = 0;

for (i=0 ; i <= userNumber; i++){
    if (i%2 === 0){
        numberEven += i;
    } else{
        numberOdd += i;
    }
}
console.log(`Suma de pares es ${numberEven} y la suma de impares es ${numberOdd}`);

/*7.- Imprime el siguiente patrón por consola:

#
##
###
####
#####
######
####### */

for (let i = ""; i.length <= 7; i += "#"){
    console.log(i);
}

/* 8.- Imprime por consola el siguiente patrón:
                 ##
                ####
               ######
              ########
             ##########
            ############
           ##############
            ############
             ##########
              ########
               ######
                ####
                 ## 
                 
*/


function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let space = ' '.repeat(rows - i);
        let numberSign = '#'.repeat(2 * i - 1);
        console.log(space + numberSign + space);
    }
}
printPyramid(5);

function printInvertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let space = ' '.repeat(rows - i);
        let numberSign = '#'.repeat(2 * i - 1);
        console.log(space + numberSign + space);
    }
}
printInvertedPyramid(5);

