const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


function aplicarDescuento() {
    const inputPrice = document.querySelector("#inputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.querySelector("#inputDiscount")
    const DiscountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue)
    const resultp = document.querySelector("#resultP")
    resultp.innerText = 'El precio con descuento es: $' + precioConDescuento;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });