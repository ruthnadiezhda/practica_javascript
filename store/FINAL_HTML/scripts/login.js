
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return false;
    }
    return true;
}
