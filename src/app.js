import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// frases ejercicio 
let who   = ['La casa', 'mi tio', 'mi hijo', 'el curso'];
let action= ['come', 'orina', 'agrega', 'rompe'];
let what  = ['la rurtina', 'mi ventana', 'el coche'];
let when  = ['despues del gym', 'mientars duermo', 'cuando fui a correr', 'en la playa', 'mientras cantaba'];

//funcion ejercicio layla
function generarExcusa () {
  const whoPart   = who[Math.floor(Math.random()*who.length)];
  const actionPart= action[Math.floor(Math.random()*action.length)];
  const whatPart  = what[Math.floor(Math.random()*what.length)];
  const whenPart  = when[Math.floor(Math.random()*when.length)];
  return `${whoPart} ${actionPart} ${whatPart} ${whenPart}`;
}

window.onload = function () {
  document.getElementById("excusa").innerHTML = generarExcusa();
  
};
