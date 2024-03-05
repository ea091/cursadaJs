const cantidadNecesaria = 10;


function contarAlumnos(alumnos) {
  return alumnos.length;
}


function posibleCursada(alumnos) {
  const cantidadAlumnos = contarAlumnos(alumnos);
  if (cantidadAlumnos >= cantidadNecesaria) {
    document.write("Felicitaciones tu cursada tiene las inscripciones suficientes!"+ "<br>");
  } else {
    document.write("La cursada no puede iniciar, faltan alumnos.");
  }
}

let alumnosInscriptos = [];
  
for (let i=1; i <= 10; i+=1){
    var alumno = prompt("nombre");
    alumnosInscriptos.push(alumno);
}


posibleCursada(alumnosInscriptos);
document.write("Los alumnos que comenzaran el presente curso son:"+ "<br>" + alumnosInscriptos.join("<br>"));