console.log("hola mundo");

const parrafo = document.querySelector("#info__inicio");

const textoUno = "Juguetes fabricados en material liviano y resistente a la manipulación de niños mayores de 3 años, que plantean una actividad inicial guiada para luego estimular la versatilidad y creatividad en el juego libre.";

const textoDos = "Pensados a partir de secuencias didácticas que acompañan y fortalecen los procesos de aprendizaje de la lectoescritura y comprensión lectora en la primera infancia.";

const textoTres = "Cada juego cuenta con acceso a una aplicación web con actividades desarrolladas para acompañar a los niños en un acercamiento guiado con la tecnología."

const iconUno = document.querySelector("#icon--1");
const iconDos = document.querySelector("#icon--2");
const iconTres = document.querySelector("#icon--3");

iconUno.addEventListener('mouseover', (e) => {
    parrafo.innerHTML = textoUno;
})

iconDos.addEventListener('mouseover', (e) => {
    parrafo.innerHTML = textoDos;
})

iconTres.addEventListener('mouseover', (e) => {
    parrafo.innerHTML = textoTres;
})

