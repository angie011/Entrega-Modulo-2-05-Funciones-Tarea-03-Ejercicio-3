let largo = 0.0;
let ancho = 0.0;
let area = 0.0;
let resultArea = 0.0;
let perimetro= 0.0;
let resultPerimetro = 0.0;


largo = Number(prompt('Ingrese el largo del rectángulo (cm): '));

while(largo == ''){
    alert('Debe ingresar un valor numérico.');
    largo = Number(prompt('Ingrese el largo del rectángulo (cm): '));
}
ancho = Number(prompt('Ingrese el ancho del rectángulo (cm): '));

while(ancho==''){
    alert('Debe ingresar un valor numérico.');
    ancho = Number(prompt('Ingrese el ancho del rectángulo (cm): '));
}

resultArea = calcularArea(largo,ancho);
resultPerimetro = calcularPerimetro (largo,ancho);
alert(`El área del rectángulo es: ${resultArea} cm2
 El perímetro del rectángulo es: ${resultPerimetro} cm2`);

function calcularArea(l,a){
    area = l*a;
    return area;
}

function calcularPerimetro(l,a){
    perimetro = (2*l)+(2*a);
    return perimetro;
}
