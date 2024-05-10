//Actividad: Implementando el ecadenamiento opcional
const misDatosFisicos = {
    nombre: "Ruth",
    edad: 26,
    direccion:{
        calle: "Huantar",
        numero: 184,
        ciudad: "Lima"
    },
    altura: 1.50,
    peso: 60,
    hobby: "cantar"
}

let contenidoPerfil = `
<h1>BIENVENID@</h1>
<h2>${misDatosFisicos.nombre??"No hay data"}</h2>
<p>Edad: ${misDatosFisicos.edad??"No hay data"}</p>
<p>Dirección: ${misDatosFisicos.direccion.calle??"No hay data"}, ${misDatosFisicos.direccion.numero??"No hay data"}, ${misDatosFisicos.direccion.ciudad??"No hay data"}</p>
<p>Altura: ${misDatosFisicos.altura??"No hay data"} cm</p>
<p>Peso: ${misDatosFisicos.peso??"No hay data"}</p>
<p>Hobby: ${misDatosFisicos.hobby??"No hay data"}</p>
<p>Raza: ${misDatosFisicos.raza??"No hay data"}</p>
`;

let contenidoPerfil2 = `
BIENVENID@
${misDatosFisicos.nombre??"No hay data"}
Edad: ${misDatosFisicos.edad??"No hay data"}
Dirección: ${misDatosFisicos.direccion.calle??"No hay data"}, ${misDatosFisicos.direccion.numero??"No hay data"}, ${misDatosFisicos.direccion.ciudad??"No hay data"}
Altura: ${misDatosFisicos.altura??"No hay data"} cm
Peso: ${misDatosFisicos.peso??"No hay data"}
Hobby: ${misDatosFisicos.hobby??"No hay data"}
Raza: ${misDatosFisicos.raza??"No hay data"}
`;

const perfil = document.getElementById("perfil");
perfil.innerHTML = contenidoPerfil;


//Actividad: Definiendo una función con parámetros predeterminados
function dondeImprimirTemplate(template, id = "pre3"){
    const preElement = document.getElementById(id);
    preElement.textContent = template;
}

dondeImprimirTemplate(contenidoPerfil2);


