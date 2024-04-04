// const cantidadNecesaria = 10;


// function contarAlumnos(alumnos) {
//   return alumnos.length;
// }


// function posibleCursada(alumnos) {
//   const cantidadAlumnos = contarAlumnos(alumnos);
//   if (cantidadAlumnos >= cantidadNecesaria) {
//     document.write("Felicitaciones tu cursada tiene las inscripciones suficientes!"+ "<br>");
//   } else {
//     document.write("La cursada no puede iniciar, faltan alumnos.");
//   }
// }

// let alumnosInscriptos = [];
  
// for (let i=1; i <= 10; i+=1){
//     var alumno = prompt("Ingrese le nombre del alumno");
//     alumnosInscriptos.push(alumno);
// }


// posibleCursada(alumnosInscriptos);
// document.write("Los alumnos que comenzaran el presente curso son:"+ "<br>" + alumnosInscriptos.join("<br>"));


// document.write("<br>"+"--------------------------------------0---------------------------------"+"<br>")

// document.write("<br>" + "Felicitaciones, ha terminado la cursada. El promedio de nota de sus alumnos es el siguiente:");

// class Alumno {
//   constructor(nombre) {
//       this.nombre = nombre;
//       this.parcial1 = parseFloat(prompt(`Ingrese la nota del parcial 1 para ${this.nombre}:`));
//       this.parcial2 = parseFloat(prompt(`Ingrese la nota del parcial 2 para ${this.nombre}:`));
//   }

//   calcularPromedio() {
//       const promedio = (this.parcial1 + this.parcial2) / 2;
//       return promedio.toFixed(2);
//   }
// }

// const alumnos = [];
// for (let i = 0; i < alumnosInscriptos.length; i++) {
//   const nombreAlumno = alumnosInscriptos[i];
//   const alumno = new Alumno(nombreAlumno);
//   alumnos.push(alumno);
// }

// document.write("<br>"+"Promedios de los alumnos:<br>");
// for (const alumno of alumnos) {
//   const promedio = alumno.calcularPromedio();
//   document.write(`${alumno.nombre}: ${promedio}<br>`);
// }


const cantidadNecesaria = 10;

function contarAlumnos(alumnos) {
  return alumnos.length;
}

function posibleCursada(alumnos) {
  const cantidadAlumnos = contarAlumnos(alumnos);
  if (cantidadAlumnos >= cantidadNecesaria) {
    document.write("Felicitaciones tu cursada tuvo las inscripciones suficientes!. Hciendo click en el nombre de los alumnos veras sus notas y promedios." + "<br>");
  } else {
    document.write("La cursada no puede iniciar, faltan alumnos.");
  }
}

let alumnosInscriptos = JSON.parse(localStorage.getItem('alumnosInscriptos')) || [];

if (alumnosInscriptos.length === 0) {
  for (let i = 1; i <= 10; i += 1) {
    var nombreAlumno = prompt("Ingrese el nombre del alumno");
    var parcial1 = parseFloat(prompt(`Ingrese la nota del parcial 1 para ${nombreAlumno}:`));
    var parcial2 = parseFloat(prompt(`Ingrese la nota del parcial 2 para ${nombreAlumno}:`));
    alumnosInscriptos.push({ nombre: nombreAlumno, parcial1: parcial1, parcial2: parcial2 });
  }
}

posibleCursada(alumnosInscriptos);

const listaAlumnos = document.getElementById('alumnos-lista');

alumnosInscriptos.forEach((alumno, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = alumno.nombre;
  listItem.addEventListener('click', () => {
    abrirVentanaNotas(alumnosInscriptos[index]);
  });
  listaAlumnos.appendChild(listItem);
});

function abrirVentanaNotas(alumno) {
  const ventanaNotas = window.open('', 'Notas', 'width=400,height=400');
  ventanaNotas.document.write(`<h1>Notas de ${alumno.nombre}</h1>`);
  ventanaNotas.document.write(`<p>Parcial 1: ${alumno.parcial1}</p>`);
  ventanaNotas.document.write(`<p>Parcial 2: ${alumno.parcial2}</p>`);
  ventanaNotas.document.write(`<p>Promedio: ${calcularPromedio(alumno)}</p>`);
}

function calcularPromedio(alumno) {
  const promedio = (alumno.parcial1 + alumno.parcial2) / 2;
  return promedio.toFixed(2);
}

// Guardar en el almacenamiento local
localStorage.setItem('alumnosInscriptos', JSON.stringify(alumnosInscriptos));