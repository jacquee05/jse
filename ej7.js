
function analizarCadena(cadena){
    if(cadena==cadena.toUpperCase()){
        console.log("la cadena esta formada por mayusculas"); 
    }else if(cadena === cadena.toLowerCase()){
        console.log("la cadena esta formado por  minisculas"); 
    }else{
        console.log("la cadena esat conformada por ambas"); 
    }
}
analizarCadena("hola"); 
analizarCadena("HOLA"); 
analizarCadena("Hola");