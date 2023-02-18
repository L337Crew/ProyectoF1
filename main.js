/*  
let numeroSorteo = Number(prompt ("ingrese su numero"));

if (numeroSorteo <=24) {
    alert ("no has ganado");
}else if (numeroSorteo >=26) {
    alert ("no has ganado");
}else {
    alert ("has gandado!!");
}
*/

/*  
for ( let NumReserva = 1; NumReserva <= 25; NumReserva++) {
    let usuario = prompt ("ingresu su nombre de usuario");
    alert (`${usuario} usted tiene la reserva # ${NumReserva}`)
}
alert ("Se han agotado las reservas del producto");
*/

alert ("ingrese la opcion del producto deseado. Para salir ingrese 0")
let seleccionProducto = Number(prompt("1-Amd Ryzen 5 5600G $50000 2-Amd Ryzen 5 5600X $60000 3- Amd Ryzen 7 $80000 4- Amd Ryzen 9 $120000"))
let seleccionCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}

while (seleccionProducto !== 0){
    switch (seleccionProducto){
        case 1:
            seleccionCantidad = Number(prompt("ha seleccionado Amd Ryzen 5 5600G, indique la cantidad:"))
            total += cantidad(seleccionCantidad, 50000)
            break;
        case 2:
            seleccionCantidad = Number(prompt("ha seleccionado Amd Ryzen 5 5600X, indique la cantidad:"))
            total += cantidad(seleccionCantidad, 60000)
            break;
         case 3:
            seleccionCantidad = Number(prompt("ha seleccionado Amd Ryzen 7, indique la cantidad:"))
            total += cantidad(seleccionCantidad, 80000)
            break;
         case 4:
            seleccionCantidad = Number(prompt("ha seleccionado Amd Ryzen 9, indique la cantidad:"))
            total += cantidad(seleccionCantidad, 120000)
            break;
         default:
            break;             
    }
    seleccionProducto = Number(prompt("1-Amd Ryzen 5 5600G $50000 2-Amd Ryzen 5 5600X $60000 3- Amd Ryzen 7 $80000 4- Amd Ryzen 9 $120000   (0 para salir)"))
}
alert("el valor de su compra es de: " + total)