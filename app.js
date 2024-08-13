function validarNota(nota) {
    switch (true) {
        case (nota >= 60):
            console.log("El alumno ha aprobado.");
            break;
        case (nota < 60):
            console.log("El alumno no ha aprobado.");
            break;
        default:
            console.log("Nota inválida.");
            break;
    }
}

validarNota(59);
