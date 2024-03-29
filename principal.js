import { cartel } from './logica.js'; 
 let divCabera=document.getElementById("divCabecera");
let personajes=[];
fetch ('https://randomuser.me/api/')
   .then(response=>response.json())
   .then(data=>{
       console.log(data);
       
      /*for(let p of data){
        let personaje={
          nombre:p.name,
          vive:p.alive,
          imagen:p.image,
          casa:p.house,
          raza:p.species,
          genero:p.gender
        }
        if(!p.house){
           personaje.casa="Sin Casa";
        }
        personajes.push(personaje);
      }
   
      console.log(personajes);*/
      })
    .catch(error=> console.error('Error al acceder a la pagina ', error));
    console.log(`${cartel}`);
    let parrafo=document.createElement("p");
    parrafo.textContent=`${cartel}`;
    divCabera.appendChild(parrafo);
    
    