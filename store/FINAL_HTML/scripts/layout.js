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

