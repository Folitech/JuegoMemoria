let x = 4;
let y = 4;

var figura = new Array();

// funcion que obtiene un ramdon entre un maximo y minimo.
let ran = function getRandomInt() {
    return Math.floor(Math.random() * (x*y - 1 + 1) + 1);
}

// Funcion que obtiene la suma los indices
let sumaTodo = () => {
    let resultadoTodo = 0;
    for(let i = ( x * y ) ; i >= 0; i--) {
        resultadoTodo = resultadoTodo + i;
    }
    return parseInt(resultadoTodo);
}

// Iteracion de valores e insercion sin repeticion
for(let i=0; i<( x * y ) ;) {

    let valor = parseInt(ran());
    if (!figura.includes(valor)) {
        figura.push(valor);
        i++;
    } 
        else if (i===(( x * y ) - 1)) {
            let sumaparams = () => {
                let sumaTodoMenosUno = 0;
                for(let item of figura) {
                    sumaTodoMenosUno = sumaTodoMenosUno + parseInt(item);
                }
                return  sumaTodo() - sumaTodoMenosUno;
            }
            figura.push( sumaparams() );
            break;
            
    } 
        else {
        //console.log("repetido");
    }
}

var matriz = new Map();

let je = 0;

for( let i=0 ; i < x ; i++ ) {

    for(let j=0 ; j < y ; j++) {
            
        matriz.set(`[${i}][${j}]`, `${figura[je]}`);
        je++;

    }
}

console.log(...figura);
console.log(matriz);
console.log("Fin");