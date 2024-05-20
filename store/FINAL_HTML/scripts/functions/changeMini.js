//Como es evento debe tener un window para que aparezca en la ventana de la función principal
export function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#big-img");
    bigSelector.src = selectedSrc;
}

window.changeMini = changeMini;