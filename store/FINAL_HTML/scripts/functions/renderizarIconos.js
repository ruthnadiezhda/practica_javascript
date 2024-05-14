//Crear función para evaluar el booleano  isOnline y renderizar los iconos
export function renderizarIconos(){
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