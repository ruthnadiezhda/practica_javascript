const navSelector = document.querySelector("#nav");

const options1 = [
    { title: "Ofertas", linkTo: "./outlet.html" },
    { title: "Cómo comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantía", linkTo: "./warranty.html" },
];

for (let option of options1) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.style.margin = "5px";
    anchor.style.padding = "5px";
    anchor.style.textAlign = "center";
    anchor.style.color = "white";
    anchor.style.textDecoration = "none";
    anchor.style.fontWeight = "700";
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    listItem.appendChild(anchor);
    navSelector.appendChild(listItem);
}

const footerSelector = document.querySelector("#footer");

const options2 = [
    { title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
    { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
    { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: "Garantía", linkTo: "./warranty.html", opts: ["Perú", "Extranjero"] },
];

for (let option of options2) {
    const div_col = document.createElement("div");
    div_col.style.padding = "5px";
    div_col.className = "col";

    const ul_col = document.createElement("ul");
    ul_col.style.padding = "5px";
    ul_col.style.listStyleType = "none";

    const li_col = document.createElement("li");
    li_col.style.padding = "5px";
    li_col.className = "col-main-item";
    
    const anchor = document.createElement("a");
    anchor.style.padding = "5px";
    anchor.style.textAlign = "center";
    anchor.style.color = "white";
    anchor.style.textDecoration = "none";
    anchor.style.fontWeight = "700";
    anchor.className = "footer-option";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    li_col.appendChild(anchor);

    for (let sub_option of option.opts){
        const s_li_col = document.createElement("li");
        s_li_col.className = "col-main-item2";

        const s_anchor = document.createElement("a");
        s_anchor.className = "footer-option";
        s_anchor.textContent = sub_option;
        s_anchor.style.padding = "10px";
        s_anchor.style.margin = "10px";
        s_anchor.style.textAlign = "center";
        s_anchor.style.color = "white";
        s_anchor.style.textDecoration = "none";
        s_li_col.appendChild(s_anchor);
        li_col.appendChild(s_li_col);
    }

    ul_col.appendChild(li_col);
    div_col.appendChild(ul_col);
    console.log(div_col);
    footerSelector.appendChild(div_col);
}


/*ACTIVIDAD INTEGRADORA*/

//Obtiene valor de session
let session = localStorage.getItem("isOnline");
//Muestra session
console.log(session);
//Si no existe session, lo crea (pone valor default a false a isOnline)
if (!session){
    localStorage.setItem("isOnline", JSON.stringify(false));
}


//Crear función para evaluar el booleano  isOnline y renderizar los iconos
/*
function renderizarIconos(){
    //Obtengo los elementos
    const isOnline= localStorage.getItem("isOnline") === "true";
    console.log(isOnline);
    const iconoSessionOut = document.getElementById("sessionout");
    const iconoSessionIn = document.getElementById("sessionin");
    const iconoCarrito = document.getElementById("cart");

    //Evaluo condiciones para mostrar y ocultar elementos
    if(isOnline){
        iconoSessionOut.classList.add("hidden");
        iconoSessionIn.classList.remove("hiden");
        iconoCarrito.classList.remove("hidden");
    } else {
        iconoSessionOut.classList.remove("hidden");
        iconoSessionIn.classList.add("hiden");
        iconoCarrito.classList.add("hidden");
    }
}
*/
import { renderizarIconos } from "./functions/renderizarIconos.js";


//Logica para cerrar sesión cuando se clickee el icono de SessionOut y para que se muestre el carrito y perfil cuando tenga SessionIn
document.getElementById("sessionout").addEventListener("click", function(){
    localStorage.setItem("isOnline",JSON.stringify(true));
    renderizarIconos();
});

document.getElementById("sessionin").addEventListener("click", function(){
    localStorage.setItem("isOnline",JSON.stringify(false));
    renderizarIconos();
});

// Llamar a renderIcons inicialmente para establecer la vista correcta al cargar
document.addEventListener('DOMContentLoaded', renderizarIconos);