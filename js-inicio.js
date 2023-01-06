console.log("hola mundo");

const parrafo = document.querySelector("#info__inicio");

const textoUno = "Juguetes fabricados en material simple pero resistente a la manipulación de niños de más de 3 años, que plantean una actividad inicial guiada para luego estimular la versatilidad y creatividad en el juego.";

const textoDos = "Pensados con secuencias didácticas que acompañan y fortalecen los procesos de aprendizaje de la lectoescritura y comprensión lectora en la primera infancia, haciendo hincapié en el desarrollo de consciencia fonológica y motricidad fina.";

const textoTres = "Cada juego cuenta con el acceso a una aplicación web con juegos desarrollados para acompañar a los niños en un acercamiento guiado con la tecnología."

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

