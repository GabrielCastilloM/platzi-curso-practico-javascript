//Código del Cuadrado
console.group('cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadraro miden: ' + ladoCuadrado + 'cm')

function perimetroCuadrado(lado) {
    return	lado * 4;
}
//console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm')

function areaCuadrado(lado) {
    return	lado * lado;
}
//console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2')
console.groupEnd()

//Código del Triángulo
// console.group('Triángulos');
// const ladoTriagulo1 = 6;
// const ladoTriagulo2 = 6;
// const baseTriagulo = 4;
// console.log(
//     'Los lados del triángulo miden: '
//     + ladoTriagulo1
//     + 'cm, '
//     + ladoTriagulo2
//     + 'cm, ' 
//     + baseTriagulo
//     + 'cm'
// );

// const alturaTriagulo = 5.5;
// console.log('La altura del triángulo es: ' + alturaTriagulo + 'cm')

function perimetroTriagulo(ladot1 , ladot2, base) {
    return ladot1 + ladot2 + base;
}
//console.log('El perimetro del triángulo es: ' + perimetroTriagulo + 'cm')

function areaTriagulo(base, alturaT) {
    return  (base * alturaT) / 2;
}

//console.log('El área del triángilo es: ' + areaTriagulo + 'cm^2')
console.groupEnd()

//Código del Círculo
console.group('Círculos');

// const radioCirculo = 4;
// console.log('El radio del círculo es: ' + radioCirculo + 'cm')

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;


//perimetro o circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd()

//Aquí interactuamos con HTML
function calcularPerimetroCuadrado(params) {
    const input = document.getElementById('inputCuadrado')   
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    const estiloResultado = document.querySelector("#footerCuadrado")
    estiloResultado.innerHTML = `<h5>El perimetro del cuadrado es: ${perimetro}</h5>`
    estiloResultado.style = "background:#c7c7d9";

}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    const estiloResultado = document.querySelector("#footerCuadrado")
    estiloResultado.innerHTML = `<h5>El área del cuadrado es: ${area}</h5>`
    estiloResultado.style = "background:#97d280";
}

const calcularPerimetroTriangulo = () => {
    const ladoA = parseInt(document.querySelector('#inputTriaguloA').value)
    const ladoB = parseInt(document.querySelector('#inputTriaguloB').value)
    const base = parseInt(document.querySelector('#base').value)
    const perimetro = perimetroTriagulo(ladoA , ladoB, base)
    const estiloResultado = document.querySelector("#footerTriangulo")
    estiloResultado.innerHTML = `<h5>El perimetro del triangulo es: ${perimetro}</h5>`
    estiloResultado.style = "background:#c7c7d9";
}

const calcularAreaTriangulo = () => {
    const base = parseInt(document.querySelector('#base').value)
    const altura = parseInt(document.querySelector('#altura').value)
    const area = areaTriagulo(base, altura)
    const estiloResultado = document.querySelector("#footerTriangulo")
    estiloResultado.innerHTML = `<h5>El área del triangulo es: ${area}</h5>`
    estiloResultado.style = "background:#97d280";
}

const calcularPerimetroCirculo = () => {
    const radio = parseInt(document.querySelector('#inputRadio').value)
    const perimetro = perimetroCirculo(radio)
    const estiloResultado = document.querySelector("#footerCirculo")
    estiloResultado.innerHTML = `<h5>El perimetro del círculo es: ${perimetro}</h5>`
    estiloResultado.style = "background:#97d280";
}

const calcularAreaCirculo = () => {
    const radio = parseInt(document.querySelector('#inputRadio').value)
    const area = areaCirculo(radio)
    const estiloResultado = document.querySelector("#footerCirculo")
    estiloResultado.innerHTML = `<h5>El área del círculo es: ${area}</h5>`
    estiloResultado.style = "background:#97d280";
}

