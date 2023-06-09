//traigo la librería de React
import React from 'react';
//traigo la libreria de React para mostrarla en el DOM
import ReactDOM from 'react-dom/client';
//agarro una app que ya exista de React
import App from "./App"
import "./estilos.css"
//muestro la app en el DOM
//crea un punto inicial (root) en donde la app se va a montar (dibujar)
//se puede seleccionar cualquier etiqueta que exista en el HTML menos el BODY 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


