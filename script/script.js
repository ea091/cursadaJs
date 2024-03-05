const cantidadNecesaria = 2;

// Función para contar la cantidad de alumnos inscriptos
function contarAlumnos(alumnos) {
  return alumnos.length;
}

// Función para evaluar si hay suficientes alumnos para iniciar la cursada
function evaluarCursada(alumnos) {
  const cantidadAlumnos = contarAlumnos(alumnos);
  if (cantidadAlumnos >= cantidadNecesaria) {
    console.log("La cursada puede iniciar, hay suficientes alumnos.");
  } else {
    console.log("La cursada no puede iniciar, faltan alumnos.");
  }
}

let alumnosInscriptos = [];
  
for (let i=1; i <= 10; i+=1){
    var alumno = prompt("nombre");
    alumnosInscriptos.push(alumno);
}


evaluarCursada(alumnosInscriptos);
document.write("los alumnos que comenzaran el presente curso son:"+ "<br>" + alumnosInscriptos.join("<br>"));