//import { cartel } from './logica.js'; 
 let divCabera=document.getElementById("divCabecera");
let productos=[];
/*fetch ('https://fakestoreapi.com/products')
   .then(response=>response.json())
   .then(data=>{
       console.log(data);
      
      })
    .catch(error=> console.error('Error al acceder a la pagina ', error));
    */
   
   fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsea la respuesta JSON
  })
  .then(data => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });



    
  