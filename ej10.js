let resultados = new Array(13).fill(0); 
function lanzarDado(){
return Math.floor(Math.random()* 6 +1); 
}
for(let i=0; i< 36000; i++){
    let d1=lanzarDado();
    let d2=lanzarDado(); 
    let suma= d1 + d2; 

    resultados[suma]++; 
}
 for(let i=2; i<=12; i++){
    console.log(`la suma ${i} aparecio ${resultados[i]} veces. `); 
 }