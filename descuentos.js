//const precioOriginal = 120;
//const descuento = 18;
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function aplicarDescuento() {
    const inputPrice = document.querySelector("#inputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.querySelector("#inputDiscount")
    const discountValue = parseInt(inputDiscount.value)

    const cuponAplicado = obtenerCupon()
    const descuentoMasCupon = parseInt(cuponAplicado + discountValue)

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuentoMasCupon)
    const resultp = document.querySelector("#resultP")
    resultp.innerText = 'El precio con descuento es: $' + precioConDescuento;
    pintarResultado()
}

function obtenerCupon(){
    /* Para obtener el valor de un select*/
    var cupon = parseInt(document.querySelector(".form-select").value);
    return cupon
}

function pintarResultado() {
    const estiloResultado = document.querySelector(".card-footer")
    console.log(estiloResultado);
    estiloResultado.style = "background:#157347";
}

        // /* Para obtener el texto */
        // var combo = document.querySelector(".form-select");
        // var selected = combo.options[combo.selectedIndex].text;
        // alert(selected);
        // }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });