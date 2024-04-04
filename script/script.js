
const cantidadNecesaria = 10;

function contarAlumnos(alumnos) {
  return alumnos.length;
}

function posibleCursada(alumnos) {
  const cantidadAlumnos = contarAlumnos(alumnos);
  if (cantidadAlumnos >= cantidadNecesaria) {
    document.write("Felicitaciones, tu cursada tiene las inscripciones suficientes!" + "<br>");
  } else {
    document.write("La cursada no puede iniciar, faltan alumnos." + "<br>");
  }
}

let alumnosInscriptos = [];

for (let i = 1; i <= 10; i++) {
    var alumno = prompt("Ingrese el nombre del alumno");
    alumnosInscriptos.push(alumno);
}

posibleCursada(alumnosInscriptos);
document.write("Los alumnos que comenzarán el presente curso son:" + "<br>" + alumnosInscriptos.join("<br>") + "<br>");


document.write("<br>" + "--------------------------------------0---------------------------------" + "<br>");

document.write("<br>" + "Felicitaciones, ha terminado la cursada. El promedio de nota de sus alumnos es el siguiente:" + "<br>");

class Alumno {
  constructor(nombre) {
      this.nombre = nombre;
      this.parcial1 = parseFloat(prompt(`Ingrese la nota del parcial 1 para ${this.nombre}:`));
      this.parcial2 = parseFloat(prompt(`Ingrese la nota del parcial 2 para ${this.nombre}:`));
  }

  calcularPromedio() {
      const promedio = (this.parcial1 + this.parcial2) / 2;
      return promedio.toFixed(2);
  }
}

const alumnos = [];
for (let i = 0; i < alumnosInscriptos.length; i++) {
  const nombreAlumno = alumnosInscriptos[i];
  const alumno = new Alumno(nombreAlumno);
  alumnos.push(alumno);

  // Agregar evento de clic al nombre del alumno para mostrar las notas parciales y el promedio
  const alumnoElement = document.createElement('div');
  alumnoElement.textContent = nombreAlumno;
  alumnoElement.addEventListener('click', () => {
    alert(`Notas parciales de ${nombreAlumno}:\nParcial 1: ${alumno.parcial1}\nParcial 2: ${alumno.parcial2}\nPromedio: ${alumno.calcularPromedio()}`);
  });
  document.body.appendChild(alumnoElement);
}


