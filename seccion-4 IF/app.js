// crear un algoritmo, que basado en la nota 
// imprima si el alumno aprueba la materia
// aprueba 60
// si el alumno tiene nota menor 50
// imprimir un mensaje que diga 
// por favor estudie más 

let nota = 60;


if ( nota >= 50 ) {
    console.log ('El alumno aprueba la clase');
}else {

    if( nota < 50) { 
    console.log('por favor estudie mas');
    } else {
        console.log('El alumno No aprueba la clase');
    }
}

console.log('fin del programa');