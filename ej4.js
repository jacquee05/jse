var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

    var a=prompt("ingrese su dni: ");
    if(a<0 || a>999999999){
        console.log("esta mal");
}else{
  var dni=a%23;
  console.log(dni);
  console.log(letras[dni]);
}