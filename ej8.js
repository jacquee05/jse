function esPalindromo(texto) {

   var limpio = texto.toLowerCase().replace(/\s/g, '');
 
   var invertido = limpio.split('').reverse().join('');
 
   return limpio === invertido;
 }
 
 var frase = "La ruta nos aporto otro paso natural";
 if (esPalindromo(frase)) {
   console.log("Es un palíndromo");
 } else {
   console.log("No es un palíndromo");
 }
 