const product = {count: 3, price: 12.55, type: "alimentación"};

//Precio de cada producto//

let PrecioTotal; 

if (product.count > 0){

PrecioTotal= product.count * product.price;
}
else {
    PrecioTotal = 0
}

console.log ("PrecioTotal: ", PrecioTotal + "€");



//Posible IVA a cobrar//

let tipoIVA;

switch (product.type) {
case "alimentación": 
 tipoIVA = 0.10; 
 break;

case "libro": 
 tipoIVA =0.04;
break;

default: tipoIVA = 0.21;

}
console.log(tipoIVA);

//Precio del producto con IVA//

const IVA = PrecioTotal * tipoIVA

console.log (PrecioTotal * tipoIVA)
console.log (PrecioTotal + IVA)





 



