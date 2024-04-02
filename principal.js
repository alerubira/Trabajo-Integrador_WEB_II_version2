import { cartel } from './logica.js'; 
 let divCabera=document.getElementById("divCabecera");
let personajes=[];
fetch ('https://randomuser.me/api/')
   .then(response=>response.json())
   .then(data=>{
       console.log(data);
      
      })
    .catch(error=> console.error('Error al acceder a la pagina ', error));
    console.log(`${cartel}`);
    let parrafo=document.createElement("p");
    parrafo.textContent=`${cartel}`;
    divCabera.appendChild(parrafo);
    console.log()
    if(true){};
    