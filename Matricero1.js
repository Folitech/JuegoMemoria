
var incognita  = new Set();
let x = 4;
let y = 4;

let ran = function getRandomInt() {
    return Math.floor(Math.random() * (x*y - 1 + 1) + 1);
}
while(true) {
    let valor = ran().toFixed();

    if (!incognita.has(valor)) incognita.add(valor);
    
    if (incognita.size === (x*y)) break;
    
    //console.log("repetido");
}

console.log("prueba switch")

// me parece al pedo reasignar un nombre.
// itero sobre todos los valores y les cambio numero por
// letra y numero A1 y A2 seria la imagen repetida
for (let valor of incognita) {

    switch(valor) {
        case '1':
            incognita.delete(valor);
            incognita.add("A1");
            break;
        case '2':
            incognita.delete(valor);
            incognita.add("A2");
            break;
        case '3':
            incognita.delete(valor);
            incognita.add("B1");
            break;
        case '4':
            incognita.delete(valor);
            incognita.add("B2");
            break;
        case '5':
            incognita.delete(valor);
            incognita.add("C1");
            break;
        case '6':
            incognita.delete(valor);
            incognita.add("C2");
            break;
        case '7':
            incognita.delete(valor);
            incognita.add("D1");
            break;
        case '8':
            incognita.delete(valor);
            incognita.add("D2");
            break;
        case '9':
            incognita.delete(valor);
            incognita.add("E1");
            break;
        case '10':
            incognita.delete(valor);
            incognita.add("E2");
            break;
        case '11':
            incognita.delete(valor);
            incognita.add("F1");
            break;
        case '12':
            incognita.delete(valor);
            incognita.add("F2");
            break;
        case '13':
            incognita.delete(valor);
            incognita.add("G1");
            break;
        case '14':
            incognita.delete(valor);
            incognita.add("G2");
            break;
        case '15':
            incognita.delete(valor);
            incognita.add("H1");
            break;
        case '16':
            incognita.delete(valor);
            incognita.add("H2");
            break;  
}
}

var matriz = new Map();
var incognitaFinal = new Array(...incognita);
let je = 0;

for( let i=0 ; i < x ; i++ ) {

    for(let j=0 ; j < y ; j++) {
            
        matriz.set(`[${i}][${j}]`, `${incognitaFinal[je]}`);
        je++;

    }
}

console.log("incognita");

console.log(incognita);
console.log(matriz);
console.log("fin");