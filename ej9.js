function Persona(nombre, edad, genero){
    this.nombre=nombre; 
    this.edad=edad; 
    this.genero=genero; 
}
Persona.prototype.obtDetalles= function(){
    console.log (`nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}`);
};

function Estudiante(nombre, edad, genero, curso, grupo){
    Persona.call(this, nombre, edad, genero);
    this.curso=curso;
    this.grupo=grupo;
}
Estudiante.prototype=Object.create(Persona.prototype); 
Estudiante.prototype.constructor=Estudiante; 

Estudiante.prototype.register= function(){
   console.log(`nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, curso: ${this.curso}, grupo: ${this.grupo}`); 
}; 

function Profesor(nombre, edad, genero, asignatura, nivel){
   Persona.call(this, nombre, edad, genero); 
    this.asignatura=asignatura;
    this.nivel=nivel; 
}
Profesor.prototype = Object.create(Persona.prototype); 
Profesor.prototype.constructor=Profesor; 

Profesor.prototype.asignar=function(){
   console.log(`nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}, curso: ${this.curso}, grupo: ${this.grupo}, asignatura: ${this.asignatura}, nivel: ${this.nivel}`); 
};

function print(){
    const Persona1=new Persona("Carlos", 30, "Masculino"); 
    Persona1.obtDetalles(); 

    const Estudiante1=new Estudiante("Ana", 20, "Femenino", "Secundario", "A"); 
    Estudiante1.obtDetalles();
    Estudiante1.registrar();

    const Profesor1= new Profesor("Pedro", 45, "Masculino", "fisica"); 
    Profesor1.obtDetalles();
    Profesor1.asignar(); 
}
