const lista1 = [
    100,
    500,
    800,
    300000000,
    3,
    5500,
    23,
    13
];
const lista4 = [
    100,
    500,
    800,
    300000000,
    3,
    5500,
    23,
    13,
    40, 29,19,12536
];

function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    const listaOrdenada =  lista.sort(function (a, b) {
        return a - b
    })

    let mediana;
    const mitadLista = parseInt(lista.length / 2)

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1]
        const elemento2 = listaOrdenada[mitadLista]
        const promedioElemto1y2 = calcularMediaArimetica([
            elemento1,
            elemento2,
        ])
        return mediana = promedioElemto1y2;

    } else {
        return mediana = listaOrdenada[mitadLista1]
    }
}

