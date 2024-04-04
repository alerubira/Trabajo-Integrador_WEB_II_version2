//import { cartel } from './logica.js'; 
 let divCabera=document.getElementById("divCabecera");
let productos=[];
fetch ('https://fakestoreapi.com/')
   .then(response=>response.json())
   .then(data=>{
       console.log(data);
      
      })
    .catch(error=> console.error('Error al acceder a la pagina ', error));
    
   
    divCabera.appendChild(parrafo);
   // personajes.filter((obj,index,personajess)=>{return personajess.indexOf(obj)===index} ); 
    // Generar un número aleatorio entre 1 y 10
     const numeroAleatorio = Math.floor(Math.random() * 10) + 1;



    
  