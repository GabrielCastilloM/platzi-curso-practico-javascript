const lista14 = [
    100,
    200,
    300,
    500,
    100
]

const listaNumeros = [];
// llenar lista de numeros
function llenarListaNumeros(params) {
    const inputLista = document.querySelector('#inputLista')
    const valorInput = parseInt(inputLista.value)
    listaNumeros.push(valorInput)
    document.querySelector('#inputLista').value = ''
    document.querySelector("#resultlista").innerHTML = `<h5>Tu lista es [${listaNumeros}]</h5>` 

    const listaOrdenada =  listaNumeros.sort(function (a, b) {
        return a - b
    })
    const resultlistaOrdenada = document.querySelector("#resultlistaOrdenada")
    resultlistaOrdenada.innerText = `Lista Ordenada[${listaOrdenada}]` 
}

function calcular() {
   
    calcularMediaArimetica(listaNumeros)
    calcularMediana(listaNumeros)
    calcularModa(listaNumeros) 
    pintarResultado()
}


///calcular Promedio
function calcularMediaArimetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length;
    const resultp = document.querySelector("#resultP")
    resultp.innerText = `Es:  ${promedioLista}`
    return promedioLista
}

//Calcular media
function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const listaOrdenada =  listaNumeros.sort(function (a, b) {
    return a - b
})



function calcularMediana(lista) {
    

    let mediana;
    const mitadLista = parseInt(lista.length / 2)

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1]
        const elemento2 = listaOrdenada[mitadLista]
        const promedioElemto1y2 = calcularMediaArimetica([
            elemento1,
            elemento2,
        ])
        const resultMe = document.querySelector("#resultMe")
        
        resultMe.innerText = `Es:  ${promedioElemto1y2}` 
        return mediana = promedioElemto1y2;

    } else {
        resultMe.innerText = `Es:  ${listaOrdenada[mitadLista]}` 
        return mediana = listaOrdenada[mitadLista]
    }
}

///calcular moda
function calcularModa(lista) {

    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    )
    const moda = listaArray [listaArray.length - 1 ]
    const resultMo = document.querySelector("#resultMo")
    resultMo.innerText = `Es:  ${moda}` 
    return moda;
}


function pintarResultado() {
    const estiloResultado1 = document.querySelector(".foterColorP")
    const estiloResultado2 = document.querySelector(".foterColorMe")
    const estiloResultado3 = document.querySelector(".foterColorMo")
  
    estiloResultado1.style = "background:#ffc107";
    estiloResultado2.style = "background:#ffc107";
    estiloResultado3.style = "background:#ffc107";
}