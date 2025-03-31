
function paroImpar(numero){
     if(numero % 2 === 0){
        return "el numero es par"
     }else{
        return "el numero es impar"
     }
}
     let numero =parseInt(prompt("ingrese un numero entereo"));
     let resultado=paroImpar(numero); 
     alert (resultado); 