// funciones Helpers o ultis no son parte del negocio pero se necesitan
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad]

        const mediana = calcularMediaArimetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad]
        return personitaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
)

const medianaTop10Col = medianaSalarios(salariosColTop10);


function obtenerTipoMedianaSeleccionada(){
    /* Para obtener el valor de un select*/
    var tipoMediana = parseInt(document.querySelector(".form-select").value);
    return tipoMediana
}

function calcularMediana() {
    const medianaSeleccionada = obtenerTipoMedianaSeleccionada()
    if (medianaSeleccionada === 0) {
        swal("Por favor seleccione mediana a calcular", {
            icon: "error",
        });
    } else if (medianaSeleccionada === 1) {
        const result = document.querySelector("#result")
        result.innerText = `Resultado General es:  ${medianaGeneralCol}`
    } else {
        const result = document.querySelector("#result")
        result.innerText = `Resultado Top 10 es:  ${medianaTop10Col}`
    }
    pintarResultado()
}

function pintarResultado() {
    const estiloResultado = document.querySelector("#result")
    estiloResultado.style = "background: #dc3545";
}

// console.log({
//     medianaGeneralCol,
//     medianaTop10Col
// });