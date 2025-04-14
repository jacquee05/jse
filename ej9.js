function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
  };
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero); 
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    console.log(this.nombre + " ha sido registrado en el curso " + this.curso + ", grupo " + this.grupo + ".");
  };
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  
  Profesor.prototype.asignar = function() {
    console.log(this.nombre + " imparte la asignatura de " + this.asignatura + " en nivel " + this.nivel + ".");
  };

var persona1 = new Persona("Laura", 30, "Femenino");
console.log("=== Persona ===");
persona1.obtDetalles();

var estudiante1 = new Estudiante("Carlos", 20, "Masculino", "Matemáticas", "B");
console.log("\n=== Estudiante ===");
estudiante1.obtDetalles();
estudiante1.registrar();

var profesor1 = new Profesor("Ana", 45, "Femenino", "Historia", "Secundaria");
console.log("\n=== Profesor ===");
profesor1.obtDetalles();
profesor1.asignar();

